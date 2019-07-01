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
          <div className="wrapper homeWrapper">{props.children}</div>
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
      <h2 className="projectTitle">
        {siteConfig.title} a helper for creating slides.
        <small>{siteConfig.tagline}</small>
      </h2>
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
        <a className="button" href={props.href} target={props.target}>
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
            <Button href={docUrl('getting-started/installation.html')}>Getting Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

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
              'Create `slides` directory and create Markdown files into the directory, and your slides are generated.',
            image: `${baseUrl}img/top-intro.png`,
            imageAlign: 'right',
            title: 'Quick Setup'
          }
        ]}
      </Block>
    );

    const Modes = () => (
      <React.Fragment>
        <Block background="dark" align="left">
          {[
            {
              content: 'Provide features that can stream comments stream when giving a speech. ',
              image: `${baseUrl}img/top-live.png`,
              imageAlign: 'left',
              title: 'Live Mode'
            }
          ]}
        </Block>
        <Block background="light" align="left">
          {[
            {
              content:
                'Provide Presenter Mode for giving a speech which is similar to Keynote and PowerPoint. ' +
                'This mode has features that `Timer`, `Note`, `Actions Timeline` and `Recording voice`.',
              image: `${baseUrl}img/top-presenter-host.png`,
              imageAlign: 'right',
              title: 'Presenter Mode'
            }
          ]}
        </Block>
      </React.Fragment>
    );

    const Features = () => (
      <React.Fragment>
        <Block layout="fourColumn">
          {[
            {
              content: 'No need to prepare anything.',
              image: `${baseUrl}img/top-zero-config.png`,
              imageAlign: 'top',
              title: 'Zero Config'
            },
            {
              content:
                'Support development, build, exporting as PDF, deploying to GitHub Pages, Presenter Mode and Live Mode.',
              image: `${baseUrl}img/top-cli.png`,
              imageAlign: 'top',
              title: 'Powerful CLI'
            },
            {
              content: 'Create beautiful slides just by writing markdown or MDX.',
              image: `${baseUrl}img/top-markdown.png`,
              imageAlign: 'top',
              title: 'Powered by Markdown and MDX'
            }
          ]}
        </Block>
        <Block layout="fourColumn">
          {[
            {
              content: 'Support to practice your speech.',
              image: `${baseUrl}img/top-recording.png`,
              imageAlign: 'top',
              title: 'Recording your voice'
            },
            {
              content: 'Drawing lines on the slides at real-time when giving a speech.',
              image: `${baseUrl}img/top-marker.png`,
              imageAlign: 'top',
              title: 'Support Fluorescent Marker'
            },
            {
              content: 'Make SEO and OGP to 100%.',
              image: `${baseUrl}img/top-seo.png`,
              imageAlign: 'top',
              title: 'SEO/OGP'
            }
          ]}
        </Block>
      </React.Fragment>
    );

    const FeatureCallout = () => (
      <div className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
        <h2>Let's get started!</h2>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <Modes />
          <FeatureCallout />
        </div>
      </div>
    );
  }
}

module.exports = Index;
