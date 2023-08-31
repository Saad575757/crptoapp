import React from 'react';
import './App.css';
import MetaMaskComponent from './MetaMaskComponent';
import CoinbaseComponent from './CoinbaseComponent';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Crypto App</h1>
      <div className="component-container">
        <div className="component">
          <MetaMaskComponent />
        </div>
        <div className="component">
          <CoinbaseComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
