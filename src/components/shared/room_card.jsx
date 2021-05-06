import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

const RoomCard = ({ data }) => {
  const extra = (
    <Button.Group style={{ width: '100%' }}>
      <Button>
        <Icon name='check' />
        {data.sqm} m2
      </Button>
      <Button.Or />
      <Button>
        <Icon name='bed' />
        {data.bedrooms}
      </Button>
      <Button.Or />
      <Button>
        <Icon name='bath' />
        {data.bathrooms}
      </Button>
    </Button.Group>
  );

  return (
    <Card
      className='room_card'
      image={data.picture}
      header={`${data.price} €`}
      meta={`${Math.round(data.price / data.sqm)} €/m2`}
      description={data.title}
      extra={extra}
    />
  );
};

export default RoomCard;
