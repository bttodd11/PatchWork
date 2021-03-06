import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ph from './ph.png_256';

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

        <div>
          <h6>70's Top Three</h6>
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
      </div>
      <div>
        <h6>80's Top Three </h6>
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
      </div>
      <div>
        <h6>90's Top Three </h6>
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
      </div>
      <div>
        <h6>00's Top Three </h6>
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
        <img className='product' src ={ph} />
      </div>
       </div>
    );
  }
}

export default App;
