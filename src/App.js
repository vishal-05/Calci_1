import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleOperatorClick = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="App">
          <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleClearClick()}>C</button>
            <button onClick={() => handleEqualClick()}>=</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
