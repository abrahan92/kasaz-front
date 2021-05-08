import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Header, Select, Segment, Button } from 'semantic-ui-react';
import { setFilterState } from '../../redux/actions';
import * as R from 'ramda';

const Filters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.propertyReducer);

  const setFilters = (key, value) => {
    let baseFilters = filters;
    baseFilters = {
      ...baseFilters,
      [key]: value,
    };
    dispatch(setFilterState(baseFilters));
  };

  const cleanFilters = () => {
    let baseFilters = {
      ...filters,
      min_price: null,
      max_price: null,
      min_size: null,
      max_size: null,
      rooms: null,
    };
    dispatch(setFilterState(baseFilters));
  };

  const setMinPrice = (e, target) => {
    setFilters('min_price', target.value);
  };

  const setMaxPrice = (e, target) => {
    setFilters('max_price', target.value);
  };

  const setMinSize = (e, target) => {
    setFilters('min_size', target.value);
  };

  const setMaxSize = (e, target) => {
    setFilters('max_size', target.value);
  };

  return (
    <Segment className='filter_grid_container'>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Select
              onChange={setMinPrice}
              placeholder='Precio mínimo'
              options={filters.prices}
              value={filters.min_price || 0}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Select
              onChange={setMaxPrice}
              placeholder='Precio máximo'
              options={filters.prices}
              value={filters.max_price || 0}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Select
              onChange={setMinSize}
              placeholder='Tamaño mínimo'
              options={filters.sizes}
              value={filters.min_size || 0}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Select
              onChange={setMaxSize}
              placeholder='Tamaño máximo'
              options={filters.sizes}
              value={filters.max_size || 0}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Header as='h2' color='black'>
              Habitaciones
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' className='rooms_selector'>
          <Grid.Column>
            <Button.Group>
              <Button
                onClick={() => setFilters('rooms', 0)}
                className={
                  filters.rooms === 0 || R.isNil(filters.rooms) ? 'active' : ''
                }
              >
                Todos
              </Button>
              <Button
                onClick={() => setFilters('rooms', 1)}
                className={filters.rooms === 1 ? 'active' : ''}
              >
                1+
              </Button>
              <Button
                onClick={() => setFilters('rooms', 2)}
                className={filters.rooms === 2 ? 'active' : ''}
              >
                2+
              </Button>
              <Button
                onClick={() => setFilters('rooms', 3)}
                className={filters.rooms === 3 ? 'active' : ''}
              >
                3+
              </Button>
              <Button
                onClick={() => setFilters('rooms', 4)}
                className={filters.rooms === 4 ? 'active' : ''}
              >
                4+
              </Button>
              <Button
                onClick={() => setFilters('rooms', 5)}
                className={filters.rooms === 5 ? 'active' : ''}
              >
                5+
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Button className='btn_search_room' primary>
              Ver inmuebles
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column>
            <Button
              onClick={() => cleanFilters()}
              className='btn_clean_filters'
              primary
            >
              Limpiar filtros
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Filters;
