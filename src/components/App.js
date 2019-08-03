import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Activity from './Activity/Activity';
import Animals from './Animals/Animals';
import AnimalFeed from './AnimalFeed/AnimalFeed';
import Header from './Header';
import Scroll from './Scroll';

const hi = () => {
  return <div><h1>Home Page</h1>
    <p>This page is under construction</p>
    <p>The Activity and Animal links do have pictures though.</p></div>;
};

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Scroll>
          <Route path="/elijahs-retreat-experience" exact component={hi} />
          <Route path="/elijahs-retreat-experience/activity" exact component={Activity} />
          <Route path="/elijahs-retreat-experience/animals" exact component={Animals} />
          <Route path="/elijahs-retreat-experience/animalfeed" exact component={AnimalFeed} />
        </Scroll>
      </BrowserRouter>
    </div>
  );
};

export default App;
