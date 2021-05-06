import React from 'react';
import { createMedia } from '@artsy/fresnel';
import DesktopContainer from './desktop_container';

const ResponsiveContainer = ({ children }) => {
  const { MediaContextProvider } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return (
    <MediaContextProvider>
      <DesktopContainer children={children} />
    </MediaContextProvider>
  );
};

export default ResponsiveContainer;
