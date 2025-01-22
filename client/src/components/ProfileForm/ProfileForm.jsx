import { useState } from 'react';
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
import { logoutThunk, updateUserThunk } from 'store/auth/authThunks';
import Button from 'components/shared/Button/Button';
import Select from 'components/shared/Select/Select';

import { useAuth } from 'utils/hooks';
import { enginrValues } from 'utils/constants';
import { themes } from 'styles/themes';

import { Profile } from './Profile.styled';

const { backgroundHoverd, white, borderLight } = themes.colors;

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [selectValue, setSelectValue] = useState(() => user?.engine ?? []);

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

  const setUserEngine = ({ value }) => {
    const formData = new FormData();
    formData.append('engine', value);
    dispatch(updateUserThunk(formData));
  };

  return (
    <Profile>
      <Select
        onChange={setUserEngine}
        defaultValue={enginrValues.find(el => el.value == user.engine)}
        options={enginrValues}
        placeholder="Translate by..."
        $ol={backgroundHoverd}
        $b={white}
        $bh={borderLight}
      />
      <Button onClick={handleLogOut} $s="m">
        Sign out
      </Button>
    </Profile>
  );
};

export default ProfileForm;
