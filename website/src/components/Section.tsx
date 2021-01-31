import { Box, Heading } from '@chakra-ui/react';

export const Section = ({ title, children }) => (
  <Box mt={10}>
    <Heading size="md" mb={4}>
      {title}
    </Heading>
    <Box>{children}</Box>
  </Box>
);
