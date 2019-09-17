import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
  { id: 'ml1', dest: 'activity', text: 'Activity' },
  { id: 'ml2', dest: '', text: 'Home' },
  { id: 'ml3', dest: 'animals', text: 'Animals' },
  { id: 'ml4', dest: 'animalFeed', text: 'Animal Feedings' }
];

const Header = () => {
  const renderMenu = list => {
    return menuList.map(({ id, dest, text }) => {
      return (
        <Link
          key={id}
          className="title"
          to={`/elijahs-retreat-experience/${dest}`}
        >
          {text}
        </Link>
      );
    });
  };

  return <div className="menu">{renderMenu(menuList)}</div>;
};

export default Header;
