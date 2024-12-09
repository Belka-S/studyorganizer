import { themes } from 'styles/themes';

const { white, black, background } = themes.colors;

const markAsRead = (message, nextMessage) => {
  document.querySelectorAll('button').forEach(el => {
    if (
      el.innerText.trim().replaceAll(',`', ';') === message.text.trim() ||
      (message.text.includes(' ') &&
        el.innerText
          .trim()
          .replaceAll('...', '__')
          .replaceAll(' `', ' ')
          .replaceAll(',`', ';')
          .includes(nextMessage ? message.text + nextMessage : message.text))
    ) {
      const activeEl = el.closest('li');
      const prevActiveEl = activeEl?.previousElementSibling;
      const prePrevActiveEl = prevActiveEl?.previousElementSibling;
      if (message.text) {
        el.style.color = black; // console.log('markAsRead: ', message.text);
        el.style.fontSize = '32px';
        // set element styles
        if (el.nextElementSibling && el.nextElementSibling.nextElementSibling) {
          el.parentElement.style.display = 'block';
          el.nextElementSibling.style.display = 'none';
          el.nextElementSibling.nextElementSibling.style.display = 'none';
        }
      }
      // set caption styles
      if (
        el.previousElementSibling &&
        el.previousElementSibling.previousElementSibling
      ) {
        el.parentElement.style.display = 'block';
        el.previousElementSibling.style.display = 'none';
        el.previousElementSibling.previousElementSibling.style.display = 'none';
      }
      // restore styles
      if (prevActiveEl) {
        activeEl.style.backgroundColor = null;
        prevActiveEl.style.backgroundColor = null;
        prevActiveEl.querySelectorAll('button')[0].style.color = null;
        prevActiveEl.querySelectorAll('button')[0].style.fontSize = null;
        prevActiveEl.querySelectorAll('button')[0].style.display = null;
        prevActiveEl.querySelectorAll('button')[1].style.color = null;
        prevActiveEl.querySelectorAll('button')[1].style.fontSize = null;
        prevActiveEl.querySelectorAll('button')[1].style.display = null;
        prevActiveEl.querySelectorAll('div')[1].style.display = 'grid';
        prevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      if (prePrevActiveEl) {
        activeEl.style.backgroundColor = null;
        prePrevActiveEl.style.backgroundColor = null;
        prevActiveEl.querySelector('button').style.color = null;
        prePrevActiveEl.querySelector('button').style.fontSize = null;
        prePrevActiveEl.querySelectorAll('button')[1].style.display = null;
        prePrevActiveEl.querySelectorAll('div')[1].style.display = 'grid';
        prePrevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      const scrollOnActive = () => {
        activeEl?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      };
      if (message.text) {
        activeEl.style.backgroundColor = white;
        scrollOnActive();
      }
    }
  });
};

export const speakText = ({ text, lang, rate, divider, setLiColor }) => {
  const speech = window.speechSynthesis;
  // devide message on parts
  const messageParts = text.split(divider).reduce((acc, el, i, arr) => {
    const currentElLength = el.trim().split(' ').length;
    const nextElLength = arr[i + 1]?.trim().split(' ').length;
    if (
      el.endsWith(',') &&
      (currentElLength <= 4 ||
        nextElLength <= 4 ||
        currentElLength + nextElLength <= 12)
    ) {
      arr.splice(i + 1, 1, el + arr[i + 1]);
    } else {
      acc.push(el);
    }
    return acc;
  }, []);

  let currentIndex = 0;
  const message = new SpeechSynthesisUtterance();
  const voices = speech.getVoices().filter(el => el.lang.includes(lang));
  const timeout = lang.includes('de') ? 120 : 80;

  if (!voices[0]) return `No ${lang.toUpperCase()} voice available`;
  if (lang === 'en' && voices[4]) {
    message.voice = voices[4]; // 1 - man, 7 -woman
  } else if (lang === 'de' && voices[0]) {
    message.voice = voices[0];
  } else {
    message.voice = voices[0];
  }
  message.volume = 1; // 0 to 1
  message.rate = rate; // 0.1 to 10
  message.text = messageParts[0];
  // message.pitch = 1; // 0 to 2

  // divide message on parts
  message.onend = () => {
    setLiColor(background);
    if (messageParts.length !== 1) {
      markAsRead(message, messageParts[currentIndex + 1]);
    }
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      message.text = messageParts[currentIndex];

      setTimeout(() => {
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * timeout);
    }
    if (currentIndex === messageParts.length) {
      setLiColor(white);
    }
  };

  if (speech.speaking) {
    speech.cancel();
    setLiColor(white);
  } else {
    speech.speak(message);
  }
};

export const speakTranslation = ({ text, lang, rate, divider, setLiColor }) => {
  const speech = window.speechSynthesis;
  const messageParts = text.split(divider);
  let currentIndex = 0;
  const currentMsg = messageParts[currentIndex];
  const transLang = currentMsg.split('@±@')[1].substring(0, 2);
  // message
  const message = new SpeechSynthesisUtterance();
  const voices = speech.getVoices().filter(el => el.lang.includes(lang));
  if (!voices[0]) return `No ${lang.toUpperCase()} voice available`;
  if (lang === 'en' && voices[1]) {
    message.voice = voices[1];
  } else if (lang === 'de' && voices[0]) {
    message.voice = voices[0];
  } else {
    message.voice = voices[0];
  }
  message.rate = rate;
  message.text = currentMsg.split('@±@')[0];
  // translation
  const translation = new SpeechSynthesisUtterance();
  const voicesT = speech.getVoices().filter(el => el.lang.includes(transLang));
  if (!voicesT[0]) return `No ${lang.toUpperCase()} voice available`;
  if (transLang === 'en' && voicesT[4]) {
    translation.voice = voicesT[4];
  } else if (transLang === 'de' && voicesT[0]) {
    translation.voice = voicesT[0];
  } else {
    translation.voice = voicesT[0];
  }
  translation.rate = rate;
  translation.text = currentMsg.split('@±@')[1].substring(2);
  // divide message + translation on parts
  message.onend = () => {
    markAsRead(message); // console.log('onend: ', message.text);
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      const currentMsg = messageParts[currentIndex];
      const transLang = currentMsg.split('@±@')[1].substring(0, 2);
      const voicesT = speech
        .getVoices()
        .filter(el => el.lang.includes(transLang));
      if (transLang === 'en' && voicesT[4]) {
        translation.voice = voicesT[4];
      } else if (transLang === 'de' && voicesT[0]) {
        translation.voice = voicesT[0];
      } else {
        translation.voice = voicesT[0];
      }
      message.text = currentMsg.split('@±@')[0];
      translation.text = currentMsg.split('@±@')[1].substring(2);

      setTimeout(() => {
        speech.speak(translation);
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * 50);
    }
  };

  if (speech.speaking) {
    speech.cancel();
    setLiColor(white);
  } else {
    speech.speak(translation);
    speech.speak(message);
  }
};
