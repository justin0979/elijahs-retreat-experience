import React from 'react';
import animals1 from './animalsPics/animal-1.jpg';

class Animals extends React.Component {
  render() {
    return (
      <div>
        <img alt="animal feeding" src={animals1} />
      </div>
    );
  }
}

export default Animals;
