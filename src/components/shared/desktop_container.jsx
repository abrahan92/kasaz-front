import React, { useState } from 'react';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import logo from '../../images/logo.png';
import RoomCard from './room_card';
import * as R from 'ramda';
import {
  Container,
  Menu,
  Segment,
  Visibility,
  Image,
  Grid,
  Header,
} from 'semantic-ui-react';

const DesktopContainer = ({ rooms, children, media }) => {
  const [fixed, setFixed] = useState(false);

  const Media = media;

  return (
    <Media greaterThan='mobile'>
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Segment
          inverted
          textAlign='center'
          style={{
            backgroundImage: `url("${img}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: 700,
            padding: '1em 0em',
          }}
          vertical
        >
          <Menu
            fixed='top'
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container className='menu_desktop'>
              <Menu.Item as='a'>
                <Image src={logo} className='logo_mobile' />
              </Menu.Item>
              <Menu.Item position='right' style={{ color: 'black' }}>
                <h4>Viviendas</h4>
              </Menu.Item>
            </Container>
          </Menu>
          <MainHeader />
        </Segment>
      </Visibility>

      <Grid textAlign='center' className='rooms_grid'>
        <Grid.Row>
          <Header as='h1' color='black' className='rooms_header'>
            Viviendas
          </Header>
        </Grid.Row>

        <Grid.Row columns={4}>
          {R.map(
            (room) => (
              <Grid.Column key={room.id}>
                <RoomCard data={room.attributes} />
              </Grid.Column>
            ),
            rooms,
          )}
        </Grid.Row>
      </Grid>

      {/* <Segment vertical className='rooms_grid'>
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
      </Segment> */}
      {children}
    </Media>
  );
};

export default DesktopContainer;
