import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span id="counter" onClick={() => setCounter(counter + 1)}>
          Counter counts {counter}
        </span>
      </header>
    </div>
  );
}

export default App;
