import React from 'react';
import './App.css';
import logo from './assets/logo.png'; 

import Films from './components/Films'; 

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <img className="logo" src={logo} alt="studio ghibli official logo"/>
        <h1>Discover and Explore!</h1>
        <Films />
      </div>
    </div>
  );
}

export default App;
