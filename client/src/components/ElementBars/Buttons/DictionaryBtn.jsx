import { useCallback, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { PiTranslateBold } from 'react-icons/pi';

import Button from 'components/shared/Button/Button';
import { readClipboard, writeClipboard } from 'utils/helpers';
import { useClusters } from 'utils/hooks';
import { themes } from 'styles/themes';
const { button } = themes.shadows;

const DictionaryBtn = () => {
  const { activeCluster } = useClusters();

  // Array to hold opened tabs
  let tabs = useRef([]);
  // Function to open multiple tabs
  const openTabs = urls => {
    urls.forEach(url => {
      const newTab = window.open(url, '_blank');
      if (newTab) {
        tabs.current.push(newTab); // Store the reference
      } else {
        toast.error(`Failed to open tab: ${url}`);
      }
    });
  };
  // Function to close all opened tabs
  const closeAllTabs = () => {
    tabs.current.forEach(tab => {
      tab.close();
    });
    tabs.current = []; // Clear the array
  };

  const openDictionary = useCallback(async () => {
    const text = window.getSelection().toString();
    text && (await writeClipboard(text));
    const query = await readClipboard();
    let urls = [];
    if (activeCluster.lang.includes('de')) {
      urls.push(`https://www.verbformen.com/conjugation/?w=${query}`);
    }
    if (activeCluster.lang.includes('en')) {
      urls.push(
        `https://dictionary.cambridge.org/dictionary/english-russian/${query}`,
      );
    }
    closeAllTabs();
    openTabs(urls);
  }, [activeCluster.lang]);

  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.metaKey && e.key === 'd' && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        await openDictionary();
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [openDictionary]);

  return (
    <Button onClick={openDictionary} $s="m" $round={true} $bs={button}>
      <PiTranslateBold size={18} />
    </Button>
  );
};

export default DictionaryBtn;
