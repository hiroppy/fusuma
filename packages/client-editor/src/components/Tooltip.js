import React from 'react';
import { Box, ChakraProvider, Input } from '@chakra-ui/react';
import Draggable, { DraggableCore } from 'react-draggable';

export const Tooltip = () => {
  return (
    <Box>
      <Box position="relative">
        <Box className="handle" position="absolute" bg="red.300">
          Drag from here
        </Box>
        <Draggable
          handle=".handle"
          position={null}
          scale={1}
          onStop={(e) => {
            console.log(e);
          }}
        >
          <Box className="handle" position="absolute" bg="red.300">
            Drag from here
          </Box>
        </Draggable>
      </Box>
      <br />
      <Box position="relative">
        <Box className="handle" position="absolute" bg="blue.300">
          Drag from here
        </Box>
        <Draggable handle=".handle" position={null} scale={1}>
          <Box className="handle" position="absolute">
            <Input />
          </Box>
        </Draggable>
      </Box>
    </Box>
  );
};
