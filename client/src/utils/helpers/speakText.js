import { themes } from 'styles/themes';

const { white, black, smokeBlack, lightYellow, background } = themes.colors;

const markAsRead = (current, next) => {
  const normalizeMessage = message =>
    message
      ?.replaceAll('__', '...')
      .replaceAll('missis', 'Mrs.')
      .replaceAll('miss', 'Ms.')
      .replaceAll('mister', 'Mr.');
  const currentMsg = normalizeMessage(current);
  const nextMsg = normalizeMessage(next);

  const elementList = document.querySelector('ul');
  elementList.querySelectorAll('button').forEach(el => {
    const elText = el.innerText.replaceAll(',`', ';').replaceAll('`', '');

    if (elText.endsWith(currentMsg) || elText.includes(currentMsg + nextMsg)) {
      const activeEl = el.closest('li');
      const prevActiveEl = activeEl?.previousElementSibling;
      const prePrevActiveEl = prevActiveEl?.previousElementSibling;
      if (activeEl?.innerText.includes(currentMsg)) {
        el.style.color = black;
        el.style.fontSize = '32px';
        // set lightened text
        if (currentMsg?.startsWith(' ') || nextMsg?.startsWith(' ')) {
          el.style.display = 'inline';
          const lightenedEl = `<span style="color: ${smokeBlack}; background-color: ${lightYellow}; border-radius: 4px;">${currentMsg} </span>`;
          el.innerHTML = elText.replace(currentMsg, lightenedEl);
        }
        // set element styles
        if (el.nextElementSibling && el.nextElementSibling.nextElementSibling) {
          el.parentElement.style.display = 'block';
          el.nextElementSibling.style.display = 'none';
          el.nextElementSibling.nextElementSibling.style.display = 'none';
        }
        // set caption styles
        if (
          el.previousElementSibling &&
          el.previousElementSibling.previousElementSibling
        ) {
          el.parentElement.style.display = 'block';
          el.previousElementSibling.style.display = 'none';
          el.previousElementSibling.previousElementSibling.style.display =
            'none';
        }
      }
      // restore styles
      if (prevActiveEl) {
        prevActiveEl.style.backgroundColor = null;
        prevActiveEl.querySelectorAll('button')[0].style.color = null;
        prevActiveEl.querySelectorAll('button')[0].style.fontSize = null;
        prevActiveEl.querySelectorAll('button')[0].style.display = null;
        prevActiveEl.querySelectorAll('button')[0].innerHTML =
          prevActiveEl.querySelectorAll('button')[0].innerText;
        prevActiveEl.querySelectorAll('button')[1].style.color = null;
        prevActiveEl.querySelectorAll('button')[1].style.fontSize = null;
        prevActiveEl.querySelectorAll('button')[1].style.display = null;
        prevActiveEl.querySelectorAll('button')[1].innerHTML =
          prevActiveEl.querySelectorAll('button')[1].innerText;
        prevActiveEl.querySelectorAll('div')[1].style.display = null;
        prevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      if (prePrevActiveEl) {
        prePrevActiveEl.style.backgroundColor = null;
        prePrevActiveEl.querySelectorAll('button')[0].style.color = null;
        prePrevActiveEl.querySelectorAll('button')[0].style.fontSize = null;
        prePrevActiveEl.querySelectorAll('button')[0].style.display = null;
        prePrevActiveEl.querySelectorAll('button')[0].innerHTML =
          prePrevActiveEl.querySelectorAll('button')[0].innerText;
        prePrevActiveEl.querySelectorAll('button')[1].style.color = null;
        prePrevActiveEl.querySelectorAll('button')[1].style.fontSize = null;
        prePrevActiveEl.querySelectorAll('button')[1].style.display = null;
        prePrevActiveEl.querySelectorAll('button')[1].innerHTML =
          prePrevActiveEl.querySelectorAll('button')[1].innerText;
        prePrevActiveEl.querySelectorAll('div')[1].style.display = null;
        prePrevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      const scrollOnActive = () => {
        activeEl?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      };
      if (currentMsg) {
        activeEl.style.backgroundColor = white;
        scrollOnActive();
      }
      return activeEl;
    }
  });
};

const refreshPlaylist = () => {
  const elementList = document.querySelector('ul');
  const styledBtn = elementList.querySelectorAll('button');
  styledBtn.forEach(el => el.removeAttribute('style'));
  const styledDiv = elementList.querySelectorAll('div');
  styledDiv.forEach(el => el.removeAttribute('style'));
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
    if (currentIndex === messageParts.length - 1) {
      refreshPlaylist();
    } else if (messageParts.length !== 1) {
      markAsRead(message.text, messageParts[currentIndex + 1]);
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
  const messageParts = text.split(divider); // .substring(0, text.length - divider.length)

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
    markAsRead(message.text);
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      const currentMsg = messageParts[currentIndex];
      const transLang = currentMsg.split('@±@')[1]?.substring(0, 2);
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
      translation.text = currentMsg.split('@±@')[1]?.substring(2);

      setTimeout(() => {
        speech.speak(translation);
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * 50);
    }
    if (currentIndex === messageParts.length) {
      setLiColor(white);
      refreshPlaylist();
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
