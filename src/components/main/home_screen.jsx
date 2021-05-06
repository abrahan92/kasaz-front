import React from 'react';
import ResponsiveContainer from '../shared/responsive_container';
import { Grid, Segment } from 'semantic-ui-react';

const HomeScreen = () => {
  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>
    </ResponsiveContainer>
  );
};

export default HomeScreen;
