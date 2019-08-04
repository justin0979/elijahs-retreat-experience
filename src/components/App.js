import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Activity from './Activity/Activity';
import Animals from './Animals/Animals';
import AnimalFeed from './AnimalFeed/AnimalFeed';
import Header from './Header';
import Scroll from './Scroll';

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
      <BrowserRouter>
        <Header />
        <Scroll>
          <Route path="/" exact component={hi} />
          <Route path="/elijahs-retreat-experience" exact component={hi} />
          <Route path="/elijahs-retreat-experience/activity" exact component={Activity} />
          <Route path="/elijahs-retreat-experience/animals" exact component={Animals} />
          <Route
            path="/elijahs-retreat-experience/animalfeed"
            exact
            component={AnimalFeed}
          />
        </Scroll>
      </BrowserRouter>
    </div>
  );
};

export default App;
