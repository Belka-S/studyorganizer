import { useState, useEffect } from 'react';

import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { TbMicrophone } from 'react-icons/tb';
import { BsStopFill } from 'react-icons/bs';

import { useClusters } from 'utils/hooks';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';

import { themes } from 'styles/themes';
import ElementEditForm from 'components/ElementList/Li/Element/ElEditForm';

const { button } = themes.shadows;
const { l, xxl } = themes.indents;

const SpeakBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const { activeCluster } = useClusters();
  const [recording, setRecording] = useState('');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { isMicrophoneAvailable } = useSpeechRecognition();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();

  const normalizedTranscript = recording.endsWith(', ')
    ? transcript
    : transcript.replace(/^./, str => str.toUpperCase());
  const fullRecording = `${recording}${normalizedTranscript}`;

  useEffect(() => {
    if (!listening) return;

    const setPunctuation = (text, char) =>
      text.trim().endsWith(char) ? `${text.trim()} ` : `${text.trim()}${char} `;

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
        const qwe = fullRecording.substring(0, fullRecording.length - 1);
        setRecording(qwe);
        resetTranscript();
      }
      if (e.code === 'Space') {
        e.preventDefault();
        const qwe = fullRecording + ' ';
        setRecording(qwe);
        resetTranscript();
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [fullRecording, listening, recording, resetTranscript]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.metaKey && e.key === 'r') {
        e.preventDefault();
        if (!listening) {
          setRecording('');
          setIsModal(true);
          SpeechRecognition.startListening({
            language: activeCluster.lang,
            continuous: true,
          });
        } else {
          SpeechRecognition.stopListening();
          resetTranscript();
        }
      }
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCluster.lang, listening, resetTranscript]);

  // https://www.google.com/intl/en/chrome/demos/speech.html
  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;

  const toggleRecognition = e => {
    if (!listening) {
      setRecording('');
      setIsModal(true);
      SpeechRecognition.startListening({
        language: activeCluster.lang,
        continuous: true,
      });
    } else {
      SpeechRecognition.stopListening();
      resetTranscript();
    }
    e?.currentTarget.blur();
  };

  return (
    <>
      <Button onClick={toggleRecognition} $s="m" $round={true} $bs={button}>
        {!listening ? <TbMicrophone size={18} /> : <BsStopFill size={18} />}
      </Button>
      {isModal && (
        <Modal
          $x={`left: ${l}`}
          $y="top: 50%"
          $bd="none"
          onClick={() => setIsModal(false)}
        >
          <ElementEditForm
            el={{
              cluster: activeCluster._id,
              element: fullRecording,
              favorite: true,
              checked: fullRecording.split(/\s+/).length < 20 ? true : false,
            }}
            setIsForm={() => null}
          />
        </Modal>
      )}
    </>
  );
};

export default SpeakBtn;
