import React from 'react';
import { useSE } from '../../../context/SEProvider';
import { StyledNavItem } from './_style';
import * as Signout from '@mui/icons-material/Logout';

const Logout = () => {
  const se = useSE();

  return (
    <StyledNavItem className="navbar-nav">
      <li className="nav-item">
        <a
          onClick={() => se.actions.logout()}
          className="nav-link"
          id="signOut"
        >
        <Signout.default/>
        </a>
      </li>
    </StyledNavItem>
  );
};

export default Logout;
