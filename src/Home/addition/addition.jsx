import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from 'primereact/button';

function App() {
  const ops = ["+"]
  
  const [numberOne, setNumberOne] = useState();
  const [numberTwo, setNumberTwo] = useState();
  const [results, setResult] = useState();

  const multiply = () => {
setResult(numberOne+numberTwo)

  }

  const handleChange = (par1) => {
    if (par1.id === 'num1') {
      setNumberOne(Number(par1.value))
    } else {
      setNumberTwo(Number(par1.value))
    }
  }

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
            <br />
            </a>
            <p>your number is {results}</p>
            <input type='number' onChange={(e) => handleChange(e.target)} value={numberOne} id='num1'></input>
            <label  id='num1' htmlFor='num1'></label>
            <input type='number' onChange={(e) => handleChange(e.target)} value={numberTwo} id='num2'></input>
            <label id='num2' htmlFor='num2'/>

            <Button onClick={multiply}>Click me</Button>
            
      </header>
    </div>
  )
}

export default addition;
