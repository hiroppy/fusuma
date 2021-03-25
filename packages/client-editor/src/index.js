import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Tooltip } from './components/Tooltip';

const A = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Tooltip />
  </div>
);

render(
  <ChakraProvider>
    <A />
  </ChakraProvider>,
  document.getElementById('root')
);
