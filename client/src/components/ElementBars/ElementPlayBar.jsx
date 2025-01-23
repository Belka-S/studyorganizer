import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { useAuth, useClusters, useElements } from 'utils/hooks';
import { speakText, speakTranslation } from 'utils/helpers';
import { themes } from 'styles/themes';
import GridWrap from 'components/shared/GridWrap/GridWrap';

import RefreshBtn from './Buttons/RefreshBtn';

const { background } = themes.colors;
const { button } = themes.shadows;
const { m, s } = themes.indents;

const ElementPlayBar = ({ className, filtredElements, setLiColor }) => {
  const { user } = useAuth();
  const { activeCluster: ac } = useClusters();
  const { activeElement: ae } = useElements();

  const getLanguage = arr => {
    if (!arr.length) return;
    let maxLang = '';
    let counter = 0;
    const langObj = arr.reduce((acc, el) => {
      if (!acc[el.lang]) acc[el.lang] = 0;
      acc[el.lang] += 1;
      return acc;
    }, {});
    for (const key in langObj) {
      if (langObj[key] > counter) {
        counter = langObj[key];
        maxLang = key;
      }
    }
    return maxLang;
  };

  const captionLang = filtredElements.length
    ? getLanguage(filtredElements)
    : user.lang;

  const setPauseDivider = (text, divider) =>
    text.replaceAll(',`', ';').replaceAll(' `', `${divider} `);

  const getTextString = ({ text, playList, divider }) => {
    let textString = '';
    for (let i = 0; i < playList.length; i += 1) {
      let part = playList[i][text];

      if (
        part.endsWith('.') ||
        part.endsWith('!') ||
        part.endsWith('?') ||
        part.endsWith('"')
      ) {
        textString += setPauseDivider(part, divider)
          // abbreviations
          .replaceAll('Mr.', 'mister')
          .replaceAll('Ms.', 'miss')
          .replaceAll('Mrs.', 'missis')
          // punctuation
          .replaceAll('...', `__${divider}`)
          .replaceAll('.', `.${divider}`)
          .replaceAll(',', `,${divider}`)
          .replaceAll('!', `!${divider}`)
          .replaceAll('?', `?${divider}`)
          .replaceAll(': ', `:${divider} `)
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
          // define language
          .replaceAll(
            `${divider}`,
            text === 'caption'
              ? `@±@${playList[i].lang}${divider}`
              : `${divider}`,
          );
      } else if (!playList[i].element.startsWith('[')) {
        if (text === 'caption') {
          if (part.includes(' [')) {
            part = part.substring(0, part.indexOf(' ['));
          }
          part = `${part}@±@${playList[i].lang}`;
        }
        textString += part + divider;
      }
    }
    return textString;
  };

  const playElements = e => {
    setLiColor(background);
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    const msg = speakText({
      setLiColor,
      divider,
      text: getTextString({ text: 'element', playList, divider }),
      lang: ac.lang,
      rate: ac.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  const playCaptions = e => {
    const divider = '$*@';
    setLiColor(background);
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    const msg = speakText({
      setLiColor,
      divider,
      text: getTextString({ text: 'caption', playList, divider }),
      lang: captionLang,
      rate: user.rate,
    });
    e.target.blur();
    msg && toast.error(msg);
  };

  const playAll = e => {
    setLiColor(background);
    let textString = '';
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === ae.element,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    for (let i = 0; i < playList.length; i += 1) {
      const { element, caption, lang } = playList[i];
      if (!element.startsWith('[')) {
        const normalElement = setPauseDivider(element, '');
        const normalCaption = caption.includes(' [')
          ? caption.substring(0, caption.indexOf(' ['))
          : caption;
        textString += normalElement + `@±@${lang}` + normalCaption + divider;
      }
    }
    const msg = speakTranslation({
      setLiColor,
      divider,
      text: textString,
      lang: ac.lang,
      rate: user.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  return (
    <GridWrap
      className={className}
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc="1fr 0.5fr 1fr"
    >
      <Button onClick={playElements} $s="m" $round={true} $bs={button}>
        {ac?.lang.at(0).toUpperCase() + ac?.lang.substring(1)}
      </Button>
      <RefreshBtn onClick={playAll} />
      <Button onClick={playCaptions} $s="m" $round={true} $bs={button}>
        {captionLang?.at(0).toUpperCase() + captionLang?.substring(1)}
      </Button>
    </GridWrap>
  );
};

export default ElementPlayBar;

ElementPlayBar.propTypes = {
  className: PropTypes.string,
  filtredElements: PropTypes.array,
  setLiColor: PropTypes.func,
};
