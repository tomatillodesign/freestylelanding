import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Cards.js';
import Trips from './Trips.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to AntarcticDeals.com by <a href="https://freestyleadventuretravel.com/" target="_blank" className="fancy" rel="noopener noreferrer">Freestyle Adventure Travel</a></h1>
        </header>
          <div className="wrap">
               <h2>Check Out These Upcoming Trips!</h2>
               <Cards />
          </div>
          <footer className="footer">
               <a href="https://freestyleadventuretravel.com/" target="_blank">FREESTYLE ADVENTURE TRAVEL</a><br/>
               Gobernador Paz 866<br/>
               Ushuaia TdF, Argentina 9410<br/>
               +54 9 2901 609792<br/>
               +54 9 2901 606661<br/>
               Proyectos Fueguinos EVT - Leg. 16259
          </footer>
      </div>
    );
  }
}

export default App;
