import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  cleanCluster,
  cleanGroup,
  setActiveCluster,
  setClusterFilter,
  setClusterSelect,
  emptyClusterTrash,
} from 'store/cluster/clusterSlice';
import {
  cleanElement,
  setActiveElement,
  setElementFilter,
  setElementSelect,
  emptyElementTrash,
} from 'store/element/elementSlice';
import {
  emptyFiles,
  setActiveFile,
  setGdriveFolders,
  setGdriveFilter,
  setGdriveSelect,
  emptyGdriveTrash,
} from 'store/gdrive/gdriveSlice';
import {
  logoutThunk,
  updateUserThunk,
  getUserThunk,
} from 'store/auth/authThunks';
import Button from 'components/shared/Button/Button';
import Select from 'components/shared/Select/Select';

import { useAuth, useClusters } from 'utils/hooks';
import { scrollOnDomEl } from 'utils/helpers';
import { engineValues } from 'utils/constants';
import { fetchElementsThunk } from 'store/element/elementThunks';
import { getClusterByIdThunk } from 'store/cluster/clusterThunks';
import { themes } from 'styles/themes';

import { Profile } from './Profile.styled';

const { backgroundHoverd, white, borderLight } = themes.colors;

const ProfileForm = ({ setIsModal }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const setUserEngine = ({ value }) => {
    const formData = new FormData();
    formData.append('engine', value);
    dispatch(updateUserThunk(formData));
  };

  const handleRefresh = () => {
    if (!activeCluster) return;
    dispatch(getUserThunk());
    dispatch(cleanElement());
    setIsModal(false);
    dispatch(getClusterByIdThunk(activeCluster._id))
      .unwrap()
      .then(({ result }) => {
        const { cluster } = result;
        dispatch(setActiveCluster(cluster));
        dispatch(fetchElementsThunk({ cluster: activeCluster._id }))
          .unwrap()
          .then(({ result }) => {
            if (!activeCluster.activeEl) return;
            const activeEl = result.elements.find(
              ({ _id }) => _id === cluster.activeEl,
            );
            dispatch(setActiveElement(activeEl));
          })
          .then(() => {
            const activeDomEl = document.getElementById('active-element');
            activeDomEl && scrollOnDomEl(activeDomEl);
          });
      });
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());

    dispatch(setActiveCluster(null));
    dispatch(cleanCluster());
    dispatch(cleanGroup());
    dispatch(setClusterFilter(''));
    dispatch(setClusterSelect([]));
    dispatch(emptyClusterTrash());

    dispatch(cleanElement());
    dispatch(setActiveElement(null));
    dispatch(setElementFilter(''));
    dispatch(setElementSelect([]));
    dispatch(emptyElementTrash());

    dispatch(emptyFiles());
    dispatch(setActiveFile(null));
    dispatch(setGdriveFolders([]));
    dispatch(setGdriveFilter(''));
    dispatch(setGdriveSelect([]));
    dispatch(emptyGdriveTrash());
  };

  return (
    <Profile>
      <Select
        onChange={setUserEngine}
        defaultValue={engineValues.find(el => el.value == user.engine)}
        options={engineValues}
        placeholder="Translate by..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
      <div className="wrap">
        <Button onClick={handleRefresh} $s="m">
          Refresh
        </Button>
        <Button onClick={handleLogOut} $s="m">
          Sign out
        </Button>
      </div>
    </Profile>
  );
};

export default ProfileForm;

ProfileForm.propTypes = {
  setIsModal: PropTypes.func,
};
