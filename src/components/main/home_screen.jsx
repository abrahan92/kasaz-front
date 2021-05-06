import React, { useState, useEffect } from 'react';
import ResponsiveContainer from '../shared/responsive_container';
import { Grid, Segment, Header } from 'semantic-ui-react';
import RoomCard from './room_card';
import { roomService } from '../../services/room_service';
import * as R from 'ramda';

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomService
      .get_rooms()
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        setRooms([]);
      });
  }, []);

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
                  <RoomCard data={room.attributes} />
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
