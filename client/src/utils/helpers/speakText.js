import { themes } from 'styles/themes';

const { white } = themes.colors;

const markAsRead = message => {
  document.querySelectorAll('button').forEach(el => {
    if (el.innerText.trim().includes(message.text.trim())) {
      const activeEl = el.closest('li');
      const prevActiveEl = activeEl?.previousElementSibling;

      el.style.fontSize = '32px';
      if (activeEl && activeEl.style) {
        activeEl.style.backgroundColor = white;
      }
      if (el.nextElementSibling && el.nextElementSibling.nextElementSibling) {
        el.nextElementSibling.nextElementSibling.alignItems = 'center';
      }
      if (prevActiveEl) {
        prevActiveEl.style.backgroundColor = null;
        prevActiveEl.querySelector('button').style.fontSize = null;
        prevActiveEl.querySelectorAll('button')[1].style.alignItems = null;
      }
      const scrollOnActive = () => {
        activeEl?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      };
      scrollOnActive();
    }
  });
};

export const speakText = ({ text, lang, rate = 1, divider, setLiColor }) => {
  const speech = window.speechSynthesis;
  const messageParts = text.split(divider);
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
    if (messageParts.length !== 1) markAsRead(message);
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      message.text = messageParts[currentIndex];

      setTimeout(() => {
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * 120);
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
