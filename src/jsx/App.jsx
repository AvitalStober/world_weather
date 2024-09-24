
import React from 'react';
import Weather from './Weather';
import '../css/App.css';

const App = () => {

  return (

    <div>
      <h1 className='header'>מזג אוויר</h1>
      <div className="weather-container">
        <Weather city="Eilat" />
        <Weather city="London" />
        <Weather city="New York" />
        <Weather city="Alaska" />
      </div>
    </div>

  );
};

export default App;
