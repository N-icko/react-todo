import React from 'react';

import './Header.css';

function Header() {
  return (
    <nav>
      <div className="nav-wrapper px2 light-blue lighten-1">
        <a href="/" className="brand-logo">Your <strong>TODO</strong></a>
      </div>
    </nav>
  );
}

export default Header;
