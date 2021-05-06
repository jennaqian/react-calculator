import React from 'react'

function Buttons(props) {
  const {displayNums} = props
  return (
    <div>
        <button className="Button" onClick={displayNums} value={"C"}>C</button>
        <button className="Button" onClick={displayNums} value={"±"}>±</button>
        <button className="Button" onClick={displayNums} value={"%"}>%</button>
        <button className="Operator" onClick={displayNums} value={"÷"}>÷</button>
        <button className="Button" onClick={displayNums} value={7}>7</button>
        <button className="Button" onClick={displayNums} value={8}>8</button>
        <button className="Button" onClick={displayNums} value={9}>9</button>
        <button className="Operator" onClick={displayNums} value={"×"}>×</button>
        <button className="Button" onClick={displayNums} value={4}>4</button>
        <button className="Button" onClick={displayNums} value={5}>5</button>
        <button className="Button" onClick={displayNums} value={6}>6</button>
        <button className="Operator" onClick={displayNums} value={"-"}>−</button>
        <button className="Button" onClick={displayNums} value={1}>1</button>
        <button className="Button" onClick={displayNums} value={2}>2</button>
        <button className="Button" onClick={displayNums} value={3}>3</button>
        <button className="Operator" onClick={displayNums} value={"+"}>+</button>
        <button className="ButtonZero" onClick={displayNums} value={0}>0</button>
        <button className="Operator" onClick={displayNums} value={"="}>=</button>
      </div>
  )
}

export default Buttons
