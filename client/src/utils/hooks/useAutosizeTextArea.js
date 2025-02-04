import { useEffect } from 'react';

// Updates the height of a <textarea> when the value changes.
export const useAutosizeTextArea = (refs, values) => {
  let height = 84;
  if (refs[0]) {
    height = Number(refs[0].style.height.replace('px', ''));
  }
  useEffect(() => {
    if (!refs[0]) return;
    // refs.forEach(ref => { ref.style.height = '0px';}); // Reset the height momentarily to get the correct scrollHeight for the textarea
    let scrollHeight = Math.max(...refs.map(ref => ref.scrollHeight));
    // Set the height directly, outside of the render loop
    if (height !== scrollHeight) {
      scrollHeight = scrollHeight <= 90 ? scrollHeight : scrollHeight + 6;
      refs.forEach(ref => {
        ref.style.height = scrollHeight + 'px';
      });
    }
  }, [height, refs, values]);
};
