import translate from 'translate';

const { VITE_DEEPL_API_KEY } = import.meta.env;

// Translation engine = "google", "deepl", "libre", "yandex"
const keys = { google: '', deepl: VITE_DEEPL_API_KEY };

export const translateText = async (text, { from, to }, engine) => {
  if (!text || text.length === 0) return '';

  const t = text.replaceAll(' ·', ',').replaceAll('·', '');
  translate.engine = engine;
  translate.key = keys[engine];
  try {
    let translation = await translate(`${t}`, { from, to });
    // abbreviations
    if (to.includes('en') && t.toLowerCase().includes('uhr')) {
      translation = translation
        .replaceAll('a.m. on', 'am on')
        .replaceAll('p.m. on', 'pm on')
        .replaceAll('a.m. to', 'am to')
        .replaceAll('p.m. to', 'pm to')
        .replaceAll('a.m.', 'am.')
        .replaceAll('p.m.', 'pm.');
    }
    // sentences
    const isSentence = ['.', '!', '?'].includes(t.at(-1));
    if (isSentence) return translation;
    // words
    const wordList = t.split(t.includes(', ') ? ', ' : /\s+/);
    const translationParts = translation.split(', ');
    const translationParts0 = !to.includes('de')
      ? translationParts[0].at(0).toLowerCase() +
        translationParts[0].substring(1)
      : translationParts[0];
    // single word
    if (wordList.length === 1) {
      const firstWord = translation.toLocaleLowerCase();
      return firstWord + ', ';
    }
    // nouns in German
    if (['der', 'die', 'das'].includes(wordList[0].split(' ')[0])) {
      const firstWord = translation
        .replace('The ', '')
        .replace('the ', '')
        .split(', ')[0]
        .toLocaleLowerCase();
      return firstWord + ', ';
    }
    // adjectives in English
    if (to.includes('en') && wordList[2]?.startsWith('am')) {
      return translationParts[2].startsWith('the')
        ? translation
        : `${translationParts0}, ${translationParts[1]}, the ${translationParts[2]}`;
    }
    // verbs in English
    if (
      wordList[0].endsWith('n') &&
      ['hat', 'ist'].includes(wordList[2]?.split(' ')[0]) &&
      from.includes('de')
    ) {
      translation = to.includes('en')
        ? 'to ' + translationParts0 + ', '
        : translationParts0 + ', ';
    }
    return translation;
  } catch (err) {
    return err.message;
  }
};
