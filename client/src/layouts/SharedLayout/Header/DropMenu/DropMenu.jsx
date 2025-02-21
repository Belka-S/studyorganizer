import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiTriangleFill } from 'react-icons/pi';

import { useAuth, useClusters } from 'utils/hooks';
import { cleanCluster, cleanGroup } from 'store/cluster/clusterSlice';
import { updateUserThunk } from 'store/auth/authThunks';

import { themes } from 'styles/themes';

import { Dropdown } from './DropMenu.styled';

const { placeholder } = themes.colors;

const DropMenu = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { clusterSubjects } = useClusters();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleClick = () => setMenu(close);

    addEventListener('click', handleClick);
    return () => {
      removeEventListener('click', handleClick);
    };
  }, []);

  const handleMenuClick = (subjectId, subject) => {
    dispatch(cleanCluster());
    dispatch(cleanGroup());
    dispatch(updateUserThunk({ subjectId, subject }));
    if (!pathname.includes('/cluster')) {
      navigate('/cluster');
    }
  };

  return (
    <Dropdown $menu={menu}>
      {children}

      <button className="drop-button" onMouseEnter={() => setMenu(true)}>
        <PiTriangleFill size="7px" fill={placeholder} />
      </button>

      <ul className="drop-menu" onMouseLeave={() => setMenu(false)}>
        {clusterSubjects.map(({ _id, subject }) => (
          <li
            className={_id === user.subjectId ? 'active' : 'menu-item'}
            key={_id}
            onClick={() => handleMenuClick(_id, subject)}
          >
            {subject}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default DropMenu;

DropMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
