import React from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSE } from '../../../SEProvider';
import { StyledNavItem } from './_style';

const Logout = () => {
  const se = useSE();

  return (
    <StyledNavItem className="navbar-nav navbar-nav-right">
      <li className="nav-item">
        <a
          onClick={() => se.actions.logout()}
          className="nav-link"
          id="signOut"
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> Sair
        </a>
      </li>
    </StyledNavItem>
  );
};

export default Logout;
