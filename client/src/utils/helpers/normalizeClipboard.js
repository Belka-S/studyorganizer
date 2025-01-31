export const normalizeClipboard = (text, lang) => {
  if (!lang.includes('de')) return text;
  const textParts = text.trim().split('\n');
  const isNetzVerb =
    (text.includes('hat') || text.includes('ist')) &&
    !textParts[0].trim().includes(' ');
  if (!isNetzVerb) return text;
  const netzVerb =
    `${textParts[0].trim()}, ` +
    `${textParts[1].split('·')[1].trim()}, ` +
    textParts[1].split('·')[2];
  return netzVerb;
};
