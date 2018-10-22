import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NewRecordComponent from '../components/NewRecordComponent';
import RecordsTableComponent from '../components/RecordsTableComponent';
import NewsCard from '../components/NewsCard';

class RecordsContainer extends Component {
  render() {
    console.log('Rendering NewRecordContainer');
    var myArray = [1, 2, 3, 4, 5];

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        spacing={16}>
        <NewRecordComponent />
        <RecordsTableComponent />
        {myArray.map(item =>
          <NewsCard title="MYTITLE" />)}
      </Grid>
    );
  }
}

export default RecordsContainer;
