import React from 'react';
import Picture from '../Picture';
import animals1 from './animalsPics/animal-1.jpg';
import animals2 from './animalsPics/animal-2.jpg';
import animals3 from './animalsPics/animal-3.jpg';
import animals4 from './animalsPics/animal-4.jpg';
import animals5 from './animalsPics/animal-5.jpg';
import animals6 from './animalsPics/animal-6.jpg';
import animals7 from './animalsPics/animal-7.jpg';
import animals8 from './animalsPics/animal-8.jpg';
import animals9 from './animalsPics/animal-9.jpg';

const pics = [
  animals1,
  animals2,
  animals3,
  animals4,
  animals5,
  animals6,
  animals7,
  animals8,
  animals9
]

class Animals extends React.Component {
  render() {
    return (
      <div className='pictureList'>
      {pics.map(pic => {
        return (
          <div key={pic}>
            <Picture image={pic} />
          </div>
        )
      })}
      </div>
    );
  }
}

export default Animals;
