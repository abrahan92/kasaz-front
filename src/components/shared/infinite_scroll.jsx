import React from 'react';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { Segment, Header, Grid, Button } from 'semantic-ui-react';
import { roomService } from '../../services/room_service';
import Loading from './loading';
import RoomCard from './room_card';
import EmptyRooms from './empty_rooms';
import {
  setPropertiesState,
  setPropertiesFilteredState,
  setCurrentPageState,
  setNextPageState,
} from '../../redux/actions';

const InfiniteScroll = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.baseReducer);
  const { current_page, next_page, properties_filtered, filters } = useSelector(
    (state) => state.propertyReducer,
  );

  const checkIfExist = (properties) => {
    return R.filter((property) => {
      return !R.find(R.propEq('id', property))(properties_filtered);
    }, properties);
  };

  const loadMore = () => {
    let baseProperties = properties_filtered;

    roomService
      .get_rooms(next_page)
      .then((res) => {
        const new_properties = checkIfExist(res.data);

        if (!R.isNil(new_properties) && !R.isEmpty(new_properties)) {
          baseProperties = R.insertAll(
            baseProperties.length,
            new_properties,
            baseProperties,
          );
          dispatch(setCurrentPageState(current_page + 1));
          dispatch(setNextPageState(next_page + 1));
          dispatch(setPropertiesState(baseProperties));
          dispatch(setPropertiesFilteredState(baseProperties));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Segment vertical id='rooms_grid' className='rooms_grid'>
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
        ) : R.isEmpty(properties_filtered) ? (
          <EmptyRooms />
        ) : (
          <>
            {R.map(
              (room) => (
                <Grid.Row key={room.id}>
                  <Grid.Column>
                    <RoomCard data={room.attributes} />
                  </Grid.Column>
                </Grid.Row>
              ),
              properties_filtered,
            )}
            {current_page < filters.page_count && (
              <Grid.Row textAlign='center'>
                <Grid.Column>
                  <Button
                    onClick={() => loadMore()}
                    className='btn_clean_filters'
                    primary
                  >
                    Cargar más
                  </Button>
                </Grid.Column>
              </Grid.Row>
            )}
          </>
        )}
      </Grid>
    </Segment>
  );
};

export default InfiniteScroll;
