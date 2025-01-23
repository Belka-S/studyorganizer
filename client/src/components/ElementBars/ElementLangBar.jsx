import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';

import { useAuth, useClusters } from 'utils/hooks';
import { updateUserThunk } from 'store/auth/authThunks';
import { updateClusterThunk } from 'store/cluster/clusterThunks';
import { setActiveCluster } from 'store/cluster/clusterSlice';
import { languageCodes, rateValues } from 'utils/constants';
import { themes } from 'styles/themes';

const { backgroundHoverd, white, borderLight } = themes.colors;

const ElementLangBar = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { activeCluster: ac } = useClusters();

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
  return (
    <GridWrap $m="0" $cg="8px" $ai="center" $gtc="2fr 2fr 2fr 2fr">
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

      <Select
        options={languageCodes}
        defaultValue={languageCodes.find(el => el.value === user.lang)}
        onChange={setUserLang}
        placeholder="Language..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
      <Select
        options={rateValues}
        defaultValue={rateValues.find(el => el.value == user.rate)}
        onChange={setUserRate}
        placeholder="Rate..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
    </GridWrap>
  );
};

export default ElementLangBar;

ElementLangBar.propTypes = {
  filtredElements: PropTypes.array,
  setLiColor: PropTypes.func,
};
