
import React, { Component } from 'react'
import "./App.css";
import Keypad from "./Keypad.js";
import Display from "./Display.js";
import { add, parse } from 'mathjs';
// import math from "mathjs";

export class App extends Component {
  constructor() {
    super()

    this.state = {
      display: "0",
      prevDisplay: null,
      operation: "",
    }
  }

  
  displayNums = (e) => {
    let v = e.target.value
    this.setState ({
      display: (this.state.display).concat(v)
    })
    // console.log(v)

    // This if/else chain is an excellent place for a switch statement.
    // (Look them up if you're not familiar with the syntax.)
    // You can use them whenever you are comparing one value (`v` in this case)
    // against a set number of possible values (`Clear`, `%`, etc.).
    // For that one use case (and that one use case alone!) they really make your
    // code cleaner and easier to read.
      if(v === "Clear"){
        this.setState({
          display: "0",
          prevDisplay: null,
          operation: "",
        })
        return
      } 
      if(v === "±"){
        this.setState({
          display: ((this.state.display * -1).toString()), 
          prevDisplay: this.state.display,
        })
        return
      }
      if(v === "%"){
        this.setState({
          display: ((this.state.display / 100).toString()), 
          prevDisplay: this.state.display,
        })
        return
      }
      if(v === "="){
        if(!this.state.operation) 
        return
        if(this.state.operation === "+") {
          this.setState({
            display:(this.state.prevDisplay + parseFloat(v)).toString()
          })
        }
      }
      if(v === "+"){
        if(this.state.operation !== null){
          if(this.state.operation === "+"){
            this.setState ({
              display: this.state.prevDisplay + parseFloat(v)
            })
          }
        }
      }
    
  }

  
  render() {
    return (
      <div className="app">
        <div className="display-container">
          <Display display={this.state.display}/>
        </div>
        <div className="buttons">
          <Keypad displayNums={this.displayNums}/>
        </div>
    </div>
    )
  }
}

export default App;
