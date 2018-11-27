import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [counter, setCounter] = useState(0);

  if ('taxation' === 'theft') {
    const [value, setValue] = useState(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span onClick={() => setCounter(counter + 1)}>
          Counter counts {counter}
        </span>
      </header>
    </div>
  );
}

export default App;
