import React from 'react'

function Keypad(props) {
  const {wipeItOut, displayNums, displayOperators, displayResult, posOrNeg} = props
  return (
    <div>
        <button className="TopButton" onClick={posOrNeg} value={"±"}>±</button>
        <button className="TopButton" onClick={wipeItOut} value={"Clear"}>Clear</button>
        
        <button className="Operator" onClick={displayOperators} value={"+"}>+</button>
        <button className="Operator" onClick={displayOperators} value={"-"}>−</button>
        <button className="Operator" onClick={displayOperators} value={"×"}>×</button>
        <button className="Operator" onClick={displayOperators} value={"÷"}>÷</button>
        
        <button className="Button" onClick={displayNums} value={9}>9</button>
        <button className="Button" onClick={displayNums} value={8}>8</button>
        <button className="Button" onClick={displayNums} value={7}>7</button>
        <button className="Button" onClick={displayNums} value={6}>6</button>
        <button className="Button" onClick={displayNums} value={5}>5</button>
        <button className="Button" onClick={displayNums} value={4}>4</button>
        <button className="Button" onClick={displayNums} value={3}>3</button>
        <button className="Button" onClick={displayNums} value={2}>2</button>
        <button className="Button" onClick={displayNums} value={1}>1</button>
        <button className="ButtonZero" onClick={displayNums} value={0}>0</button>

        <button className="Equal" onClick={displayResult} value={"="}>=</button>
      </div>
  )
}

export default Keypad;
