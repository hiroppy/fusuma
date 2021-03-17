import { Text, AspectRatio, Code } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DocsLayout } from '../../components/DocsLayout';
import { Section } from '../../components/Section';
import { Link } from '../../components/Link';

const ChartAndMath = () => (
  <DocsLayout
    title="Math, Diagrams, and Flowcharts"
    paths={[
      {
        name: 'Math, Diagrams, and Flowcharts',
        path: '/docs/chart-and-math',
      },
    ]}
  >
    <Text>
      Fusuma supports <Link href="https://github.com/mermaid-js/mermaid">Mermaid</Link> to create
      charts and diagrams, and Mathjax to use Math syntax.
    </Text>
    <Section title="Setup fusumarc">
      <Text>
        It's easy to setup them but if you want to use Mermaid, please install it manually.
      </Text>
      <SyntaxHighlighter language="shell" style={tomorrow}>
        {`$ npm i mermaid`}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="yml" style={tomorrow}>
        {`slide:
  chart: true # for Mermaid
  math: true  # for Mathjax`}
      </SyntaxHighlighter>
    </Section>
    <Section title="Syntax">
      <Text>
        Mermaid syntax is like below. When <Code>mermaid</Code> or <Code>chart</Code> are specified,
        Fusuma will convert it for Mermaid. See the{' '}
        <Link href="https://mermaid-js.github.io/mermaid">Mermaid documentation</Link> to know more
        details.
      </Text>
      <SyntaxHighlighter language="md" style={tomorrow}>
        {`\`\`\`mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
\`\`\``}
      </SyntaxHighlighter>
      <br />
      <Text>
        Mathjax syntax is like below. When you use <Code>$$</Code>, Fusuma will convert it for
        Mathjax.
        <Link href="https://www.mathjax.org/">Mathjax documentation</Link> to know more details.
      </Text>
      <SyntaxHighlighter language="md" style={tomorrow}>
        {`$$
\textrm{padSize} = \lceil \log_{10}(\mathbf{arraySize} + 1) \rceil
$$`}
      </SyntaxHighlighter>
      <AspectRatio ratio={16 / 9} m="auto" boxShadow="base" mt={2}>
        <iframe src="https://hiroppy.github.io/fusuma/advanced?sidebar=false" />
      </AspectRatio>
    </Section>
  </DocsLayout>
);

export default ChartAndMath;
