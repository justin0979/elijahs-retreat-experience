import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="menu">
      <Link to="/elijahs-retreat-experience/activity">Activity</Link>
      <Link to="/elijahs-retreat-experience">Home</Link>
      <Link to="/elijahs-retreat-experience/animals">Animals</Link>
    </div>
  );
};

export default Header;
