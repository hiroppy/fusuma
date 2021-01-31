/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const heroBackgroundColor = '#2b3137';

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer" style={{ background: heroBackgroundColor }}>
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper" style={{ height: '100vh' }}>
            {props.children}
          </div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img
          src={props.img_src}
          alt="Project Logo"
          style={{ margin: 'auto', background: heroBackgroundColor }}
        />
      </div>
    );

    const Demo = () => (
      <div className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
        <iframe
          src="https://hiroppy.github.io/fusuma/intro/"
          style={{ width: '100%', height: 540, maxWidth: 960 }}
        />
      </div>
    );

    const ProjectTitle = () => (
      <React.Fragment>
        <h2 className="projectTitle">A tool to create slides easily for you ✍</h2>
        <br />
      </React.Fragment>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target} style={{ width: '160px' }}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/logo.svg`} /> */}
        <div style={{ marginTop: 54 }}>
          <ProjectTitle siteConfig={siteConfig} />
          <Demo />
          <PromoSection>
            <Button href={docUrl('getting-started/preparation.html')}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = (props) => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlock
          align={props.align ? props.align : 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const LearnHow = () => (
      <Block background="light" align="left">
        {[
          {
            content:
              'Just run `npm i fusuma -D && npx fusuma init` and then some files created. After that run `npx fusuma start` to create slides.',
            image: `${baseUrl}img/top-intro.png`,
            imageAlign: 'right',
            title: 'Quick Setup',
          },
        ]}
      </Block>
    );

    const Button = (props) => (
      <div
        className="pluginWrapper buttonWrapper"
        style={{ textAlign: 'center', marginTop: '32px' }}
      >
        <a className="button" href={props.href} target={props.target} style={{ width: '160px' }}>
          {props.children}
        </a>
      </div>
    );

    const Features = () => (
      <React.Fragment>
        <Block layout="fourColumn">
          {[
            {
              content: 'No need to prepare something.',
              image: `${baseUrl}img/top-zero-config.png`,
              imageAlign: 'top',
              title: 'Zero Config',
            },
            {
              content:
                'Development, Build, Exporting as PDF, Deploying to GitHub Pages, Presenter Mode, and Live Mode',
              image: `${baseUrl}img/top-cli.png`,
              imageAlign: 'top',
              title: 'Powerful CLI',
            },
            {
              content: 'Creating beautiful slides just by coding markdown or MDX.',
              image: `${baseUrl}img/top-markdown.png`,
              imageAlign: 'top',
              title: 'Powered by Markdown and MDX',
            },
          ]}
        </Block>
        <Block layout="fourColumn">
          {[
            {
              content:
                'Recording slides timeline and your voice to support practice for your speech.',
              image: `${baseUrl}img/top-recording.png`,
              imageAlign: 'top',
              title: 'Recording your voice and actions',
            },
            {
              content: 'Drawing lines on the slides at real-time when giving a speech.',
              image: `${baseUrl}img/top-marker.png`,
              imageAlign: 'top',
              title: 'Supporting Fluorescent Marker',
            },
            {
              content: 'Making SEO and OGP to 100%.',
              image: `${baseUrl}img/top-seo.png`,
              imageAlign: 'top',
              title: 'SEO/OGP',
            },
          ]}
        </Block>
      </React.Fragment>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <Button href={docUrl('getting-started/preparation.html')}>Get Started</Button>
        </div>
      </div>
    );
  }
}

module.exports = Index;
