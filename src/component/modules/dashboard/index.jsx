import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import ReviewCard from '../../common/card';

const Dashboard = (props) => {
  return (
    <>
      <Paper>
        <Grid
          justify='space-around' // Add it here :)
          container
          spacing={24}
        >
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Grid>
      </Paper>
    </>
  );
};

export default Dashboard;
