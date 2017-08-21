import React, { Component } from 'react'
import '../App.css'

export default class Projects extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-6">
        <h4>Outdoor Activities</h4>
        <p>Web application that gives you an activity based on the weather in the input city..
        </p>
        </div>
        <div className="col-md-6">
        <h4>Odin Task Manager</h4>
        <p>A project manager to tackle all your project planning.
        </p>
        </div>
      </div>
    )
  }
}
