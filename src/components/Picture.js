import React from 'react';
import './Picture.scss';

const Picture = props => {
  return (
    <div>
      <img className="pic" alt="entry sign" src={props.image} />
    </div>
  );
};

export default Picture;
