import React from 'react';
import { createMedia } from '@artsy/fresnel';
import DesktopContainer from './desktop_container';
import MobileContainer from './mobile_container';

const ResponsiveContainer = ({ children }) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return (
    <MediaContextProvider>
      <DesktopContainer children={children} media={Media} />
      <MobileContainer children={children} media={Media} />
    </MediaContextProvider>
  );
};

export default ResponsiveContainer;
