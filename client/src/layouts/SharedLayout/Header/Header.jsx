import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import GdriveSearchBar from 'components/GdriveBars/GdriveSearchBar';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ElementSearchBar from 'components/ElementBars/ElementSearchBar';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { updateUserThunk } from 'store/auth/authThunks';
import { useClusters, useGdrive } from 'utils/hooks';
import { scrollOnTop, scrollOnBottom, scrollOnDomEl } from 'utils/helpers';
import { useAuth } from 'utils/hooks/useAuth';
import { themes } from 'styles/themes';

import { StyledHeader, Nav, TitleBtn, LogoBtn } from './Header.styled';
import Logo from './Logo/Logo';
import ProfileBtn from './ProfileBtn/ProfileBtn';

const { s } = themes.indents;

const Header = ({ $height, barW, setBarW }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const { clusterSelect, activeCluster: ac } = useClusters();
  const { gdriveSelect, activeFile: af } = useGdrive();

  useEffect(() => {
    isLoggedIn ? setBarW(`${s}`) : setBarW('45%');
  }, [isLoggedIn, setBarW]);

  const scrollGdrive = () => {
    const activeFileEl = document.getElementById('active-file');
    if (!activeFileEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeFileEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnDomEl(activeFileEl);
  };

  const scrollCluster = () => {
    const activeClusterEl = document.getElementById('active-cluster');
    if (!activeClusterEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeClusterEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnDomEl(activeClusterEl);
  };

  const scrollElement = () => {
    const activeElementEl = document.getElementById('active-element');
    if (!activeElementEl) {
      window.scrollY === 0 ? scrollOnBottom() : scrollOnTop();
      return;
    }
    const positionY = activeElementEl?.getBoundingClientRect().y;
    const isVisible = positionY < window.innerHeight && positionY > 0;
    isVisible ? scrollOnBottom() : scrollOnDomEl(activeElementEl);
  };

  const handleClick = () => {
    const currenPosition = window.scrollY; // const lowestPosition = document.body.scrollHeight - window.innerHeight;
    if (currenPosition === 0) {
      barW !== '45%' ? setBarW('45%') : setBarW(`${s}`);
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
      <FlexWrap $w={barW > '45%' ? barW : '45%'} $p="0 0 0 0" $ai="center">
        <LogoBtn onClick={handleClick}>
          <Logo />
        </LogoBtn>
        <Nav>
          {isLoggedIn && (
            <NavLink
              to="/gdrive"
              onClick={() => dispatch(updateUserThunk({ clusterSelect }))}
            >
              G-Drive
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              to="/cluster"
              onClick={() => dispatch(updateUserThunk({ gdriveSelect }))}
            >
              Cluster
            </NavLink>
          )}
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
