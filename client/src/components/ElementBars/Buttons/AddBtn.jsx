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

  const scrollOnBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

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
    const caption = await translateText(element, translation, user.engine);
    const { _id } = activeCluster;
    try {
      const mediaEl = { cluster: _id, element: '[]', caption: element };
      const textEl = {
        cluster: _id,
        element,
        caption,
        favorite: true,
        checked: element.split(/\s+/).length < 20 ? true : false,
      };
      const payload = element.includes('https://') ? mediaEl : textEl;
      dispatch(addElementThunk(payload))
        .unwrap()
        .then(() => e?.target && scrollOnBottom())
        .finally(() => e?.target?.blur());
    } catch (err) {
      e?.target?.blur();
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
