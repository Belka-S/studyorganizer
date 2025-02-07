const { VITE_GOOGLE_API_KEY } = import.meta.env;

export const getCaptionType = caption => {
  let captionObj = { link: null, text: null, file: null };
  if (!caption) return captionObj;
  const type = {
    mp3: '.mp3',
    gdrive: '/view?usp=',
    http: 'http',
    www: 'www',
  };
  // Link
  if (caption.startsWith(type.http || type.www)) {
    captionObj.link = caption
      .replace('watch?v=', 'embed/')
      .replace('/view', '/preview');
  }
  // Text
  if (!caption.includes(type.http || type.www)) {
    captionObj.text = caption;
  }
  // File
  if (caption.endsWith(type.mp3)) {
    captionObj.file = caption;
  }
  if (caption.includes(type.gdrive)) {
    let gdriveFileId = caption.replace('https://drive.google.com/file/d/', '');
    gdriveFileId = gdriveFileId.substring(0, gdriveFileId.indexOf(type.gdrive));
    captionObj.file =
      'https://www.googleapis.com/drive/v3/files/' +
      `${gdriveFileId}?alt=media&key=${VITE_GOOGLE_API_KEY}`;
  }
  return captionObj;
};
