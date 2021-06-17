
import React, { Component } from 'react'
import "./App.css";
import Keypad from "./Keypad.js";
import Display from "./Display.js";

export class App extends Component {
  constructor() {
    super()

    this.state = {
      display: "0",
      operation: "",
      firstNum: "",
      nextNum: "",
    }
  }
  
  displayNums = (e) => {
    let v = e.target.value
    if(!this.state.operation){
      if(this.state.display === "0"){
        this.setState ({
          firstNum: v,
          display: v,
        }) 
      } else {
        this.setState ({
          firstNum: this.state.firstNum.concat(v),
          display: this.state.firstNum.concat(v),
        }) 
      }
    } else {
        if(this.state.firstNum && !this.state.nextNum){
          this.setState ({
            nextNum: v,
            display: v,
          }) 
        } else {
          this.setState ({
            nextNum: this.state.nextNum + v,
            display: this.state.nextNum + v,
          }) 
        }
    }
  }

  displayOperators = (e) => {
    let v = e.target.value
    if(this.state.display !== "0") {
      this.setState({
        operation: v
      })
    } 
  }

  displayResult = () => {
    this.variable = 0
    if(this.state.nextNum){
      switch (this.state.operation) {
        case "+": this.variable = parseInt(this.state.firstNum) + parseInt(this.state.nextNum)
          this.setState({
            display: this.variable,
          })
          break;

        case "-": this.variable = parseInt(this.state.firstNum) - parseInt(this.state.nextNum)
        this.setState({
          display: this.variable,
        })
          break;
      
        case "×": this.variable = parseInt(this.state.firstNum) * parseInt(this.state.nextNum)
          this.setState({
            display: this.variable,
          })
          break;

        case "÷": this.variable = Math.round(parseInt(this.state.firstNum) / parseInt(this.state.nextNum))
          this.setState({
            display: this.variable,
          })
          break;

        default: console.log("Please try again!")
          break;
      }
      this.setState({
        operation: "",
        firstNum: this.variable,
        nextNum: 0,
      })
  }
}

  wipeItOut = () => {
    this.setState({
      display: "0",
      operation: "",
      firstNum: "",
      nextNum: "",
    })
  }

  posOrNeg = () => {
    if(!this.state.nextNum && this.state.display !== "0"){
      this.setState({
        firstNum: parseInt(this.state.firstNum) * -1,
        display: this.state.firstNum * -1,
      })
    } else if (this.state.nextNum) {
      this.setState ({
        nextNum: this.state.nextNum * -1,
        display: this.state.nextNum * -1,
      })
    }
  }
  
  render() {
    return (
      <div className="app">
        <div className="display-container">
          <Display display={this.state.display}/>
        </div>
        <div className="buttons">
          <Keypad posOrNeg={this.posOrNeg} displayNums={this.displayNums} displayOperators={this.displayOperators} displayResult={this.displayResult} wipeItOut={this.wipeItOut}/>
        </div>
    </div>
    )
  }
}

export default App;
