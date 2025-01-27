import translate from 'translate';

const { VITE_DEEPL_API_KEY } = import.meta.env;

// Translation engine = "google", "deepl", "libre", "yandex"
const keys = { google: '', deepl: VITE_DEEPL_API_KEY };

export const translateText = async (text, { from, to }, engine) => {
  translate.engine = engine;
  translate.key = keys[engine];
  const t = text.replaceAll('·', '');
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
    const isSentence = ['.', '!', '?'].includes(t.at(t.length - 1));
    if (isSentence) return translation;
    // words
    const wordList = t.replaceAll(',', '').split(/\s+/);
    // single word
    if (wordList.length === 1) {
      return translation.toLocaleLowerCase();
    }
    const translationParts = translation.split(', ');
    // nouns in German
    if (['der', 'die', 'das'].includes(wordList[0])) {
      return translation
        .replaceAll('The ', '')
        .replaceAll('the ', '')
        .split(', ')[0]
        .toLocaleLowerCase();
    }
    // adjectives in English
    if (to.includes('en') && wordList[2] === 'am') {
      return translationParts[2].startsWith('the')
        ? translation
        : `${translationParts[0]}, ${translationParts[1]}, the ${translationParts[2]}`;
    }
    // verbs in English
    if (
      wordList[0].endsWith('n') &&
      ['hat', 'ist'].includes(wordList[2]) &&
      from.includes('de')
    ) {
      translation = to.includes('en')
        ? 'to ' + translationParts[0].split(' ')[0]
        : translationParts[0].split(' ')[0];
      // if (to.includes('en') && ['hat', 'ist'].includes(wordList[2]?.split(' ')[0]))
      // {translation = translationParts[2].startsWith('has') ? 'to ' + translation : `${translationParts[0]}, ${translationParts[1]}, has ${translationParts[2]}`;}
    }
    return translation;
  } catch (err) {
    return err.message;
  }
};
