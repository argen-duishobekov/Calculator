import React from 'react'
import '../styles/index.css'

export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: '',
            num2: '',
            result: 0
          
        }
    }
    
    handlenum1 = (e) => {
        this.setState({
            num1:e.target.value
        })
    }
    handlenum2 = (e) => {
        this.setState({
            num2:e.target.value
        })
    }
    onPlus = () => {
        this.setState(() => ({result: parseInt(this.state.num1) + parseInt(this.state.num2)}))
    }
    onMinus = () => {
        this.setState(() => ({result: parseInt(this.state.num1) - parseInt(this.state.num2)}))
    }
    onMult = () => {
        this.setState(() => ({result: parseInt(this.state.num1) * parseInt(this.state.num2)}))
    }
    onDivis = () => {
        this.setState(() => ({result: parseInt(this.state.num1) / parseInt(this.state.num2)}))
    }
    render() {
        return <div>
                 <h1>Calculator</h1>

                 Number:1
                 <div>
                   <input type="number" value={this.state.num1} onChange={this.handlenum1}/>
                 </div>
                  Number:2
                  <div>
                     <input type="number" value={this.state.num2} onChange={this.handlenum2}/>
                  </div>
                  <div className="btn">
                  <button className="btnOne"  onClick={this.onPlus}>+</button>
                  <button className="btnTwo" onClick={this.onMinus}>-</button>
                  <button className="btnThree" onClick={this.onMult}>*</button>
                  <button className="btnFour" onClick={this.onDivis}>/</button> 
                  </div>
                  
                  
                  
                  
                  <h1 className="res">{this.state.result}</h1>
                         
             </div>
    }
}    