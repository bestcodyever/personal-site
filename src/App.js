import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cody Duskin</h1>
        <hr></hr>
        <br></br>
        <div className="navbar-link">
          <h4 className="col-md-4"><Link to="/Projects">Projects</Link></h4>
          <h4 className="col-md-4"><Link to="/">About Me</Link></h4>
          <h4 className="col-md-4"><Link to="/contact">Contact Me</Link></h4>
        </div>
      </div>
    );
  }
}

export default App;
