import { useState } from 'react';
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

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { isMicrophoneAvailable } = useSpeechRecognition();
  const { browserSupportsSpeechRecognition } = useSpeechRecognition();
  // https://www.google.com/intl/en/chrome/demos/speech.html
  if (!browserSupportsSpeechRecognition || !isMicrophoneAvailable) return;

  const toggleRecognition = () => {
    if (!listening) {
      resetTranscript();
      setIsModal(true);
      SpeechRecognition.startListening({
        language: activeCluster.lang,
        continuous: true,
      });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <>
      <Button onClick={toggleRecognition} $s="m" $round={true} $bs={button}>
        {!listening ? <TbMicrophone size={18} /> : <BsStopFill size={18} />}
      </Button>
      {isModal && (
        <Modal
          $x={`left: ${l}`}
          $y={`bottom: ${xxl}`}
          $bd="none"
          onClick={() => setIsModal(false)}
        >
          <ElementEditForm
            el={{
              _id: null,
              cluster: activeCluster._id,
              element: transcript,
              caption: '',
            }}
            setIsForm={() => null}
          />
        </Modal>
      )}
    </>
  );
};

export default SpeakBtn;
