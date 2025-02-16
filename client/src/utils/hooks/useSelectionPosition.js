import { useEffect, useState } from 'react';

export const useSelectionPosition = () => {
  const [state, setState] = useState('ready');
  const [selection, setSelection] = useState('');
  const [position, setPosition] = useState({});
  const [offset, setOffset] = useState(0);
  const [nodeText, setNodeText] = useState('');

  const onSelectStart = () => {
    setSelection(undefined);
    setState('selecting');
  };

  const onSelectEnd = e => {
    const activeSelection = document.getSelection();
    if (!activeSelection) return;

    const text = activeSelection.toString();
    if (!text) {
      setSelection(undefined);
      setState('ready');
      return;
    }

    let rect = null;
    if (!['TEXTAREA', 'INPUT'].includes(e.target.nodeName)) {
      rect = activeSelection.getRangeAt(0).getBoundingClientRect();
    } else {
      rect = e.target.getBoundingClientRect();
    }
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
    });
    setSelection(text);
    setState('selected');

    const nodeText = e.target.value || e.target.textContent;
    nodeText.toLowerCase() !== 'translate' && setNodeText(nodeText);

    // Get offset when Sidebar
    const listWidth = e.target.closest('ul').getBoundingClientRect().width;
    const offset = window.innerWidth - listWidth;
    listWidth && setOffset(offset);
  };

  useEffect(() => {
    document.addEventListener('selectstart', onSelectStart);
    document.addEventListener('mouseup', onSelectEnd);
    return () => {
      document.removeEventListener('selectstart', onSelectStart);
      document.removeEventListener('mouseup', onSelectEnd);
    };
  }, []);

  return { selection, position, offset, state, nodeText };
};
