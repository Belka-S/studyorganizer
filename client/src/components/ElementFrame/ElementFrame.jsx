import { useLocation } from 'react-router-dom';

import { getCaptionType } from 'utils/helpers';
import { useClusters, useGdrive } from 'utils/hooks';

import { Iframe } from './ElementFrame.styled';

const ElementFrame = () => {
  const { pathname } = useLocation();
  const { activeCluster } = useClusters();
  const { activeFile } = useGdrive();

  const elementFrame = getCaptionType(
    pathname.includes('gdrive')
      ? activeFile?.webViewLink
      : activeCluster?.cluster,
  );

  return (
    elementFrame.link && (
      <Iframe
        allow="clipboard-read; clipboard-write"
        width="100%"
        height="100%"
        // height={elementFrame.link?.includes('embed/') ? '50%' : '100%'}
        // src={`${elementFrame.link}#view=FitH&toolbar=1&page=${page}`}
        src={`${elementFrame.link}#view=FitH&toolbar`}
      />
    )
  );
};

export default ElementFrame;
