import { useEffect, useRef, useCallback } from 'react';
import { toast } from 'react-toastify';

export const useOpenUrls = urlsArr => {
  // Array to hold opened tabs
  let tabs = useRef([]);
  // Function to open multiple tabs '_blank'
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

  const openUrls = useCallback(async urlsArr => {
    let urls = [];
    urlsArr.forEach(url => urls.push(url));
    closeAllTabs();
    openTabs(urls);
  }, []);

  // To set Key controul lautch with urls: useOpenUrls(urlsArr)
  useEffect(() => {
    const handleKeyDown = async e => {
      if (e.metaKey && e.key === 'l' && !e.altKey && !e.shiftKey) {
        e.preventDefault();
        await openUrls(urlsArr);
      }
    };

    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, [openUrls, urlsArr]);

  return { openUrls };
};
