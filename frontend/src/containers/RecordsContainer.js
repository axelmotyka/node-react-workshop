import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewRecordComponent from "../components/NewRecordComponent";
import RecordsTableComponent from "../components/RecordsTableComponent";

class RecordsContainer extends Component {  
  render() {
    console.log("Rendering NewRecordContainer");
    return ( 
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      spacing={16}>
        <NewRecordComponent/>
        <RecordsTableComponent/>
        </Grid>
    );
  }
}

export default RecordsContainer;