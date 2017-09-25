import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import README from './README.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Patchwork</h2>
        </div>
        <p className="App-intro">
          Bringing you the jerseys you have been wishing for at the prices you have been begging for
        </p>
        <img src={README}  />

      </div>
    );
  }
}

export default App;
