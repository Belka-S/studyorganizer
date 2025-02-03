export const trimChar = (text, char) =>
  text.endsWith(char) ? text.substring(0, text.length - 1) : text;
