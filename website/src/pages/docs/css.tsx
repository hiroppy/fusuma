import { promises } from 'fs';
import { join } from 'path';
import { Text, AspectRatio } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DocsLayout } from '../../components/DocsLayout';
import { Section } from '../../components/Section';
import { Link } from '../../components/Link';

const Css = ({ variables }) => (
  <DocsLayout
    title="Custom Styles and Themes"
    paths={[
      {
        name: 'Custom Styles and Themes',
        path: '/docs/css',
      },
    ]}
  >
    <Section title="CSS Variables to customize UI">
      <Text>
        Fusuma provides these properties to overwrite the default fusuma's UI, and also this is just
        CSS so you can modify them directly. This code is{' '}
        <Link href="https://github.com/hiroppy/fusuma/blob/master/packages/client/assets/style/variables.css">
          here
        </Link>
        .
      </Text>
      <SyntaxHighlighter language="css" style={tomorrow}>
        {variables}
      </SyntaxHighlighter>
    </Section>
    <Section title="Themes">
      <Text>Fusuma provides some themes as default. Just importing theme on your css file.</Text>
      <SyntaxHighlighter language="css" style={tomorrow}>
        {`@import '@fusuma/client/assets/style/themes/pop.css';
@import '@fusuma/client/assets/style/themes/babel.css';
@import '@fusuma/client/assets/style/themes/webpack.css';
@import '@fusuma/client/assets/style/themes/node.css';`}
      </SyntaxHighlighter>
      <AspectRatio ratio={16 / 9} m="auto" boxShadow="base" mt={2}>
        <iframe src="https://hiroppy.github.io/fusuma/themes?sidebar=false" />
      </AspectRatio>
    </Section>
  </DocsLayout>
);

export async function getStaticProps() {
  const variables = await promises.readFile(
    join(process.cwd(), '../packages/client/assets/style/variables.css'),
    'utf8'
  );

  return {
    props: {
      variables,
    },
  };
}

export default Css;
