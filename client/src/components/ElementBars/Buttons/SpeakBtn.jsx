import { useState } from 'react';
import { HiOutlineMicrophone } from 'react-icons/hi';

import { useClusters } from 'utils/hooks';

import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';

import { themes } from 'styles/themes';
import ElementEditForm from 'components/ElementList/Li/Element/ElEditForm';

const { button } = themes.shadows;
const { m, xxl } = themes.indents;

const SpeakBtn = () => {
  const { activeCluster } = useClusters();
  const [isModal, setIsModal] = useState(false);

  const { _id } = activeCluster;

  return (
    <>
      <Button
        onClick={() => setIsModal(!isModal)}
        $s="m"
        $round={true}
        $bs={button}
      >
        <HiOutlineMicrophone size={18} />
      </Button>
      {isModal && (
        <Modal
          $x={`left: ${m}`}
          $y={`bottom: ${xxl}`}
          $bd="none"
          onClick={() => setIsModal(false)}
        >
          <ElementEditForm
            el={{ _id: null, cluster: _id, element: '', caption: '' }}
            setIsForm={() => null}
          />
        </Modal>
      )}
    </>
  );
};

export default SpeakBtn;
