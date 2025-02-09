import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCaptionType, speakText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';
import { setActiveElement } from 'store/element/elementSlice';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import HtmlAudioPlayer from 'components/shared/AudioPlayer/HtmlAudioPlayer';

import { GridWrap, Divider, SpeakBtn, Iframe } from './Element.styled';

const Element = ({ el, sortByDate, setSortByDate, setLiColor }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const [isIframe, setIsIframe] = useState(true);

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

  const handleSetActiveElement = e => {
    const { _id } = activeCluster;
    dispatch(setActiveElement(el));
    if (e.currentTarget.closest('li').id !== 'active-element') {
      dispatch(updateClusterThunk({ _id, activeEl: el._id }));
    }
  };

  const handleSort = e => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Below is Recent')
      : toast.success('Above is Recent');

    e.stopPropagation();
  };

  const handleToggleIframe = () => {
    isIframe ? setIsIframe(!isIframe) : handleSort();
  };

  const caption = getCaptionType(el.caption);

  return (
    <>
      <GridWrap onClick={handleSetActiveElement}>
        <SpeakBtn onClick={speakElement}>{el.element}</SpeakBtn>

        <Divider onClick={handleToggleIframe} />
        {caption.text && (
          <SpeakBtn onClick={speakCaption}>{caption.text}</SpeakBtn>
        )}
        {isIframe && !caption.text && <Iframe src={caption.link} />}
        {!isIframe && !caption.text && (
          <HtmlAudioPlayer
            src={caption.file}
            accessToken={user.googleToken?.accessToken}
            expiresIn={user.googleToken?.expiresIn}
          />
        )}
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
