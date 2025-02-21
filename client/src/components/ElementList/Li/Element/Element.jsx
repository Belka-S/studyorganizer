import PropTypes from 'prop-types';
import { toast } from 'sonner';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getCaptionType, speakText } from 'utils/helpers';
import { useAuth, useClusters, useElements } from 'utils/hooks';
import { setActiveElement } from 'store/element/elementSlice';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import HtmlAudioPlayer from 'components/shared/AudioPlayer/HtmlAudioPlayer';

import { GridWrap, Divider, SpeakBtn, Iframe } from './Element.styled';

const Element = ({ el, setLiColor, editCount, selectMode }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const { activeElement } = useElements();

  const element = el.element;
  const caption = getCaptionType(el.caption);

  const [isIframe, setIsIframe] = useState(
    () => !caption.file?.endsWith('.mp3'),
  );

  const divider = '$*@';
  const getTextString = useCallback(
    (text, divider) => {
      let textString = '';
      if (!divider) return text;
      if (['.', '!', '?', '"'].includes(text.trim().at(-1))) {
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
    },
    [activeCluster.lang],
  );

  const speakElement = useCallback(
    e => {
      e?.currentTarget.blur();
      if (selectMode || element.startsWith('[')) return;
      const msg = speakText({
        setLiColor,
        divider,
        voices: window.speechSynthesis.getVoices(),
        text: getTextString(element, divider),
        lang: activeCluster.lang,
        rate: activeCluster.rate,
      });
      msg && toast.error(msg);
    },
    [
      activeCluster.lang,
      activeCluster.rate,
      element,
      getTextString,
      selectMode,
      setLiColor,
    ],
  );

  const speakCaption = useCallback(
    e => {
      e?.currentTarget.blur();
      if (selectMode) return;
      const msg = speakText({
        setLiColor,
        divider,
        voices: window.speechSynthesis.getVoices(),
        text: getTextString(caption.text, divider),
        lang: el.lang,
        rate: user.rate,
      });
      msg && toast.error(msg);
    },
    [caption.text, el.lang, getTextString, selectMode, setLiColor, user.rate],
  );

  // Set key controle
  useEffect(() => {
    if (editCount > 0 || el._id !== activeElement?._id) return;
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft' && !e.metaKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        speakElement();
      }
      if (e.key === 'ArrowRight' && !e.metaKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        speakCaption();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [activeElement?._id, editCount, el._id, speakCaption, speakElement]);

  const handleSetActiveElement = () => {
    if (selectMode) return;
    if (element.startsWith('[')) {
      setIsIframe(!isIframe);
      return;
    }
    const { _id, activeElement } = activeCluster;
    dispatch(setActiveElement(el));
    if (activeElement !== el._id) {
      dispatch(updateClusterThunk({ _id, activeElement: el._id }))
        .unwrap()
        .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
    }
  };

  const handleSort = e => {
    e.stopPropagation();
    const { _id, sortBy } = activeCluster;
    dispatch(updateClusterThunk({ _id, sortBy: !sortBy }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  return (
    <GridWrap onClick={handleSetActiveElement}>
      <SpeakBtn onClick={speakElement} $mode={`${selectMode}`}>
        {element}
      </SpeakBtn>

      <Divider onClick={handleSort} />
      {caption.text && (
        <SpeakBtn onClick={speakCaption} $mode={`${selectMode}`}>
          {caption.text}
        </SpeakBtn>
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
  );
};

export default Element;

Element.propTypes = {
  el: PropTypes.object,
  setLiColor: PropTypes.func,
  editCount: PropTypes.number,
  selectMode: PropTypes.bool,
};
