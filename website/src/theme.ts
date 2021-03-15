import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

export const globalTheme = {
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        background: 'gray.50',
        fontSize: '18px',
      },
      pre: {
        fontSize: '15px !important',
        borderRadius: '4px !important',
      },
    },
  },
};

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const theme = extendTheme({ ...globalTheme, breakpoints });
