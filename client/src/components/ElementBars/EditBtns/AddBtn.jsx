import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';

import Button from 'components/shared/Button/Button';
import { readClipboard, writeClipboard, translateText } from 'utils/helpers';
import { addElementThunk } from 'store/element/elementThunks';
import { useAuth, useClusters } from 'utils/hooks';
import { themes } from 'styles/themes';
const { button } = themes.shadows;

const AddBtn = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.key === 'd' && e.metaKey) {
        e.prevent;
        await addElement();
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addElement = async e => {
    const text = window.getSelection().toString();
    text && (await writeClipboard(text));
    // document.execCommand('copy');
    const element = (await readClipboard())
      .split(/\s+/)
      .join(' ')
      .replaceAll('\n', ' ')
      .trim();

    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation);
    const { _id } = activeCluster;
    try {
      const payload =
        element.split(/\s+/).length !== 1
          ? { element, caption, cluster: _id, checked: true }
          : element.includes('https://')
          ? { element: '[]', caption, cluster: _id }
          : { element, caption, cluster: _id, favorite: true };

      dispatch(addElementThunk(payload));
      e.target.blur();
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid element, ${err.message}`);
    }
  };

  return (
    <Button onClick={addElement} $s="m" $round={true} $bs={button}>
      <FiPlus size={18} />
    </Button>
  );
};

export default AddBtn;
