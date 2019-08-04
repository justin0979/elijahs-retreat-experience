import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="menu">
      <Link className='title' to="/elijahs-retreat-experience/activity">Activity</Link>
      <Link className='title' to="/elijahs-retreat-experience">Home</Link>
      <Link className='title' to="/elijahs-retreat-experience/animals">Animals</Link>
      <Link className='title' to="/elijahs-retreat-experience/animalfeed">Animal Feedings</Link>
    </div>
  );
};

export default Header;
