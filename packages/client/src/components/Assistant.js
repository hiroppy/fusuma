import React from 'react';
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
};

const hrCss = {
  margin: '4px 0',
};

const smallTitleCss = {
  borderBottom: '1px solid #ccc',
  marginBottom: '4px',
};

const A = ({ url, children }) => (
  <a href={url} target="_blank" rel="noreferrer" style={{ color: '#7bb7fa' }}>
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
      <div key={title} style={{ marginBottom: '6px' }}>
        {title}:<A url={url}>{content}</A>
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
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=15',
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
                  title: 'Position',
                  content: <code>.content-left|right|top|bottom</code>,
                  url: 'https://webslides.tv/demos/components#slide=14',
                },
                {
                  title: 'Fullscreen',
                  content: <code>.fullscreen</code>,
                  url: 'https://webslides.tv/demos/components#slide=76',
                },
              ]}
            />
            <A url="https://webslides.tv/demos/components#slide=2">Others</A>
            <hr style={hrCss} />
            <SmallTitle>Fusuma</SmallTitle>
            <code>{`<!-- sectionTitle -->`}</code>:
            <A url="https://hiroppy.github.io/fusuma/intro/#slide=16">
              <code>.section-title</code>
            </A>
            <br />
            Code:
            <A url="https://hiroppy.github.io/fusuma/intro/#slide=15">
              <code>{`pre > code[class*='language-']`}</code>
            </A>
            <br />
          </Item>
          <Item title="Slide Syntaxes">
            <Lines
              items={[
                {
                  title: 'Splitting Slides',
                  content: <code>{`---`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=13',
                },
              ]}
            />
            <hr style={hrCss} />
            <SmallTitle>
              HTML Comments<code>{`<!-- -->`}</code>
            </SmallTitle>
            <Lines
              items={[
                {
                  title: 'Adding Classes',
                  content: <code>{`classes: title`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=14',
                },
                {
                  title: 'Creating div Tag',
                  content: <code>{`block-start: ?className`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=15',
                },
                {
                  title: 'Closing div Tag',
                  content: <code>block-end</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=15',
                },
                {
                  title: 'Adding Title to Sidebar',
                  content: <code>{`sectionTitle: title`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=16',
                },
                {
                  title: 'Adding Agenda UI via SectionTitle',
                  content: <code>contents</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=17',
                },
                {
                  title: 'Adding Speaker Note',
                  content: <code>note hello~~~~</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=18',
                },
                {
                  title: 'Executing JavaScript Code',
                  content: <code>executable-code</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=19',
                },
                {
                  title: 'Capturing Screen Contents',
                  content: <code>screen</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=20',
                },
                {
                  title: 'Generating QR Code',
                  content: <code>{`qr: https://~~~`}</code>,
                  url: 'https://hiroppy.github.io/fusuma/intro/#slide=20', // TODO: fix
                },
              ]}
            />
          </Item>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
);
