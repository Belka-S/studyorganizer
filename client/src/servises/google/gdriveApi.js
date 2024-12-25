import { saveAs } from 'file-saver';

// list files
export const listFiles = async () => {
  const { result } = await window.gapi.client.drive.files.list({
    pageSize: 1000,
    orderBy: 'folder', // name, folder, recency, modifiedTime,
    fields:
      'files(id, name, parents, mimeType, fullFileExtension, webViewLink, webContentLink, createdTime, shared, starred, trashed)',
    q: 'not mimeType contains "audio/"',
  });
  return result;
};

// delete file
export const deleteFile = fileId => {
  return window.gapi.client.drive.files.delete({ fileId });
};

// get file
export const getFile = async ({ fileId, fileName }) => {
  const { body } = await window.gapi.client.drive.files.get({
    fileId,
    alt: 'media',
  });

  const blob = new Blob([body], { type: 'text/plain' });
  saveAs(blob, fileName);
};
