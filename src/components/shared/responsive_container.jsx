import React from 'react';
import { createMedia } from '@artsy/fresnel';
import DesktopContainer from './desktop_container';
import MobileContainer from './mobile_container';

const ResponsiveContainer = ({ rooms, children }) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return (
    <MediaContextProvider>
      <DesktopContainer rooms={rooms} children={children} media={Media} />
      <MobileContainer rooms={rooms} children={children} media={Media} />
    </MediaContextProvider>
  );
};

export default ResponsiveContainer;
