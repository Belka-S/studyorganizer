import PropTypes from 'prop-types';

import {
  useClusters,
  useElements,
  useOpenUrls,
  useSelectionPosition,
} from 'utils/hooks';
import { dictionaryUrls } from 'utils/constants';

import { Button } from './SelectionBtn.styled';

const SelectionBtn = ({ children }) => {
  const { selection, position, offset, nodeText } = useSelectionPosition();

  // ----------- ------- Workers -------- ----------- //
  const { openUrls } = useOpenUrls();
  const { allElements } = useElements();
  const { activeCluster } = useClusters();

  const captionLang = allElements.find(el => el.caption === nodeText)?.lang;
  console.log('captionLang: ', captionLang);
  const elementLang = activeCluster.lang;
  console.log('elementLang: ', elementLang);

  const dictionarys = dictionaryUrls(selection)
    .map(url => url[captionLang || elementLang])
    .filter(url => url && url);

  if (selection?.split(/\s+/).length > 1) return;
  // --------------------- end ---------------------- //

  const onClick = () => {
    // Launch Workers
    openUrls(dictionarys);
  };

  if (!selection) return;
  return (
    <Button
      $x={position?.x - 20 - offset}
      $y={position?.y - 98}
      $selection={selection}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SelectionBtn;

SelectionBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
