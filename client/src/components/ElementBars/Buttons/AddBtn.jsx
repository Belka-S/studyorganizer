import { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';

import Button from 'components/shared/Button/Button';
import {
  readClipboard,
  writeClipboard,
  normalizeClipboard,
  translateText,
  scrollOnBottom,
  scrollOnTop,
  trimChar,
} from 'utils/helpers';
import { addElementThunk } from 'store/element/elementThunks';
import { useAuth, useClusters } from 'utils/hooks';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const AddBtn = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const addElement = useCallback(
    async e => {
      const text = window.getSelection().toString();
      text && (await writeClipboard(text));
      // document.execCommand('copy');
      const clipboardText = await readClipboard();
      let element = normalizeClipboard(clipboardText, activeCluster.lang)
        .split(/\s+/)
        .join(' ')
        .replaceAll('\n', ' ')
        .trim();
      // Normalize element
      element = trimChar(element, ',');
      const payload = { from: activeCluster.lang, to: user.lang };
      let caption = await translateText(element, payload, user.engine);
      // Normalize caption
      caption = trimChar(caption.trim(), ',');
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
          .then(() => (activeCluster.sortBy ? scrollOnTop() : scrollOnBottom()))
          .finally(() => e?.target?.blur());
      } catch (err) {
        e?.currentTarget.blur();
        toast.error(`Invalid element, ${err.message}`);
      }
    },
    [activeCluster, dispatch, user.engine, user.lang],
  );

  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.key === 'e' && e.metaKey && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        await addElement();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [addElement]);

  return (
    <Button onClick={addElement} $s="m" $round={true} $bs={button}>
      <FiPlus size={18} />
    </Button>
  );
};

export default AddBtn;
