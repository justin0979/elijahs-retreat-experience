import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="menu">
      <Link to="/activity">Activity</Link>
      <Link to="/">Home</Link>
      <Link to="/animals">Animals</Link>
    </div>
  );
};

export default Header;
