import React, { useState } from 'react';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import logo from '../../images/logo.png';
import Filters from './filters';
import RoomCard from './room_card';
import Loading from './loading';
import EmptyRooms from '../shared/empty_rooms';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterState } from '../../redux/actions';
import * as R from 'ramda';
import {
  Container,
  Menu,
  Segment,
  Icon,
  Sidebar,
  Image,
  Search,
  Header,
  Grid,
} from 'semantic-ui-react';

const MobileContainer = ({ rooms, children, media }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.baseReducer);
  const { filters } = useSelector((state) => state.propertyReducer);
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const Media = media;

  const setOpen = (value) => {
    let baseFilters = filters;
    baseFilters = {
      ...baseFilters,
      opened: value,
    };
    dispatch(setFilterState(baseFilters));
  };

  return (
    <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Viviendas
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{
              minHeight: 350,
              padding: '1em 0em',
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            vertical
          >
            <Container className='mobile_top_grid'>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='left'>
                  <Image src={logo} className='logo_mobile' />
                </Menu.Item>
              </Menu>
            </Container>
            <Grid className='filter_grid'>
              <Grid.Column width={12}>
                <Search
                  placeholder='Buscar ciudad'
                  className='search_filter'
                  loading={false}
                />
              </Grid.Column>
              <Grid.Column width={4} className='filter_toggle'>
                <h4 onClick={() => setOpen(!filters.opened)}>
                  Filtros{' '}
                  <Icon
                    className='filter_icon'
                    name={filters.opened ? 'chevron up' : 'chevron down'}
                  />
                </h4>
              </Grid.Column>
            </Grid>
            {filters.opened && <Filters />}
            <MainHeader mobile />
          </Segment>

          <Segment vertical className='rooms_grid'>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row textAlign='center'>
                <Grid.Column>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Viviendas
                  </Header>
                </Grid.Column>
              </Grid.Row>

              {loading ? (
                <Loading />
              ) : R.isEmpty(rooms) ? (
                <EmptyRooms />
              ) : (
                R.map(
                  (room) => (
                    <Grid.Row key={room.id}>
                      <Grid.Column>
                        <RoomCard data={room.attributes} />
                      </Grid.Column>
                    </Grid.Row>
                  ),
                  rooms,
                )
              )}
            </Grid>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

export default MobileContainer;
