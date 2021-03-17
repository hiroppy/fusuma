import Link from 'next/link';
import { chakra, Flex, Image } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { TopContainer } from './TopContainer';
import logo from '../../public/static/logo-black.svg';

export const Header = () => (
  <chakra.header background="blue.400">
    <TopContainer height="56px">
      <Flex w="100%" h="100%" align="center" justify="space-between">
        <Flex w="100%" h="100%" align="center" justify="flex-start">
          <Link href="/">
            <Image src={logo} alt="fusuma" height="32px" />
          </Link>
        </Flex>
        <Flex w="100%" h="100%" alignItems="center" justify="flex-end">
          <a
            className="github-button"
            href="https://github.com/hiroppy/fusuma"
            data-size="large"
            data-show-count="true"
            aria-label="Star hiroppy/fusuma on GitHub"
          >
            Star
          </a>
          <chakra.a
            fontSize="20px"
            color="gray.300"
            mx={2}
            mt={-1}
            href="https://github.com/sponsors/hiroppy"
          >
            <FaHeart />
          </chakra.a>
        </Flex>
      </Flex>
    </TopContainer>
  </chakra.header>
);
