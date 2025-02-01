export const normalizeClipboard = (text, lang) => {
  if (!lang.includes('de')) return text;
  const textParts = text.trim().split('\n');
  if (textParts.length === 1) return text;
  // Noun from https://www.verbformen.com
  const isNetzNoun = ['der', 'die', 'das'].includes(textParts[0].split(' ')[0]);
  if (isNetzNoun) {
    const netzNoun =
      `${textParts[0].trim()}, ` +
      `${textParts[1]
        .split('·')[1]
        .replaceAll('⁰', '')
        .replaceAll('/', ' / ')
        .trim()}`;
    return netzNoun;
  }
  // Verb from https://www.verbformen.com
  const isNetzVerb =
    (text.includes('hat') || text.includes('ist')) &&
    !textParts[0].trim().includes(' ');
  if (isNetzVerb) {
    const netzVerb =
      `${textParts[0].trim()}, ` +
      `${textParts[1].split('·')[1].trim()}, ` +
      textParts[1].split('·')[2];
    return netzVerb;
  }
  // Adjective from https://www.verbformen.com
  const isNetzAdjective =
    text.includes('am') && !textParts[0].trim().includes(' ');
  if (isNetzAdjective) {
    const netzAdjective =
      `${textParts[0].trim()}, ` +
      `${textParts[1].split('·')[1].trim()}, ` +
      textParts[1].split('·')[2];
    return netzAdjective;
  }
  // Other words & phrases
  return text;
};
