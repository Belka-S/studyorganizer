import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCaptionType, speakText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';
import { setActiveElement } from 'store/element/elementSlice';
import { setGoogleToken } from 'store/auth/authSlice';
import { updateClusterThunk } from 'store/cluster/clusterThunks';

import { GridWrap, Divider, SpeakBtn, Iframe, Audio } from './Element.styled';

const Element = ({ el, sortByDate, setSortByDate, setLiColor }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const [blobUrl, setBlobUrl] = useState();

  const divider = '$*@';
  const getTextString = (text, divider) => {
    let textString = '';
    if (!divider) return text;
    if (
      text.trim().endsWith('.') ||
      text.trim().endsWith('!') ||
      text.trim().endsWith('?') ||
      text.endsWith('"')
    ) {
      textString = text
        .trim()
        // dividers
        .replaceAll(', `', `;${divider} `)
        .replaceAll(' `', `${divider} `)
        .replaceAll(',`', ';')
        // abbreviations
        .replaceAll('Mr.', 'misteR')
        .replaceAll('Ms.', 'misS')
        .replaceAll('Mrs.', 'missiS')
        // punctuation
        .replaceAll('...', `__${divider}`)
        .replaceAll('.', `.${divider}`)
        .replaceAll(',', `,${divider}`)
        .replaceAll('!', `!${divider}`)
        .replaceAll('?', `?${divider}`)
        .replaceAll(':', `:${divider}`);
      // numbers
      if (activeCluster.lang.includes('de')) {
        textString = textString
          .replaceAll(`0.${divider}`, '0.')
          .replaceAll(`1.${divider}`, '1.')
          .replaceAll(`2.${divider}`, '2.')
          .replaceAll(`3.${divider}`, '3.')
          .replaceAll(`4.${divider}`, '4.')
          .replaceAll(`5.${divider}`, '5.')
          .replaceAll(`6.${divider}`, '6.')
          .replaceAll(`7.${divider}`, '7.')
          .replaceAll(`8.${divider}`, '8.')
          .replaceAll(`9.${divider}`, '9.');
      }
    } else {
      textString = text.trim() + divider;
    }
    return !textString.includes('[')
      ? textString
      : textString.substring(0, textString.indexOf('[')) + divider;
  };

  const speakElement = e => {
    e.currentTarget.blur();
    const msg = speakText({
      setLiColor,
      divider,
      voices: window.speechSynthesis.getVoices(),
      text: getTextString(el.element, divider),
      lang: activeCluster.lang,
      rate: activeCluster.rate,
    });
    msg && toast.error(msg);
  };
  const speakCaption = e => {
    e.currentTarget.blur();
    const msg = speakText({
      setLiColor,
      divider,
      voices: window.speechSynthesis.getVoices(),
      text: getTextString(el.caption, divider),
      lang: el.lang,
      rate: user.rate,
    });
    msg && toast.error(msg);
  };

  const handleSort = e => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Below is Recent')
      : toast.success('Above is Recent');

    e.stopPropagation();
  };

  const handleSetActiveElement = e => {
    const { _id } = activeCluster;
    dispatch(setActiveElement(el));
    if (e.currentTarget.closest('li').id !== 'active-element') {
      dispatch(updateClusterThunk({ _id, activeEl: el._id }));
    }
  };

  const caption = getCaptionType(el.caption);

  // Pllay Google Drive media
  const googleLogin = useGoogleLogin({
    onSuccess: res => {
      // const userInfo = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: `Bearer ${res.access_token}` }, }).then(res => res.data);
      dispatch(setGoogleToken(res.access_token));
    },
    onError: err => toast(err.message),
  });

  const playGdriveFile = async token => {
    const data = await axios
      .get(caption.file, {
        responseType: 'blob',
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => res.data);
    const blobUrl = URL.createObjectURL(data);
    setBlobUrl(blobUrl);
  };

  return (
    <>
      <GridWrap onClick={handleSetActiveElement}>
        <SpeakBtn onClick={speakElement}>{el.element}</SpeakBtn>

        <Divider
          onClick={
            el.element.startsWith('[')
              ? user.googleToken
                ? () => playGdriveFile(user.googleToken)
                : () => googleLogin()
              : handleSort
          }
        />
        {caption.text && (
          <SpeakBtn onClick={speakCaption}>{caption.text}</SpeakBtn>
        )}
        {blobUrl && <Audio src={blobUrl} controls />}
        {!blobUrl && caption.link && <Iframe src={caption.link} />}
      </GridWrap>
    </>
  );
};

export default Element;

Element.propTypes = {
  el: PropTypes.object,
  sortByDate: PropTypes.bool,
  setSortByDate: PropTypes.func,
  $active: PropTypes.bool,
  $hovered: PropTypes.bool,
  setLiColor: PropTypes.func,
};
