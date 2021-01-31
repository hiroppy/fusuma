import { promises } from 'fs';
import { join } from 'path';
import { Text, Code } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DocsLayout } from '../../components/DocsLayout';
import { Section } from '../../components/Section';
import { Link } from '../../components/Link';

const Fusumarc = ({ code }) => (
  <DocsLayout
    title="Fusumarc"
    paths={[
      {
        name: 'fusumarc',
        path: '/docs/fusumarc',
      },
    ]}
  >
    <Text>
      Fusuma uses the configuration file(<Code>.fusumarc</Code>) as optional and support `.js` and
      `.yml` extensions.
    </Text>
    <Section title="Introducing rc file">
      <Text>Fusuma has the following properties and default values.</Text>
      <SyntaxHighlighter language="css" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </Section>
  </DocsLayout>
);

export async function getStaticProps() {
  const code = (
    await promises.readFile(
      join(process.cwd(), '../packages/fusuma/src/configs/fusumarc.js'),
      'utf8'
    )
  ).trim();

  return {
    props: {
      code,
    },
  };
}

export default Fusumarc;
