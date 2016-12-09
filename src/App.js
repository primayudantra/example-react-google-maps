import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './Maps'
import './App.css';

class App extends Component {
  render() {
    const location = {
        lat: -6.243167,
        lng: 106.843776
    }
    return (
      <div>
        <div className="App">
          <h1> React Google Maps </h1>
        </div>
        <div style={{width:'100%', height:500,background:'grey'}}>
          <Map center={location} />
        </div>
      </div>
    );
  }
}

export default App;
