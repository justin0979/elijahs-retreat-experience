import React from 'react';
import './Activity.scss';
import Picture from '../Picture';
import activity1 from './ActivityPics/activity-1.jpg';
import activity2 from './ActivityPics/activity-2.jpg';
import activity3 from './ActivityPics/activity-3.jpg';
import activity4 from './ActivityPics/activity-4.jpg';
import activity5 from './ActivityPics/activity-5.jpg';
import activity6 from './ActivityPics/activity-6.jpg';
import activity7 from './ActivityPics/activity-7.jpg';
import activity8 from './ActivityPics/activity-8.jpg';
import activity9 from './ActivityPics/activity-9.jpg';
import activity10 from './ActivityPics/activity-10.jpg';
import activity11 from './ActivityPics/activity-11.jpg';

const pics = [
  activity1,
  activity2,
  activity3,
  activity4,
  activity5,
  activity6,
  activity7,
  activity8,
  activity9,
  activity10,
  activity11
];

class Activity extends React.Component {
  render() {
    return (
      <div className="pictureList">
        {pics.map(pic => {
          return (
            <div key={pic}>
              <Picture image={pic} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Activity;
