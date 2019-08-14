import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Scroll from './Scroll';
import PictureList from './PictureList/PictureList';
import history from '../history';

import activityPics from './imageArrays/activityPicsArr';
import animalPics from './imageArrays/animalPicsArr';
import animalFeedPics from './imageArrays/animalFeedArr.js';

import entryPic from './erePictures/entry.jpg';

const hi = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <img alt="Entry Sign" src={entryPic} />
      <p>This page is under construction</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Header />
        <Scroll>
          <Route path="/" exact component={hi} />
          <Route path="/elijahs-retreat-experience" exact component={hi} />
          <Route
            path="/elijahs-retreat-experience/activity"
            exact
            render={props => <PictureList {...props} pics={activityPics} />}
          />
          <Route
            path="/elijahs-retreat-experience/animals"
            exact
            render={props => <PictureList {...props} pics={animalPics} />}
          />
          <Route
            path="/elijahs-retreat-experience/animalfeed"
            exact
            render={props => <PictureList {...props} pics={animalFeedPics} />}
          />
        </Scroll>
      </HashRouter>
    </div>
  );
};

export default App;
