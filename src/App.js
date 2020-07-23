import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from '../src/components/toggle';
import ToggleChildren from '../src/components/toggleChildren';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle 
          render={
            ({ isVisible, toggle}) => (
              <div>
                {isVisible && <h3> Hide N Seek </h3>}
                <button onClick={() => toggle(!isVisible)}> Show Hide</button>
              </div>
            )
          }
        />
        <ToggleChildren>
          {
            ({ isVisible, toggle}) => (
              <div>
                {isVisible && <h3> Children Toggle </h3>}
                <button onClick={() => toggle(!isVisible)}> Show Hide</button>
              </div>
            )
          }
        </ToggleChildren>
      </header>
    </div>
  );
}

export default App;
