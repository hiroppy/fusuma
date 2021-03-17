import { Flex, Text, chakra } from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export const Footer = () => (
  <Flex justifyContent="center" m={10} gridGap={4} fontSize="medium" alignItems="center">
    <Text>Created by @hiroppy</Text>
    <chakra.a href="https://github.com/hiroppy">
      <FaGithub />
    </chakra.a>
    <chakra.a href="https://twitter.com/about_hiroppy">
      <FaTwitter />
    </chakra.a>
  </Flex>
);
