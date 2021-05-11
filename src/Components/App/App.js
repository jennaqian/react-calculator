
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
    }
    this.firstNum = ""
    this.nextNum = ""

  }


  
  displayNums = (e) => {
    let v = e.target.value
    if(!this.state.operation){
      if(this.state.display === "0"){
        this.firstNum = v
        this.setState ({
          // firstNum: v,
          display: new Intl.NumberFormat("en").format(this.firstNum),
        }) 
      } else {
        this.firstNum = this.firstNum + v
        this.setState ({
          // firstNum: this.state.firstNum.concat(v),
          display: new Intl.NumberFormat("en").format(this.firstNum),
        }) 
      }
    } else {
        if(this.state.display === "0" || (this.firstNum && !this.nextNum)){
          this.nextNum = v
          this.setState ({
            // firstNum: v,
            display: new Intl.NumberFormat("en").format(this.nextNum),
          }) 
        } else {
          this.nextNum = this.nextNum + v
          this.setState ({
            // firstNum: this.state.firstNum.concat(v),
            display: new Intl.NumberFormat("en").format(this.nextNum),
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
    if(this.nextNum){
      switch (this.state.operation) {
        case "+": this.variable = parseInt(this.firstNum) + parseInt(this.nextNum)
          this.setState({
            display: new Intl.NumberFormat("en").format(this.variable),
          })
          break;

        case "-": this.variable = parseInt(this.firstNum) - parseInt(this.nextNum)
        this.setState({
          display: new Intl.NumberFormat("en").format(this.variable),
        })
          break;
      
        case "×": this.variable = parseInt(this.firstNum) * parseInt(this.nextNum)
          this.setState({
            display: new Intl.NumberFormat("en").format(this.variable),
          })
          break;

        case "÷": this.variable = parseInt(this.firstNum) / parseInt(this.nextNum)
          this.setState({
            display: new Intl.NumberFormat("en").format(this.variable),
          })
          break;

        default: console.log("Please try again!")
          break;
      }
      this.setState({
        operation: "",
      })
      this.firstNum = this.variable
      this.nextNum = 0
    }
  }

  wipeItOut = () => {
    this.setState({
      display: "0",
      operation: "",
    })
    this.firstNum = ""
    this.nextNum = ""
  }

  posOrNeg = () => {
    if(!this.nextNum && this.state.display !== "0"){
      this.firstNum = parseInt(this.firstNum) * -1
      this.setState({
        display: new Intl.NumberFormat("en").format(this.firstNum)
      })
    } else if (this.nextNum) {
      this.nextNum = this.nextNum * -1
      this.setState ({
        display: new Intl.NumberFormat("en").format(this.nextNum)
      })
    }
  }

  //     if(v === "Clear"){
  //       this.setState({
  //         display: "0",
  //         prevDisplay: null,
  //         operation: "",
  //       })
  //       return
  //     } 
  //     if(v === "±"){
  //       this.setState({
  //         display: ((this.state.display * -1).toString()), 
  //         prevDisplay: this.state.display,
  //       })
  //       return
  //     }
  //     if(v === "%"){
  //       this.setState({
  //         display: ((this.state.display / 100).toString()), 
  //         prevDisplay: this.state.display,
  //       })
  //       return
  //     }
  //     if(v === "="){
  //       if(!this.state.operation) 
  //       return
  //       if(this.state.operation === "+") {
  //         this.setState({
  //           display:(this.state.prevDisplay + parseFloat(v)).toString()
  //         })
  //       }
  //     }
  //     if(v === "+"){
  //       if(this.state.operation !== null){
  //         if(this.state.operation === "+"){
  //           this.setState ({
  //             display: this.state.prevDisplay + parseFloat(v)
  //           })
  //         }
  //       }
  //     }
    
  // }

  
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
