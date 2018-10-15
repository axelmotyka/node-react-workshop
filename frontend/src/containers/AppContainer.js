import React, { Component } from "react";
import "./AppContainer.css";
import {hot} from "react-hot-loader";
import NewRecordContainer from "./NewRecordContainer";

class AppContainer extends Component {  
  render() {
    console.log("Rendering AppContainer");
    return ( 
      <div className = "App" >
        <NewRecordContainer/>
      </div>
    );
  }
}

export default hot(module)(AppContainer);