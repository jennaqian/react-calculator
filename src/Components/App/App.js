
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
