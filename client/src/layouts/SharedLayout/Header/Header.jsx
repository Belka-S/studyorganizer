import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import GdriveSearchBar from 'components/GdriveBars/GdriveSearchBar';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ElementSearchBar from 'components/ElementBars/ElementSearchBar';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useClusters, useGdrive } from 'utils/hooks';
import { useAuth } from 'utils/hooks/useAuth';
import { themes } from 'styles/themes';

import { StyledHeader, Nav, TitleBtn, LogoBtn } from './Header.styled';
import Logo from './Logo/Logo';
import ProfileBtn from './ProfileBtn/ProfileBtn';

const { s } = themes.indents;

const Header = ({ $height, barW, setBarW }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const { activeCluster: ac } = useClusters();
  const { activeFile: af } = useGdrive();

  useEffect(() => {
    isLoggedIn ? setBarW('18%') : setBarW('45%');
  }, [isLoggedIn, setBarW]);

  const scrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollOnBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  const scrollOnActive = el => {
    el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  const scrollGdrive = () => {
    const activeFileEl = document.getElementById('active-file');
    if (!activeFileEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeFileEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnActive(activeFileEl);
  };

  const scrollCluster = () => {
    const activeClusterEl = document.getElementById('active-cluster');
    if (!activeClusterEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeClusterEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnActive(activeClusterEl);
  };

  const scrollElement = () => {
    const activeElementEl = document.getElementById('active-element');
    if (!activeElementEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeElementEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnActive(activeElementEl);
  };

  const handleClick = () => {
    const currenPosition = window.scrollY; // const lowestPosition = document.body.scrollHeight - window.innerHeight;
    if (currenPosition === 0) {
      barW !== '18%' ? setBarW('18%') : setBarW('45%');
    }
    scrollOnTop();
  };

  const handleScroll = () => {
    if (pathname.includes('/cluster')) {
      scrollCluster(); // navigate(`/element/${ac?._id}`, { replace: true });
    }
    if (pathname.includes('/element')) {
      scrollElement(); // navigate('/cluster', { replace: true });
    }
    if (pathname.includes('/gdrive')) {
      scrollGdrive();
    }
  };

  const clusterTitle = () => {
    const paths = ['cluster', 'element'];
    const isTitle = paths.some(el => pathname.includes(el));
    if (isTitle && ac?.group && ac?.title) {
      return `${ac.group} ${ac.title}`;
    }
  };

  const gdriveTitle = () => {
    const isTitle = pathname === '/gdrive';
    if (isTitle && af?.name) return af.name;
  };

  return (
    <StyledHeader $height={$height}>
      <FlexWrap $w={barW > '45%' ? barW : '45%'} $p={`0 ${s} 0 0`} $ai="center">
        <LogoBtn onClick={handleClick}>
          <Logo />
        </LogoBtn>
        <Nav>
          {isLoggedIn && <NavLink to="/gdrive">G-Drive</NavLink>}
          {isLoggedIn && <NavLink to="/cluster">Cluster</NavLink>}
          {isLoggedIn && (
            <TitleBtn onClick={handleScroll}>
              {clusterTitle()}
              {gdriveTitle()}
            </TitleBtn>
          )}
        </Nav>
      </FlexWrap>

      <FlexWrap $w={`calc(100% - ${barW})`} $p={`0 0 0 ${s}`} $ai="center">
        {pathname === '/gdrive' && <GdriveSearchBar />}
        {pathname === '/cluster' && <ClustersSearchBar />}
        {pathname.includes('/element/') && <ElementSearchBar />}
        {isLoggedIn && <ProfileBtn />}
      </FlexWrap>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  $height: PropTypes.string.isRequired,
  barW: PropTypes.string.isRequired,
  setBarW: PropTypes.func.isRequired,
};
