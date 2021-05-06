import React, { useState } from 'react';
import { createMedia } from '@artsy/fresnel';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';

const DesktopContainer = ({ children }) => {
  const [fixed, setFixed] = useState(false);

  const { Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

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
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as='a'
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: '0.5em' }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <MainHeader />
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
};

export default DesktopContainer;
