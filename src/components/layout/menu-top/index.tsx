import React, { Fragment, useEffect, useState } from 'react';
import { useSE } from '../../../context/SEProvider';
import Logo from '../logo/index';
import Logout from '../logout';

export default function Header() {
  const se = useSE();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(se.state.isAuthenticated);
  }, [se.state.isAuthenticated]);

  return (
    <Fragment>
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-light ${
          (isAuthenticated && 'authenticated') || 'public-view'
        }`}
      >
        <Logo />
        {isAuthenticated && <Logout />}
      </nav>
    </Fragment>
  );
}
