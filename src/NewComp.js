import React, { Component } from 'react'
import on from "./bulb.jpg"
import off from "./bulboff.jpg"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        msg : "Hello Kanini",
        txt: "ON",
        img:on
      }
    }
    ButtonChange = () =>
    {
      this.setState({
        msg:"BULB ON OFF",
        txt:"OFF",
        img:off
      })
    }
  render() {
    return (
      <div><h2>{this.state.msg}</h2>
      <button onClick={this.ButtonChange}>{this.state.txt}</button>
      <img src= {this.state.img} ></img>
      </div>
      
    )
  }
}

export default NewComp