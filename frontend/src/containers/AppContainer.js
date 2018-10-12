import React, { Component } from "react";
import "./AppContainer.css";
import {hot} from "react-hot-loader";

class AppContainer extends Component {
  render() {
    console.log("hello");
    return ( 
      <div className = "App" >
      <h1>Hello, World!</h1> 
      </div>
    );
  }
}

export default hot(module)(AppContainer);