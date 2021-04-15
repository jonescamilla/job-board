import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

/**
 * preset theme for application
 */
const theme = extendTheme({
  colors: {
    bg: { light: '#F5F6F8', dark: '#131822' },
    contentBg: { light: '#FFFFFF', dark: '#19212D' },
    brand: {
      purple: '#5865E0',
    },
    black: '#16161D',
  },
  fonts,
  breakpoints,
});

export default theme;
