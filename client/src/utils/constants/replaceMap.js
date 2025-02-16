// Spelling
export const spellingMap = {
  '..': '.',
  '. .': '.',
  '?.': '?',
  '? .': '?',
  '!.': '!',
  '! .': '!',
  ',,': ',',
  ', ,': ',',
};
// English
export const enMap = {
  // Punktuation
  ' Dot': '.',
  ' dot': '.',
  ' exclamation mark': '!',
  ' question mark': '?',
  ' comma': ',',
  ' colon': ':',
  ' semi-colon': ';',
  // Words
  'Yes ': 'Yes, ',
  'No ': 'No, ',
  'Wow ': 'Wow, ',
  'Look ': 'Look, ',
  ' but': ', but',
};
// German
export const deMap = {
  // Punktuation
  ' Punkt': '.',
  ' Ausrufezeichen': '!',
  ' Fragezeichen': '?',
  ' Komma': ',',
  ' Doppelpunkt': ':',
  ' Semikolon': ';',
  // Words
  'Ja ': 'Ja, ',
  'Nein ': 'Nein, ',
  ' weil': ', weil',
  ' aber': ', aber',
  ' als': ', als',
  ' ob': ', ob',
  ' damit': ', damit',
  ' bevor': ', bevor',
  ' obwohl': ', obwohl',
  ' dass': ', dass',
  ' dann': ', dann',
  ' deshalb': ', deshalb',
  ' desvegen': ', desvegen',
  ' trotzdem': ', trotzdem',
};

export const replaceMap = { ...enMap, ...deMap, ...spellingMap };
