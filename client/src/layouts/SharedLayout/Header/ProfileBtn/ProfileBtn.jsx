import { useState } from 'react';

import { useAuth } from 'utils/hooks/useAuth';
import { getAbbreviation } from 'utils/helpers';
import Modal from 'components/shared/Modal/Modal';
import ProfileForm from 'components/ProfileForm/ProfileForm';
import { themes } from 'styles/themes';

import { UserBtn } from './ProfileBtn.styled';

const { m, xl } = themes.indents;

const ProfileBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const { user } = useAuth();

  const { avatarUrl: url, name } = user;
  const abbr = getAbbreviation(name);

  const handleClick = () => setIsModal(!isModal);

  return (
    <>
      <UserBtn onClick={handleClick} $url={url} $abbr={url ? '' : abbr} />

      {isModal && (
        <Modal
          $x={`right: ${m}`}
          $y={`top: ${xl}`}
          $bd={false}
          onClick={handleClick}
        >
          <ProfileForm setIsModal={setIsModal} />
        </Modal>
      )}
    </>
  );
};

export default ProfileBtn;
