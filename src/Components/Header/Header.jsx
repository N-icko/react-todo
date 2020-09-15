import React from 'react';

import './Header.css';

export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper px2 blue lighten-3">
        <a href="/" className="brand-logo">Your <strong>TODO</strong></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="fz1" href="/">Your <strong>TODO</strong></a></li>
          <li><a className="fz1" href="/">Info</a></li>
        </ul>
      </div>
    </nav>
  );
};
