import { useState, useEffect } from 'react';

import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { TbMicrophone } from 'react-icons/tb';
import { BsStopFill } from 'react-icons/bs';

import { useAuth, useClusters } from 'utils/hooks';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';

import { themes } from 'styles/themes';
import ElementEditForm from 'components/ElementList/Li/Element/ElEditForm';
import { translateText } from 'utils/helpers';

const { button } = themes.shadows;
const { m } = themes.indents;

const SpeakBtn = () => {
  const { user } = useAuth();
  const [isForm, setIsForm] = useState(false);
  const { activeCluster } = useClusters();
  const [recording, setRecording] = useState('');
  const [translation, setTranslation] = useState('');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { isMicrophoneAvailable } = useSpeechRecognition();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Add punctuation
  const normalizedTranscript = recording.endsWith(', ')
    ? transcript
    : transcript.replace(/^./, str => str.toUpperCase());
  const fullRecording = `${recording}${normalizedTranscript}`;

  const setPunctuation = (text, char) =>
    text.trim().endsWith(char) ? `${text.trim()} ` : `${text.trim()}${char} `;

  useEffect(() => {
    if (!listening || !isForm) return;
    const charList = ['.', '?', '!', ','];
    const handleKeyDown = e => {
      if (charList.includes(e.key)) {
        e.preventDefault();
        const normalizedRecording = setPunctuation(fullRecording, e.key);
        setRecording(normalizedRecording);
        resetTranscript();
      }
      if (e.key === 'Backspace') {
        e.preventDefault();
        const backspace = fullRecording.substring(0, fullRecording.length - 1);
        setRecording(backspace);
        resetTranscript();
      }
      if (e.code === 'Space') {
        e.preventDefault();
        const space = fullRecording + ' ';
        setRecording(space);
        resetTranscript();
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [fullRecording, isForm, listening, recording, resetTranscript]);
  // Start/Stop recording by cmd+R/escape
  useEffect(() => {
    const handleKeyDown = async e => {
      if (!listening && e.metaKey && e.key === 'r') {
        e.preventDefault();
        setRecording('');
        setTranslation('');
        setIsForm(true);
        SpeechRecognition.startListening({
          language: activeCluster.lang,
          continuous: true,
        });
      }
      if (listening) {
        e.preventDefault();
        if (e.key === 'Escape') {
          return SpeechRecognition.stopListening();
        }
        if (e.metaKey && e.key === 'r') {
          SpeechRecognition.stopListening();
          // Finalisation after stop
          const finalText = transcript
            ? setPunctuation(fullRecording, '.')
            : fullRecording;
          const payload = { from: activeCluster.lang, to: user.lang };
          const text = await translateText(finalText, payload, user.engine);
          const isFinished = ['.', '?', '!'].includes(
            fullRecording.at(fullRecording.length - 1),
          );
          !isFinished && setRecording(finalText);
          setTranslation(text);
          resetTranscript();
        }
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [
    activeCluster.lang,
    fullRecording,
    listening,
    resetTranscript,
    transcript,
    user.engine,
    user.lang,
  ]);
  // https://www.google.com/intl/en/chrome/demos/speech.html
  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;

  const toggleRecognition = async e => {
    e?.currentTarget.blur();
    if (!listening) {
      setRecording('');
      setTranslation('');
      setIsForm(true);
      SpeechRecognition.startListening({
        language: activeCluster.lang,
        continuous: true,
      });
    } else {
      SpeechRecognition.stopListening();
      // Finalisation after stop
      const finalText = transcript
        ? setPunctuation(fullRecording, '.')
        : fullRecording;
      const payload = { from: activeCluster.lang, to: user.lang };
      const text = await translateText(finalText, payload, user.engine);
      const isFinished = ['.', '?', '!'].includes(
        fullRecording.at(fullRecording.length - 1),
      );
      !isFinished && setRecording(finalText);
      setTranslation(text);
      resetTranscript();
    }
  };

  return (
    <>
      <Button onClick={toggleRecognition} $s="m" $round={true} $bs={button}>
        {!listening ? <TbMicrophone size={18} /> : <BsStopFill size={18} />}
      </Button>

      {isForm && (
        <Modal $x={`left: ${m}`} $y="top: 50%" $bd="none">
          <ElementEditForm
            el={{
              cluster: activeCluster._id,
              element: fullRecording,
              caption: translation,
              favorite: true,
              checked: fullRecording.split(/\s+/).length < 20 ? true : false,
            }}
            setIsForm={setIsForm}
          />
        </Modal>
      )}
    </>
  );
};

export default SpeakBtn;
