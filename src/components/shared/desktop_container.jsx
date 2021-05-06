import React, { useState } from 'react';
import MainHeader from './main_header';
import img from '../../images/home_bg.png';
import logo from '../../images/logo.png';
import { Container, Menu, Segment, Visibility, Image } from 'semantic-ui-react';

const DesktopContainer = ({ children, media }) => {
  const [fixed, setFixed] = useState(false);

  const Media = media;

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
            fixed='top'
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container className='menu_desktop'>
              <Menu.Item as='a'>
                <Image src={logo} className='logo_mobile' />
              </Menu.Item>
              <Menu.Item position='right' style={{ color: 'black' }}>
                <h4>Viviendas</h4>
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
