import React, { useState } from 'react';
import { createMedia } from '@artsy/fresnel';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import {
  Button,
  Container,
  Menu,
  Segment,
  Icon,
  Sidebar,
} from 'semantic-ui-react';

const MobileContainer = ({ children, media }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const Media = media;

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
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
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
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <MainHeader mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

export default MobileContainer;
