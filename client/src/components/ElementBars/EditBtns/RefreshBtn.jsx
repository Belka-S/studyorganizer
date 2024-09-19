import { useDispatch } from 'react-redux';
import { FiRefreshCcw } from 'react-icons/fi';

import { setActiveElement } from 'store/element/elementSlice';

import { Button } from './RefreshBtn.styled';

const RefreshBtn = () => {
  const dispatch = useDispatch();

  const refreshPlaylist = () => {
    const styled = document.querySelectorAll(
      'button[style="font-size: 32px;"]',
    );

    styled.forEach(el => el.removeAttribute('style'));
    dispatch(setActiveElement(null));
  };

  return (
    <Button onClick={refreshPlaylist}>
      <FiRefreshCcw size="26px" />
    </Button>
  );
};

export default RefreshBtn;
