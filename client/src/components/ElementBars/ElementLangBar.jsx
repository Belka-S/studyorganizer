import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Button from 'components/shared/Button/Button';

import { useAuth, useClusters, useElements } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authThunks';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { languageCodes, rateValues } from 'utils/constants';
import { speakText, speakTranslation } from 'utils/helpers';
import { themes } from 'styles/themes';

import RefreshBtn from './EditBtns/RefreshBtn';

const { background, backgroundHoverd, white, borderLight } = themes.colors;
const { button } = themes.shadows;

const ElementLangBar = ({ filtredElements, setLiColor }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster: ac } = useClusters();
  const { activeElement } = useElements();

  const setClusterLang = ({ value }) => {
    dispatch(updateClusterThunk({ _id: ac._id, lang: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setClusterRate = ({ value }) => {
    dispatch(updateClusterThunk({ _id: ac._id, rate: value }))
      .unwrap()
      .then(pld => dispatch(setActiveCluster(pld.result.cluster)));
  };

  const setUserLang = ({ value }) => {
    const formData = new FormData();
    formData.append('lang', value);
    dispatch(updateUserThunk(formData));
  };

  const setUserRate = ({ value }) => {
    const formData = new FormData();
    formData.append('rate', value);
    dispatch(updateUserThunk(formData));
  };

  const playFiltred = e => {
    setLiColor(background);
    let textString = '';
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === activeElement,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    for (let i = 0; i < playList.length; i += 1) {
      const { element } = playList[i];
      if (element.endsWith('.')) {
        textString += element
          .replaceAll('.', divider)
          .replaceAll('!', divider)
          .replaceAll('?', divider)
          .replaceAll(',', divider);
      } else {
        textString += element.replaceAll('.', divider) + divider;
      }
    }

    const msg = speakText({
      setLiColor,
      divider,
      text: textString,
      lang: ac.lang,
      rate: ac.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  const playTranslated = e => {
    setLiColor(background);
    let textString = '';
    const divider = '$*@';
    const index = filtredElements.findIndex(
      item => item.element === activeElement,
    );
    const playList = filtredElements.splice(index === -1 ? 0 : index);

    for (let i = 0; i < playList.length; i += 1) {
      const { element, caption, lang } = playList[i];
      textString += element + `@±@${lang}` + caption + divider;
    }

    const msg = speakTranslation({
      setLiColor,
      divider,
      text: textString,
      lang: ac.lang,
      rate: ac.rate,
    });

    e.target.blur();
    msg && toast.error(msg);
  };

  return (
    <GridWrap $m="0" $cg="8px" $ai="center" $gtc="2fr 2fr 1fr .3fr 1fr 2fr 2fr">
      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === ac?.lang)}
        onChange={setClusterLang}
        placeholder="Language..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == ac?.rate)}
        onChange={setClusterRate}
        placeholder="Rate..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />

      <Button onClick={playFiltred} $s="m" $bs={button}>
        play
      </Button>

      <RefreshBtn />

      <Button onClick={playTranslated} $s="m" $bs={button}>
        all
      </Button>

      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === user.lang)}
        onChange={setUserLang}
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == user.rate)}
        onChange={setUserRate}
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
    </GridWrap>
  );
};

export default ElementLangBar;

ElementLangBar.propTypes = {
  filtredElements: PropTypes.object,
  setLiColor: PropTypes.func,
};
