import Link from 'next/link';
import { chakra, Flex, Image } from '@chakra-ui/react';
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
        <Flex w="100%" h="100%" align="center" justify="flex-end">
          <a
            className="github-button"
            href="https://github.com/hiroppy/fusuma"
            data-size="large"
            data-show-count="true"
            aria-label="Star hiroppy/fusuma on GitHub"
          >
            Star
          </a>
        </Flex>
      </Flex>
    </TopContainer>
  </chakra.header>
);
