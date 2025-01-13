import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import ElementFrame from 'components/ElementFrame/ElementFrame';
import ElementEditBar from 'components/ElementBars/ElementEditBar';

import { SideBarDiv } from './SideBar.styled';

const SideBar = ({ $side, $width, $height, $offY }) => {
  const { pathname } = useLocation();
  const [isEditBar, setIsEditBar] = useState(true);

  const langBarEl = document.querySelector('.element-lang-bar');
  console.log('langBarEl: ', langBarEl);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        setIsEditBar(!entry.isIntersecting);
      });
    };
    const options = {
      rootMargin: '0px 0px 20px 0px',
      threshold: 0.5,
    };

    const io = new IntersectionObserver(callback, options);
    if (langBarEl) {
      io.observe(langBarEl);
    }
  }, [langBarEl]);

  const isFrame = () => {
    const paths = ['cluster', 'element', 'gdrive'];
    return paths.some(el => pathname.includes(el)); // && user?._id === activeCluster?.owner
  };

  return (
    <SideBarDiv $side={$side} $width={$width} $height={$height} $offY={$offY}>
      {isFrame() ? <ElementFrame /> : <ScreenSaver />}
      {pathname.includes('/element') && isEditBar && <ElementEditBar />}
    </SideBarDiv>
  );
};

export default SideBar;

SideBar.propTypes = {
  $side: PropTypes.string,
  $width: PropTypes.string,
  $height: PropTypes.string,
  $offY: PropTypes.string,
};
