import React, { Component } from "react";
import "./App.css";
import {hot} from "react-hot-loader";

class App extends Component {
  bla() {
    console.log("bla");
  }
  render() {
    console.log("hello");
    return ( 
      <div className = "App" >
      <h1>Hello, World!</h1> 
      </div>
    );
  }
}

export default hot(module)(App);