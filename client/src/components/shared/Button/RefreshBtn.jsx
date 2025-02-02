import PropTypes from 'prop-types';
import { FiRefreshCcw } from 'react-icons/fi';

import { Button } from './RefreshBtn.styled';

const RefreshBtn = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <FiRefreshCcw size="35px" />
    </Button>
  );
};

export default RefreshBtn;

RefreshBtn.propTypes = {
  onClick: PropTypes.func,
};
