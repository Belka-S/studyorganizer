import translate from 'translate';

// Translation
translate.engine = 'google'; // "google", "yandex", "libre", "deepl"

export const translateText = async (text, { from, to }) => {
  try {
    let translation = await translate(`${text}`, { from, to });
    if (translation.split(/\s+/).length === 1) {
      translation = translation.toLocaleLowerCase();
    }
    if (to.includes('en') && text.toLowerCase().includes('uhr')) {
      translation = translation
        .replaceAll('a.m. on', 'am on')
        .replaceAll('p.m. on', 'pm on')
        .replaceAll('a.m. to', 'am to')
        .replaceAll('p.m. to', 'pm to')
        .replaceAll('a.m.', 'am.')
        .replaceAll('p.m.', 'pm.');
    }
    return translation;
  } catch (err) {
    return err.message;
  }
};
