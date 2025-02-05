export const replaceByMap = (text, replaceMap) => {
  let normalizedText = text;
  for (const key in replaceMap) {
    normalizedText = normalizedText.replaceAll(key, replaceMap[key]);
  }
  const capitalize = text => text.replace(/^./, str => str.toUpperCase());
  const words = [...normalizedText.split(/\s+/)];

  for (let i = 0; i < words.length; i += 1) {
    if (['.', '!', '?'].includes(words[i].at(-1)) && words[i + 1]) {
      words.splice(i + 1, 1, capitalize(words[i + 1]));
    }
  }
  const capitalizedText = words.join(' ');

  return capitalizedText;
};
