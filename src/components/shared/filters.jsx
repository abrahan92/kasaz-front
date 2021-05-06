import React, { useState } from 'react';
import { Grid, Header, Select, Segment, Button } from 'semantic-ui-react';

const Filters = () => {
  const [rooms, setRooms] = useState(0);

  const priceOptionsMin = [
    { key: '0', value: '0', text: '0€' },
    { key: '10000', value: '10000', text: '10.000€' },
    { key: '50000', value: '50000', text: '50.000€' },
    { key: '150000', value: '150000', text: '150.000€' },
  ];

  const priceOptionsMax = [
    { key: '0', value: '0', text: '0€' },
    { key: '10000', value: '10000', text: '10.000€' },
    { key: '50000', value: '50000', text: '50.000€' },
    { key: '150000', value: '150000', text: '150.000€' },
  ];
  const sizeOptionsMin = [
    { key: '0', value: '0', text: '0 mts2' },
    { key: '50', value: '50', text: '50 mts2' },
    { key: '100', value: '100', text: '100 mts2' },
    { key: '200', value: '200', text: '200 mts2' },
  ];
  const sizeOptionsMax = [
    { key: '0', value: '0', text: '0 mts2' },
    { key: '50', value: '50', text: '50 mts2' },
    { key: '100', value: '100', text: '100 mts2' },
    { key: '200', value: '200', text: '200 mts2' },
  ];

  return (
    <Segment className='filter_grid_container'>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Select placeholder='Precio mínimo' options={priceOptionsMin} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Select placeholder='Precio máximo' options={priceOptionsMax} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <Select placeholder='Tamaño mínimo' options={sizeOptionsMin} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Select placeholder='Tamaño máximo' options={sizeOptionsMax} />
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
                onClick={() => setRooms(0)}
                className={rooms === 0 ? 'active' : ''}
              >
                Todos
              </Button>
              <Button
                onClick={() => setRooms(1)}
                className={rooms === 1 ? 'active' : ''}
              >
                1+
              </Button>
              <Button
                onClick={() => setRooms(2)}
                className={rooms === 2 ? 'active' : ''}
              >
                2+
              </Button>
              <Button
                onClick={() => setRooms(3)}
                className={rooms === 3 ? 'active' : ''}
              >
                3+
              </Button>
              <Button
                onClick={() => setRooms(4)}
                className={rooms === 4 ? 'active' : ''}
              >
                4+
              </Button>
              <Button
                onClick={() => setRooms(5)}
                className={rooms === 5 ? 'active' : ''}
              >
                5+
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Filters;
