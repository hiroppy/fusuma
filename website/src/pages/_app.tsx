import { AppProps } from 'next/app';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from '../theme';
import { TopContainer } from '../components/TopContainer';
import { Header } from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <TopContainer>
        <Box textAlign="center" flexDirection="column" w="100%">
          <Component {...pageProps} />
        </Box>
      </TopContainer>
    </ChakraProvider>
  );
};

export default MyApp;
