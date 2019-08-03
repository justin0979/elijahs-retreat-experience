import React from 'react';
import Picture from '../Picture';
import animalFeed1 from './animalsFeedPics/animal-feed-1.jpg';
import animalFeed2 from './animalsFeedPics/animal-feed-2.jpg';
import animalFeed3 from './animalsFeedPics/animal-feed-3.jpg';
import animalFeed4 from './animalsFeedPics/animal-feed-4.jpg';
import animalFeed5 from './animalsFeedPics/animal-feed-5.jpg';
import animalFeed6 from './animalsFeedPics/animal-feed-6.jpg';
import animalFeed7 from './animalsFeedPics/animal-feed-7.jpg';

const pics = [
  animalFeed1,
  animalFeed2,
  animalFeed3,
  animalFeed4,
  animalFeed5,
  animalFeed6,
  animalFeed7
]

class AnimalFeed extends React.Component {
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
    )
  }
}

export default AnimalFeed
