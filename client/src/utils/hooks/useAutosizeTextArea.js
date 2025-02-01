import { useEffect } from 'react';

// Updates the height of a <textarea> when the value changes.
export const useAutosizeTextArea = (refs, values) => {
  useEffect(() => {
    if (!refs[0]) return;
    // Reset the height momentarily to get the correct scrollHeight for the textarea
    refs.forEach(ref => {
      ref.style.height = '0px';
    });
    const scrollHeight = Math.max(...refs.map(ref => ref.scrollHeight)) + 6;
    // Set the height directly, outside of the render loop
    refs.forEach(ref => {
      ref.style.height = scrollHeight + 'px';
    });
  }, [refs, values]);
};
