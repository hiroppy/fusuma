import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const outerCss = {
  background: '#f5f5f5',
  fontSize: '16px',
  right: 0,
  margin: 12,
  position: 'absolute',
  width: 400,
};

const buttonCss = {
  padding: '8px 18px',
};

const itemCss = {
  padding: '4px 8px',
  color: '#3d3738',
};

const smallTitleCss = {
  borderBottom: '1px solid #ccc',
  marginBottom: '4px',
};

const A = ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    style={{ color: '#2954a1', marginLeft: '16px', marginTop: '4px', display: 'block' }}
  >
    {children}
  </a>
);

const Item = ({ title, children }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton style={buttonCss}>{title}</AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel style={itemCss}>{children}</AccordionItemPanel>
  </AccordionItem>
);

const SmallTitle = ({ children }) => <p style={smallTitleCss}>{children}</p>;

const Lines = ({ items }) => (
  <>
    {items.map(({ title, content, url }) => (
      <div key={title} style={{ marginBottom: '8px' }}>
        <span style={{ fontWeight: 500 }}>- {title}</span>
        <br />
        {content && <A url={url}>{content}</A>}
      </div>
    ))}
  </>
);

export const Assistant = () => (
  <div style={outerCss}>
    <Accordion allowMultipleExpanded allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton style={buttonCss}>
            Reference (only development env)
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel style={itemCss}>
          <Item title="CSS Classes">
            <Lines
              items={[
                {
                  title: 'Grid System',
                  content: <code>{`.gird > .column`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-8',
                },
                {
                  title: 'Sidebar + Main',
                  content: <code>{`.gird.sm > .column`}</code>,
                  url: null,
                },
                {
                  title: 'Main + Sidebar',
                  content: <code>{`.gird.ms > .column`}</code>,
                  url: null,
                },
                {
                  title: 'Section Title',
                  content: <code>{`.section-title`}</code>,
                  url: null,
                },
                {
                  title: 'Slide Container',
                  content: <code>{`.swiper-slide`}</code>,
                  url: null,
                },
                {
                  title: 'Slide Background',
                  content: <code>{`.slide-background`}</code>,
                },
                {
                  title: 'Align Left',
                  content: <code>{`.left`}</code>,
                },
                {
                  title: 'Align Right',
                  content: <code>{`.right`}</code>,
                },
                {
                  title: 'Table of Contents',
                  content: <code>{`.toc`}</code>,
                },
              ]}
            />
          </Item>
          <Item title="Slide Syntaxes">
            <SmallTitle>
              HTML Comments<code>{`<!-- -->`}</code>
            </SmallTitle>
            <Lines
              items={[
                {
                  title: 'Adding Classes',
                  content: <code>{`classes: title, main`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-7',
                },
                {
                  title: 'Changing Background',
                  content: <code>{`background: '../assets/bg.png'`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-9',
                },
                {
                  title: 'Creating div Tag',
                  content: <code>{`block-start: ?className`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-8',
                },
                {
                  title: 'Closing div Tag',
                  content: <code>block-end</code>,
                },
                {
                  title: 'Adding Title to Sidebar',
                  content: <code>{`section-title: hey!`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-10',
                },
                {
                  title: 'Adding ToC UI via section-title',
                  content: <code>contents</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-11',
                },
                {
                  title: 'Adding Speaker Notes',
                  content: <code>note hello~~~~</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-12',
                },
                {
                  title: 'Executing JavaScript Code',
                  content: <code>executable-code</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-13',
                },
                {
                  title: 'Capturing Screen Contents',
                  content: <code>screen</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-14',
                },
                {
                  title: 'Generating QR Code',
                  content: <code>{`qr: https://~~~`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide-15',
                },
              ]}
            />
          </Item>
          <Item title="Links">
            <A url="https://github.com/hiroppy/fusuma/blob/master/packages/client/assets/style/variables.css">
              - List of CSS Variables
            </A>
            <A url="https://hiroppy.github.io/fusuma">- Official Site</A>
            <A url="https://github.com/hiroppy/fusuma">- Repository</A>
          </Item>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
);
