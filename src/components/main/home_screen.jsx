import React from 'react';
import ResponsiveContainer from '../shared/responsive_container';
import { Grid, Segment, Header } from 'semantic-ui-react';
import RoomCard from './room_card';
import * as R from 'ramda';
import { data } from 'jquery';

const HomeScreen = () => {
  const rooms = [
    {
      id: 1,
      title: 'Piso exterior y en buen estado con ascensor en Sant Marti',
      price: 280000,
      sqm: 185,
      bedrooms: 3,
      bathrooms: 4,
    },
  ];

  return (
    <ResponsiveContainer>
      <Segment vertical className='rooms_grid'>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row textAlign='center'>
            <Grid.Column>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Viviendas
              </Header>
            </Grid.Column>
          </Grid.Row>

          {R.map(
            (room) => (
              <Grid.Row key={room.id}>
                <Grid.Column>
                  <RoomCard data={room} />
                </Grid.Column>
              </Grid.Row>
            ),
            rooms,
          )}
        </Grid>
      </Segment>
    </ResponsiveContainer>
  );
};

export default HomeScreen;
