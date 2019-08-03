import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Activity from './Activity/Activity';
import Animals from './Animals/Animals';
import Header from './Header';

const hi = () => {
  return <div>Start Clicking</div>;
};

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={hi} />
        <Route path="/activity" exact component={Activity} />
        <Route path="/animals" exact component={Animals} />
      </BrowserRouter>
    </div>
  );
};

export default App;
