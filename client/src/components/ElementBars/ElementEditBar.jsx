import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { useClusters, useElements } from 'utils/hooks';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import { themes } from 'styles/themes';

import AddBtn from './Buttons/AddBtn';
import DeleteBtn from './Buttons/DeleteBtn';
import DictionaryBtn from './Buttons/DictionaryBtn';
import SpeakBtn from './Buttons/SpeakBtn';

const { m, s } = themes.indents;

const ElementEditBar = ({ className }) => {
  const { pathname } = useLocation();
  const { elementTrash } = useElements();
  const { activeCluster } = useClusters();

  const isDeleteBtn = elementTrash.length > 0 ? ' 1fr' : '';
  const isAddBtn = activeCluster ? ' 1fr' : '';
  const gtc = isDeleteBtn + isAddBtn + ' 1fr 1fr';

  if (!pathname.includes('/element')) return;
  return (
    <GridWrap
      className={className}
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="left"
      $high="bottom"
      $gtc={gtc}
    >
      <DictionaryBtn />
      <SpeakBtn />
      {isAddBtn && <AddBtn />}
      {isDeleteBtn && <DeleteBtn />}
    </GridWrap>
  );
};

export default ElementEditBar;

ElementEditBar.propTypes = {
  className: PropTypes.string,
};
