import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { deep } from '@theme-ui/presets';

const tokens = {
  ...deep,
  sizes: { container: 1024 },
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={tokens}>
    {element}
  </ThemeProvider>
);
