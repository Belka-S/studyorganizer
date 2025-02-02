export const scrollOnTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollOnBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

export const scrollOnDomEl = domElement => {
  if (!domElement) return;
  domElement.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
};
