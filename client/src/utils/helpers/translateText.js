import translate from 'translate';

const { VITE_DEEPL_API_KEY } = import.meta.env;

// Translation engine = "google", "deepl", "libre", "yandex"
const keys = { google: '', deepl: VITE_DEEPL_API_KEY };

export const translateText = async (text, { from, to }, engine) => {
  translate.engine = engine;
  translate.key = keys[engine];
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
