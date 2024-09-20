
// import { Outlet, Route, Routes } from 'react-router-dom';
// import '../css/App.css';
// import React from 'react';

// function App() {
//   return (
//     <>
//       {/* <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path='*' element={<Login />} />
//       </Routes> */}
//       hi there
//     </>
//   );
// }

// export default App;




// src/App.jsx
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
