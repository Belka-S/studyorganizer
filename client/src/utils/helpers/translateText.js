import translate from 'translate';

const { VITE_DEEPL_API_KEY } = import.meta.env;

// Translation engine = "google", "deepl", "libre", "yandex"
const keys = { google: '', deepl: VITE_DEEPL_API_KEY };

export const translateText = async (text, { from, to }, engine) => {
  translate.engine = engine;
  translate.key = keys[engine];
  const t = text.replaceAll('·', '');
  const isSentence = ['.', '!', '?'].includes(t.at(t.length - 1));
  const wordList = t.split(/\s+/);
  const textParts = t.split(', ');
  let translation = await translate(`${t}`, { from, to });

  try {
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
    if (isSentence) return translation;
    // words
    if (wordList.length === 1) {
      // single word translation
      translation = translation.toLocaleLowerCase();
    }
    // nouns in German
    if (['der', 'die', 'das'].includes(wordList[0])) {
      translation = translation
        .replaceAll('The ', '')
        .replaceAll('the ', '')
        .split(', ')[0]
        .toLocaleLowerCase();
    }
    // verbs in English
    if (textParts[0].endsWith('en') && from.includes('de')) {
      const translationParts = translation.split(', ');
      translation = to.includes('en')
        ? 'to ' + translation
        : translationParts[0];

      if (
        to.includes('en') &&
        ['hat', 'ist'].includes(textParts[2].split(' ')[0])
      ) {
        translation = translationParts[2].startsWith('has')
          ? translation
          : `${translationParts[0]}, ${translationParts[1]}, has ${translationParts[2]}`;
      }
    }
    // adjectives in English
    if (to.includes('en') && textParts[2].split(' ')[0] === 'am') {
      const translationParts = translation.split(', ');
      translation = translationParts[2].startsWith('the')
        ? translation
        : `${translationParts[0]}, ${translationParts[1]}, the ${translationParts[2]}`;
    }

    return translation;
  } catch (err) {
    return err.message;
  }
};
