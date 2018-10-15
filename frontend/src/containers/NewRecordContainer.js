import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

class NewRecordContainer extends Component {  
  render() {
    console.log("Rendering NewRecordContainer");
    return ( 
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="flex-start"
      spacing={16}>
        <Grid
        item
        container
        direction="row">
            <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="forename" helperText="Some important text"/>
            <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="surename" helperText="Some important text"/>
            <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="email" helperText="Some important text"/>
            </Grid>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </Grid>
    );
  }
}

//export default NewRecordContainer;
export default NewRecordContainer;