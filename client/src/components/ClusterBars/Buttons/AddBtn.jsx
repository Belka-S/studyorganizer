import PropTypes from 'prop-types';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import Button from 'components/shared/Button/Button';
import { clusterSchema } from 'utils/validation';
import { readClipboard } from 'utils/helpers';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const AddBtn = ({ setClipboardText, setIsModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === '+') addCluster();
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addCluster = async e => {
    e?.currentTarget.blur();
    const cluster = await readClipboard();
    try {
      await clusterSchema.validate({ cluster });
      setClipboardText(cluster);
      setIsModal('addCluster');
      // set cursor on input
    } catch (err) {
      toast.info('Invalid Cluster, or you want to add a new Subject?', {
        duration: Infinity,
        position: 'bottom-center',
        closeButton: true,
        // cancel: { label: 'No' },
        action: {
          label: 'Yes',
          onClick: async () => {
            setIsModal('addSubject');
          },
        },
      });
    }
  };
  return (
    <Button onClick={addCluster} $s="m" $round={true} $bs={button}>
      <FiPlus size={18} />
    </Button>
  );
};

export default AddBtn;

AddBtn.propTypes = {
  setClipboardText: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
