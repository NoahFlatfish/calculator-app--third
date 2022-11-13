import React from 'react';

import { useState } from 'react';


function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCal = (val: string) => {
    if (
      (ops.includes(val) && cal === '') ||( ops.includes(val) && ops.includes(cal.slice(-1)))
    ) {
      return;
    }
    setCal(cal + val)
    if (!ops.includes(val)) {
      setResult(eval(cal + val).toString());
    }
  }

  const createDigits = () => {
    const digits =[];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCal(i.toString())} key={i}> 
          {i} 
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCal(eval(cal).toString());
  }

  const deleteVal = () => {
    if (cal === '') {
      return;
    } 
    const val = cal.slice(0, -1);
    setCal(val);
    setResult(result)
  }


  const clearVal = () => {
    if (cal === '') {
      return;
    } 
    setCal("")
    setResult("")
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         {result ? <span> ({result}) </span> : '' }&nbsp;
         {cal || "0"}
        </div>
        <div className = "operators">
          <button onClick={clearVal}>AC</button> 
          <button onClick={deleteVal}>C</button> 
        </div>
        <div className = "operators">
          <button onClick={() => updateCal('/')}>/</button> 
          <button onClick={() => updateCal('*')}>*</button> 
          <button onClick={() => updateCal('+')}>+</button> 
          <button onClick={() => updateCal('-')}>-</button> 
        </div>
        <div className= "digits">
          { createDigits() }
          <button onClick={() => updateCal('0')} >0</button>
          <button onClick={() => updateCal('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
