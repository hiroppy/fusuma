import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Rotate = styled.h2`
  display: inline-block;
  animation: ${rotate} 3s linear infinite;
`;

export const Sample = () => <Rotate>Hello from jsx!!</Rotate>;
