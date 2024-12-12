import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { getMediaLink, speakText } from 'utils/helpers';
import { useAuth, useClusters } from 'utils/hooks';

import { GridWrap, Divider, SpeakBtn, Iframe, Audio } from './Element.styled';

const Element = ({ el, sortByDate, setSortByDate, setLiColor }) => {
  const { user } = useAuth();
  const { activeCluster } = useClusters();
  const { element, caption } = el;

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
        .replaceAll(',`', ';')
        .replaceAll(' `', ` ${divider}`)
        // punctuation
        .replaceAll('...', `__${divider}`)
        .replaceAll('.', `.${divider}`)
        .replaceAll(',', `,${divider}`)
        .replaceAll('!', `!${divider}`)
        .replaceAll('?', `?${divider}`)
        .replaceAll(':', `:${divider}`)
        // numbers
        .replaceAll(`0.${divider}`, '0.')
        .replaceAll(`1.${divider}`, '1.')
        .replaceAll(`2.${divider}`, '2.')
        .replaceAll(`3.${divider}`, '3.')
        .replaceAll(`4.${divider}`, '4.')
        .replaceAll(`5.${divider}`, '5.')
        .replaceAll(`6.${divider}`, '6.')
        .replaceAll(`7.${divider}`, '7.')
        .replaceAll(`8.${divider}`, '8.')
        .replaceAll(`9.${divider}`, '9.')
        // abbreviations
        .replaceAll(`Mr.${divider}`, 'mister')
        .replaceAll(`Ms.${divider}`, 'miss')
        .replaceAll(`Mrs.${divider}`, 'missis');
    } else {
      textString = text.trim() + divider;
    }
    return !textString.includes('[')
      ? textString
      : textString.substring(0, textString.indexOf('['));
  };
  const speakElement = e => {
    const msg = speakText({
      setLiColor,
      divider,
      text: getTextString(element, divider),
      lang: activeCluster.lang,
      rate: activeCluster.rate,
    });
    e.target.blur();
    msg && toast.error(msg);
  };
  const speakCaption = e => {
    const msg = speakText({
      setLiColor,
      divider,
      text: getTextString(caption, divider),
      lang: el.lang,
      rate: user.rate,
    });
    e.target.blur();
    msg && toast.error(msg);
  };

  const handleSort = e => {
    setSortByDate(!sortByDate);
    sortByDate
      ? toast.success('Below is Recent')
      : toast.success('Above is Recent');

    e.stopImmediatePropagation();
  };

  const isAudio = caption.endsWith('mp3');
  const isIframe = !isAudio && caption.startsWith('http');
  const isBtn = !isAudio && !isIframe;

  return (
    <GridWrap>
      <SpeakBtn onClick={speakElement}>{element}</SpeakBtn>

      <Divider onClick={handleSort} />

      {isAudio && <Audio controls src={getMediaLink(caption)} />}
      {isIframe && <Iframe src={getMediaLink(caption)} />}
      {isBtn && <SpeakBtn onClick={speakCaption}>{caption}</SpeakBtn>}
    </GridWrap>
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
