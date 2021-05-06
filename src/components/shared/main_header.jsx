import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';

const MainHeader = ({ mobile }) => {
  return (
    <Container text>
      <Header
        as='h1'
        content='Compra tu piso fácil y rápido'
        inverted
        style={{
          color: 'rgb(72, 72, 72)',
          fontFamily: 'raleway-black, sans-serif',
          fontSize: mobile ? '2em' : '4em',
          fontWeight: '900',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Button
        primary
        size='huge'
        style={{
          boxShadow: 'rgb(0 0 0 / 16%) 0px 3px 6px',
          fontFamily: 'raleway-black, sans-serif',
          marginTop: mobile ? '0.5em' : '1.5em',
          fontSize: '17px',
          width: '50%',
          padding: '2%',
          backgroundColor: 'white',
          border: '1px solid rgb(113, 86, 164)',
          color: 'rgb(113, 86, 164)',
        }}
      >
        Encontrar viviendas en venta
      </Button>
      <Header
        as='h2'
        content='Disfruta de la experiencia de elegir tu hogar'
        inverted
        style={{
          color: 'rgb(113, 86, 164)',
          fontFamily: 'raleway-black, sans-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
    </Container>
  );
};

export default MainHeader;
