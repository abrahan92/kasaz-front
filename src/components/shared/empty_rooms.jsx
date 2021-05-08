import React from 'react';
import { useDispatch } from 'react-redux';
import { getProperties } from '../../redux/actions';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

const EmptyRooms = () => {
  const dispatch = useDispatch();
  const cleanFilters = () => {
    dispatch(getProperties());
  };

  return (
    <Segment placeholder style={{ border: 'none' }}>
      <Header icon>
        <Icon name='warning sign' />
        Tu búsqueda no ha encontrado ningun resultado
      </Header>
      <Button
        onClick={() => cleanFilters()}
        className='btn_clean_filters'
        primary
      >
        Limpiar filtros
      </Button>
    </Segment>
  );
};

export default EmptyRooms;
