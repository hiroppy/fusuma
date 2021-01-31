import Link from 'next/link';
import {
  Box,
  SimpleGrid,
  Text,
  AspectRatio,
  Container,
  Image,
  Stack,
  Button,
  Code,
  Heading,
} from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getSponsors } from '../utils/getSponsors';
import { FlexBox } from '../components/FlexBox';
import zeroConfigImg from '../../public/static/top-cli.png';
import markdownImg from '../../public/static/top-markdown.png';
import seoImg from '../../public/static/top-seo.png';
import recordingImg from '../../public/static/top-recording.png';

const Card = ({ img, title, children }) => (
  <Container textAlign="left" px={6} py={2} borderRadius={4} bg="gray.100" boxShadow="base">
    <Text fontWeight="bold" mb={2}>
      <Image src={img} w="42px" mr={4} display="inline" />
      {title}
    </Text>
    <Text>{children}</Text>
  </Container>
);

const Section = ({ children }) => <Box mt={12}>{children}</Box>;

const Top = ({ sponsors }) => (
  <>
    <Box m="auto" maxW="800px" mt={12} mb={6}>
      <Text fontSize="3xl" mb={2} fontWeight="bold" color="blue.800">
        Make Presentation Slides with Markdown easily ✍️
      </Text>
      <Text>
        Fusuma is a tool to create slides easily, with it alone, you can create and publish slides.
        Also, it provides Presenter mode to make a speech, and Practice mode.
      </Text>
    </Box>
    <AspectRatio ratio={16 / 9} maxW="70%" m="auto" boxShadow="base">
      <iframe src="https://hiroppy.github.io/fusuma/intro/" />
    </AspectRatio>
    <Section>
      <Box display={{ md: 'flex' }} gridGap={4}>
        <Card title="Zero Config" img={zeroConfigImg}>
          No need to prepare something.
        </Card>
        <Card title="Powered by Markdown and MDX" img={markdownImg}>
          Creating beautiful slides just by coding markdown or MDX.
        </Card>
        <Card title="Not using CSS as far as possible">
          Providing several comments to enable flexible expression for slides.
        </Card>
      </Box>
      <Box mt={4} display={{ md: 'flex' }} gridGap={4}>
        <Card title="Supporting a11y/SEO/OGP" img={seoImg}>
          Checking web accessibility and generating <Code>og:image</Code> automatically.
        </Card>
        <Card title="Presenter Mode">Displaying speaker notes and using a timer.</Card>
        <Card title="Recording your voice and actions" img={recordingImg}>
          Recording slides timeline and your voice to support practice for your speech.
        </Card>
      </Box>
    </Section>
    <Section>
      <FlexBox
        left={{
          children: (
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="blue.800" mb={4}>
                Quick Setup
              </Text>
              <Text>
                Just <Code>run npm i fusuma -D && npx fusuma init</Code> and then some files
                created. After that run <Code>npx fusuma start</Code> to create slides.
              </Text>
            </Box>
          ),
        }}
        right={{
          children: (
            <SyntaxHighlighter language="shell" style={tomorrow}>
              {`$ npm i fusuma -D
$ npx fusuma init
$ npx fusuma start  # for development
$ npx fusuma build  # for production
$ npx fusuma deploy # deploying to gh-pages
$ npx fusuma pdf    # generating as PDF`}
            </SyntaxHighlighter>
          ),
        }}
      />
    </Section>
    <Section>
      <Stack spacing={4} direction="row" align="center" justify="center">
        <Button colorScheme="blue" w="140px">
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button w="140px">
          <a href="https://github.com/hiroppy/fusuma">GitHub</a>
        </Button>
      </Stack>
    </Section>
    <Section>
      <Heading size="lg" mb={4}>
        Sponsors
      </Heading>
      <Text mb={3}>This project is supported by many people.</Text>
      <SimpleGrid minChildWidth="70px" spacing={1} mb={4}>
        {sponsors.map(({ avatarUrl, url }) => (
          <a href={url} key={url}>
            <Image src={avatarUrl} borderRadius="50%"></Image>
          </a>
        ))}
      </SimpleGrid>
      <Button colorScheme="blue" variant="outline">
        <a href="https://github.com/sponsors/hiroppy">Become a Sponsor</a>
      </Button>
    </Section>
  </>
);

export async function getStaticProps() {
  const sponsors = await getSponsors();

  return {
    props: {
      sponsors,
    },
  };
}
export default Top;
