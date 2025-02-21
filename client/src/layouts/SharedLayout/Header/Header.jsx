import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import GdriveSearchBar from 'components/GdriveBars/GdriveSearchBar';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ElementSearchBar from 'components/ElementBars/ElementSearchBar';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useAuth, useClusters, useGdrive } from 'utils/hooks';
import { scrollOnTop, scrollOnBottom, scrollOnDomEl } from 'utils/helpers';
import { themes } from 'styles/themes';
import mernLogo from 'assets/icons/favicon.png';

import ProfileBtn from './ProfileBtn/ProfileBtn';
import DropMenu from './DropMenu/DropMenu';
import { StyledHeader, Nav, TitleBtn, LogoBtn, Img } from './Header.styled';

const { s } = themes.indents;

const Header = ({ height, barW, setBarW }) => {
  const { pathname } = useLocation();
  const { user, isLoggedIn } = useAuth();
  const { activeCluster } = useClusters();
  const { activeFile } = useGdrive();

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
    if (isTitle && activeCluster?.title) return activeCluster.title;
  };

  const gdriveTitle = () => {
    const isTitle = pathname === '/gdrive';
    if (isTitle && activeFile?.name) return activeFile.name;
  };

  return (
    <StyledHeader $height={height}>
      <FlexWrap $w={barW > '45%' ? barW : '45%'} $p="0 0 0 0" $ai="center">
        <LogoBtn onClick={handleClick}>
          <Img src={mernLogo} height="32" width="32" alt="MERN logo" />
        </LogoBtn>
        {isLoggedIn && (
          <Nav>
            <NavLink to="/gdrive">
              <FcGoogle size="17px" />
              Drive
            </NavLink>

            <DropMenu>
              <NavLink to="/cluster">{user.subject ?? 'Subject'}</NavLink>
            </DropMenu>

            <TitleBtn onClick={handleScroll}>
              {clusterTitle()}
              {gdriveTitle()}
            </TitleBtn>
          </Nav>
        )}
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
  height: PropTypes.string.isRequired,
  barW: PropTypes.string.isRequired,
  setBarW: PropTypes.func.isRequired,
};
