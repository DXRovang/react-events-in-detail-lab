// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component{

  handleButton(e){
  let array = [e.clientX, e.clientY]
  this.props.onReceiveCoordinates(array)
  }

  render(){
    return(
      <button onClick={this.handleButton.bind(this)}>Click me</button>
    )
  }
}