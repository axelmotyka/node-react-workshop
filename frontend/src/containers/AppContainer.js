import React, { Component } from "react";
import "./AppContainer.css";
import RecordsContainer from "./RecordsContainer";

class AppContainer extends Component {  
  render() {
    console.log("Rendering AppContainer");
    return ( 
      <div className = "App" >
        <RecordsContainer/>
      </div>
    );
  }
}

export default AppContainer;