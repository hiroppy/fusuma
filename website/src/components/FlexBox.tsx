import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export type Props = {
  left: {
    props?: BoxProps;
    children: React.ReactNode;
  };
  right: {
    props?: BoxProps;
    children: React.ReactNode;
  };
};

export const FlexBox: FC<Props> = ({ left, right }) => (
  <Box display={{ md: 'flex' }} gridGap={4} mt={2}>
    <Box textAlign="left" width={{ md: '50%' }}>
      {left.children}
    </Box>
    <Box width={{ md: '50%' }}>{right.children}</Box>
  </Box>
);
