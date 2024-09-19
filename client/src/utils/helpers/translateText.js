import translate from 'translate';

// Translation
translate.engine = 'google'; // "google", "yandex", "libre", "deepl"

export const translateText = async (text, { from, to }) => {
  try {
    const translation = await translate(`${text}`, { from, to });
    return translation.split(/\s+/).length !== 1
      ? translation
      : translation.at(0).toLocaleLowerCase() + translation.substring(1);
  } catch (err) {
    return err.message;
  }
};
