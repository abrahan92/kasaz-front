import React from 'react';
import { createMedia } from '@artsy/fresnel';

const ResponsiveContainer = ({ children }) => {
  const { MediaContextProvider } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return <MediaContextProvider />;
};

export default ResponsiveContainer;
