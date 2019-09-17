import React from 'react';
import Picture from '../Picture';

class PictureList extends React.Component {
  render() {
    return (
      <div className="pictureList">
        {this.props.pics.map(pic => {
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

export default PictureList;
