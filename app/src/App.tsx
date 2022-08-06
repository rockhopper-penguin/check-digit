import React from 'react';
import './App.css';
import { CheckDigit } from './checkDigit';

function App() {
  const CheckDigitElement = () => {
    const cd = new CheckDigit
    const mod10 = cd.mod10()

    return (
      <p>{ mod10 }</p>
    )
  }

  return (
    <div className="App">
      <CheckDigitElement />
    </div>
  );
}

export default App;
