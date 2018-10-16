import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import RecordsTable from './RecordsTableComponent'

class NewRecordComponent extends Component {  
  render() {
    return ( 
      <Grid
      item
      container
      direction="row">
        <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="forename" helperText="Some important text"/>
        <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="surename" helperText="Some important text"/>
        <TextField className={'margin: theme.spacing.unit,'} inputProps={{'aria-label': 'Description',}} label="email" helperText="Some important text"/>
        <Button variant="contained" color="primary">Insert</Button>
      </Grid>
    );
  }
}

export default NewRecordComponent;