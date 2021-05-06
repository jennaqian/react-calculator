
import React, { Component } from 'react'
import "./App.css";
import Buttons from "./Buttons.js";
import Display from "./Display.js";

export class App extends Component {
  constructor() {
    super()

    this.state = {
      display: "",
      prevDisplay: null,
      operation: "",
    }
  }

  displayNums = (e) => {
    this.setState ({
      display: (this.state.display).concat(e.target.value)
    })
    console.log(this.state.display)
  }

  
  render() {
    return (
      <div className="app">
        <div className="display-container">
          <Display display={this.state.display}/>
        </div>
        <div className="buttons">
          <Buttons displayNums={this.displayNums}/>
        </div>
    </div>
    )
  }
}

export default App
