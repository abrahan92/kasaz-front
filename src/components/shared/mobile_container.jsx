import React, { useState } from 'react';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import logo from '../../images/logo.png';
import {
  Container,
  Menu,
  Segment,
  Icon,
  Sidebar,
  Image,
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
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={() => setSidebarOpened(true)}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='left'>
                  <Image src={logo} className='logo_mobile' />
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
