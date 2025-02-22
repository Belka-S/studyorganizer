import { themes } from 'styles/themes';

import { startsWithCapital } from './startsWithCapital';

const { white, black, smokeBlack, lightYellow, background, placeholder } =
  themes.colors;

const markAsRead = (current, next) => {
  const normalizeMessage = message =>
    message
      ?.replaceAll('__', '...')
      .replaceAll(';', ',')
      .replaceAll('missiS', 'Mrs.')
      .replaceAll('misS', 'Ms.')
      .replaceAll('misteR', 'Mr.')
      .replaceAll('@±@de', '')
      .replaceAll('@±@en', '')
      .replaceAll('@±@uk', '')
      .replaceAll('@±@ru', '')
      .replaceAll('@±@sp', '')
      .replaceAll('@±@fr', '')
      .replaceAll('@±@it', '');
  const currentMsg = normalizeMessage(current);
  const nextMsg = normalizeMessage(next);

  const elementList = document.querySelector('#element-list');
  elementList.querySelectorAll('button').forEach(el => {
    if (el.innerText) {
      el.innerText = el.innerText.replaceAll('`', '');
    }
    if (
      el.innerText.startsWith(currentMsg) ||
      el.innerText.endsWith(currentMsg) ||
      (currentMsg.split(' ').length > 1 &&
        el.innerText.includes(currentMsg + nextMsg))
    ) {
      const activeEl = el.closest('li');
      const gridWrap = activeEl.querySelectorAll('div')[1];
      const divider = activeEl.querySelectorAll('div')[2];
      const prevActiveEl = activeEl?.previousElementSibling;
      const prePrevActiveEl = prevActiveEl?.previousElementSibling;

      // if (startsWithSmall(currentMsg)) activeEl.id = 'vocabulary';
      if (activeEl?.innerText.includes(currentMsg)) {
        activeEl.style.fontSize = '2vw';
        gridWrap.style.display = 'flex';
        gridWrap.style.justifyContent = 'space-between';
        gridWrap.style.alignItems = 'center';
        divider.style.display = 'none';

        el.style.fontSize = '3vw';
        el.style.color = black;
        // set lightened text
        if (currentMsg?.startsWith(' ') || nextMsg?.startsWith(' ')) {
          el.style.display = 'inline';
          el.style.color = placeholder;
          const lightenedEl = `<span style="color: ${smokeBlack}; background-color: ${lightYellow}; ">${currentMsg.trim()}</span>`;
          el.innerHTML = el.innerText.replace(currentMsg, ' ' + lightenedEl);
        }
        // set element styles
        if (
          startsWithCapital(currentMsg) &&
          el.nextElementSibling &&
          el.nextElementSibling.nextElementSibling
        ) {
          el.parentElement.style.display = 'block';
          el.nextElementSibling.nextElementSibling.style.display = 'none';
          el.nextElementSibling.style.display = 'none';
        }
        if (
          startsWithCapital(currentMsg) &&
          el.previousElementSibling &&
          el.previousElementSibling.previousElementSibling
        ) {
          el.parentElement.style.display = 'block';
          el.previousElementSibling.previousElementSibling.style.display =
            'none';
          el.previousElementSibling.style.display = 'none';
        }
      }
      // restore styles
      if (prevActiveEl) {
        prevActiveEl.style.backgroundColor = null;
        prevActiveEl.style.fontSize = null;
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
        prevActiveEl.querySelectorAll('div')[1].style.justifyContent = null;
        prevActiveEl.querySelectorAll('div')[1].style.alignItems = null;
        prevActiveEl.querySelectorAll('div')[1].style.display = null;
        prevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      if (prePrevActiveEl) {
        prePrevActiveEl.style.backgroundColor = null;
        prePrevActiveEl.style.fontSize = null;
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
        prePrevActiveEl.querySelectorAll('div')[1].style.justifyContent = null;
        prePrevActiveEl.querySelectorAll('div')[1].style.alignItems = null;
        prePrevActiveEl.querySelectorAll('div')[1].style.display = null;
        prePrevActiveEl.querySelectorAll('div')[2].style.display = null;
      }
      const scrollOnDomEl = () => {
        activeEl?.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      };

      if (currentMsg && !currentMsg.startsWith(' ')) {
        activeEl.style.backgroundColor = white;
        scrollOnDomEl();
      }
      return activeEl;
    }
  });
};

const refreshPlaylist = () => {
  const elementList = document.querySelector('#element-list');
  const styledLi = elementList.querySelectorAll('li');
  styledLi.forEach(el => el.removeAttribute('style'));
  const styledDiv = elementList.querySelectorAll('div');
  styledDiv.forEach(el => el.removeAttribute('style'));
  const styledBtn = elementList.querySelectorAll('button');
  styledBtn.forEach(el => {
    el.removeAttribute('style');
    if (el.innerText) el.innerHTML = el.innerText;
  });
};

export const speakText = props => {
  const { setLiColor, divider, voices, text, lang, rate } = props;
  const speech = window.speechSynthesis;
  // devide message on parts
  const messageParts = text.split(divider).reduce((acc, el, i, arr) => {
    const currentElLength = el.trim().split(' ').length;
    const nextElLength = arr[i + 1]?.trim().split(' ').length;
    if (
      (el.endsWith(',') || el.includes(',@±@')) &&
      (currentElLength <= 3 ||
        nextElLength <= 3 ||
        currentElLength + nextElLength <= 12)
    ) {
      const unitedEl = el.includes(',@±@')
        ? el.substring(0, el.length - 5) + arr[i + 1]
        : el + arr[i + 1];
      arr.splice(i + 1, 1, unitedEl);
    } else {
      acc.push(el);
    }
    return acc;
  }, []);

  let currentIndex = 0;
  const message = new SpeechSynthesisUtterance();
  message.volume = 1; // 0 to 1
  message.rate = rate; // 0.1 to 10
  message.text = messageParts[0].split('@±@')[0];
  const firstLangIdx = text.indexOf('@±@') + 3;
  let messageLang = !text.includes('@±@')
    ? lang
    : text.substring(firstLangIdx, firstLangIdx + 2);
  // message.pitch = 1; // 0 to 2
  let voicesM = voices.filter(el => el.lang.includes(messageLang));
  if (!voicesM[0]) return `No ${lang.toUpperCase()} voice available`;
  if (lang === 'en' && voicesM[4]) {
    message.voice = voicesM[4]; // 1 - man, 7 - woman
  } else if (lang === 'de' && voicesM[0]) {
    message.voice = voicesM[0];
  } else {
    message.voice = voicesM[0];
  }
  // mark current message
  message.onstart = () => {
    // console.log(1);
    setLiColor(background);
    if (currentIndex === messageParts.length - 1) {
      setLiColor(white);
      refreshPlaylist();
    } else if (messageParts.length !== 1) {
      markAsRead(message.text, messageParts[currentIndex + 1]);
    }
  };
  // divide message on parts
  const timeout = lang.includes('de') ? 120 : 100;
  message.onend = () => {
    // console.log(2);
    // const activeEl = document.querySelector('#vocabulary');
    // console.log('activeEl: ', activeEl);

    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      message.text = messageParts[currentIndex].split('@±@')[0];
      if (messageParts[currentIndex].split('@±@')[1]) {
        messageLang = messageParts[currentIndex].split('@±@')[1];
      }
      voicesM = voices.filter(el => el.lang.includes(messageLang));

      if (messageLang === 'en' && voicesM[4]) {
        message.voice = voicesM[4];
      } else if (messageLang === 'de' && voicesM[0]) {
        message.voice = voicesM[0];
      } else {
        message.voice = voicesM[0];
      }

      setTimeout(() => {
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * timeout);
    }
  };

  if (speech.speaking) {
    speech.cancel();
    setLiColor(white);
  } else {
    speech.speak(message);
  }
};

export const speakTranslation = props => {
  const { setLiColor, divider, voices, text, lang, rate } = props;
  const speech = window.speechSynthesis;

  let currentIndex = 0;
  const messageParts = text.split(divider); // .substring(0, text.length - divider.length)
  const currentMsg = messageParts[currentIndex];
  const transLang = currentMsg.split('@±@')[1].substring(0, 2);
  // message
  const message = new SpeechSynthesisUtterance();
  const voicesM = voices.filter(el => el.lang.includes(lang));
  if (!voicesM[0]) return `No ${lang.toUpperCase()} voice available`;
  if (lang === 'en' && voicesM[4]) {
    message.voice = voicesM[4];
  } else if (lang === 'de' && voicesM[0]) {
    message.voice = voicesM[0];
  } else {
    message.voice = voicesM[0];
  }
  message.rate = rate;
  message.text = currentMsg.split('@±@')[0];
  // translation
  const translation = new SpeechSynthesisUtterance();
  const voicesT = voices.filter(el => el.lang.includes(transLang));
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
  // mark current message
  message.onstart = () => {
    // console.log('2');
    refreshPlaylist();
    markAsRead(message.text);
    if (currentIndex === messageParts.length - 1) {
      setLiColor(white);
      refreshPlaylist();
    }
  };
  // divide message + translation on parts
  message.onend = () => {
    currentIndex += 1;
    if (currentIndex < messageParts.length) {
      const currentMsg = messageParts[currentIndex];
      const timeout = ['.', '!', '?', '"'].includes(
        messageParts[currentIndex - 1].at(-1),
      )
        ? 60
        : 80;

      const transLang = currentMsg.split('@±@')[1]?.substring(0, 2);
      const voicesT = voices.filter(el => el.lang.includes(transLang));
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
        if (currentIndex < messageParts.length - 1) {
          // console.log('1');
          markAsRead(translation.text);
          speech.speak(translation);
        }
        speech.speak(message);
      }, messageParts[currentIndex - 1].length * timeout);
    }
  };

  if (speech.speaking) {
    speech.cancel();
    setLiColor(white);
  } else {
    // console.log('0');
    markAsRead(translation.text);
    speech.speak(translation);
    speech.speak(message);
  }
};
