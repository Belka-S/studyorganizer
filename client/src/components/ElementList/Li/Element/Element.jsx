import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { getMediaLink, speakText } from 'utils/helpers';
import { useClusters } from 'utils/hooks';

import { GridWrap, Divider, SpeakBtn, Iframe, Audio } from './Element.styled';

const Element = ({ el, sortByDate, setSortByDate, setLiColor }) => {
  const { activeCluster } = useClusters();
  const { element, caption } = el;

  const speakElement = e => {
    let textString = '';
    const divider = '$*@';

    if (
      element.trim().endsWith('.') ||
      element.trim().endsWith('!') ||
      element.trim().endsWith('?') ||
      element.endsWith('"')
    ) {
      textString = element
        .trim()

        .replaceAll(',`', ';')
        .replaceAll(' `', ` ${divider}`)

        .replaceAll('...', `__${divider}`)
        .replaceAll('.', `.${divider}`)
        .replaceAll(',', `,${divider}`)
        .replaceAll('!', `!${divider}`)
        .replaceAll('?', `?${divider}`)
        .replaceAll(':', `:${divider}`)

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

        .replaceAll(`,${divider} oder?`, ', oder?')
        .replaceAll(`,${divider} bitte.`, ', bitte.')
        .replaceAll(`,${divider} danke.`, ', danke.');
    } else {
      textString = element.trim() + divider;
    }

    const msg = speakText({
      setLiColor,
      divider,
      text: textString,
      lang: activeCluster.lang,
      rate: activeCluster.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  const speakCaption = () => {
    const captionText = caption.includes('(')
      ? caption.substring(0, caption.indexOf('('))
      : caption;

    const msg = speakText({
      setLiColor,
      text: captionText,
      lang: el.lang,
      rate: el.rate,
    });
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
