import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

export const TopContainer: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    w="100%"
    h="100%"
    px="4"
    align="center"
    justify="space-between"
    maxW={{ xl: '1200px' }}
    m="0 auto 40px auto"
    {...props}
  >
    {children}
  </Flex>
);
