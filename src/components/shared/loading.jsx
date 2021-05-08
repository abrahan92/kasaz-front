import React from 'react';
import { Loader, Segment } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Segment style={{ border: 'none' }}>
      <Loader active inline='centered'>
        Cargando...
      </Loader>
    </Segment>
  );
};

export default Loading;
