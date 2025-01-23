export const startsWithCapital = word => {
  return /[A-Z]/.test(word.charAt(0));
};

export const startsWithSmall = word => {
  return /[a-z]/.test(word.charAt(0));
};
