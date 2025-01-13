import { useClusters, useElements } from 'utils/hooks';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import { themes } from 'styles/themes';

import AddBtn from './EditBtns/AddBtn';
import DeleteBtn from './EditBtns/DeleteBtn';

const { l, m } = themes.indents;

const ElementEditBar = () => {
  const { elementTrash } = useElements();
  const { activeCluster } = useClusters();

  const isDeleteBtn = elementTrash.length > 0 ? ' 1fr' : '';
  const isAddBtn = activeCluster ? ' 1fr' : '';
  const gtc = isDeleteBtn + isAddBtn;

  return (
    <GridWrap
      $m={`${m} ${m}`}
      $pos="fixed"
      $side="left"
      $high="bottom"
      $gtc={gtc}
    >
      {isAddBtn && <AddBtn />}
      {isDeleteBtn && <DeleteBtn />}
    </GridWrap>
  );
};

export default ElementEditBar;
