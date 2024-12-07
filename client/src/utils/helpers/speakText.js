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
          .includes(message.text + nextMessage))
    ) {
      el.style.color = black;
      el.style.fontSize = '32px';
      const activeEl = el.closest('li');
      const prevActiveEl = activeEl?.previousElementSibling;
      const prePrevActiveEl = prevActiveEl?.previousElementSibling;

      if (el.nextElementSibling && el.nextElementSibling.nextElementSibling) {
        el.parentElement.style.display = 'block';
        el.nextElementSibling.style.display = 'none';
        el.nextElementSibling.nextElementSibling.style.display = 'none';
      }
      if (prevActiveEl) {
        activeEl.style.backgroundColor = null;
        prevActiveEl.style.backgroundColor = null;
        prevActiveEl.querySelector('button').style.color = null;
        prevActiveEl.querySelector('button').style.fontSize = null;
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

export const speakText = ({ text, lang, rate = 1, divider, setLiColor }) => {
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
  if (!voices[0]) {
    return `No ${lang.toUpperCase()} voice available`;
  }

  message.voice = voices[0];
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
      }, messageParts[currentIndex - 1].length * 120);
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

export const speakTranslation = ({
  text,
  lang,
  rate = 1,
  divider,
  setLiColor,
}) => {
  const speech = window.speechSynthesis;
  const messageParts = text.split(divider);
  let currentIndex = 0;
  const currentMsg = messageParts[currentIndex];
  const transLang = currentMsg.split('@±@')[1].substring(0, 2);
  // message
  const message = new SpeechSynthesisUtterance();
  const voices = speech.getVoices().filter(el => el.lang.includes(lang));
  if (!voices[0]) {
    return `No ${lang.toUpperCase()} voice available`;
  }
  message.voice = voices[0];
  message.rate = rate;
  message.text = currentMsg.split('@±@')[0];
  // translation
  const translation = new SpeechSynthesisUtterance();
  const voicesT = speech.getVoices().filter(el => el.lang.includes(transLang));
  if (!voicesT[0]) {
    return `No ${lang.toUpperCase()} voice available`;
  }
  translation.voice = voicesT[0];
  translation.rate = 1;
  translation.text = currentMsg.split('@±@')[1].substring(2);
  // divide message + translation on parts
  message.onend = () => {
    markAsRead(message);
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      const currentMsg = messageParts[currentIndex];
      const transLang = currentMsg.split('@±@')[1].substring(0, 2);
      const voicesT = speech
        .getVoices()
        .filter(el => el.lang.includes(transLang));
      translation.voice = voicesT[0];
      message.text = currentMsg.split('@±@')[0];
      translation.text = currentMsg.split('@±@')[1].substring(2);

      setTimeout(() => {
        speech.speak(translation);
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * 80);
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
