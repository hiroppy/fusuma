/* eslint-disable  react/prop-types */

import React from 'react';
import Prism from 'prismjs';
import classnames from 'classnames';
import { setup as setupWebSlides } from '../../setup/webSlides';

export class Base extends React.Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0
    };

    if (!window.slide) {
      setTimeout(() => {
        window.slide = setupWebSlides();
        window.slide.el.addEventListener('ws:slide-change', (e) => {
          this.props.onChangeSlideIndex(e.detail.currentSlide0);
          this.setState({ currentIndex: e.detail.currentSlide0 });
        });
      }, 0);
    }
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.hash !== nextProps.hash || !window.slide) {
      return true;
    }

    return false;
  }

  render() {
    const {
      slides,
      className = undefined,
      // showIndex(webSlides) checks all slides so lazyload can not be used together
      lazyload = !process.env.SHOW_INDEX // TODO: fix
    } = this.props;
    const articleClass = process.env.IS_VERTICAL ? classnames('vertical', className) : className;

    return (
      <article className={articleClass} id="webslides">
        {slides.map(({ slide: Slide, fusumaProps }, i) => (
          <section
            key={i /* fix */}
            className={classnames(
              'aligncenter',
              fusumaProps.className,
              fusumaProps.sectionTitle ? 'section-title' : undefined
            )}
          >
            {(this.state.currentIndex >= i - 5 && this.state.currentIndex <= i + 5) || !lazyload ? (
              <Slide />
            ) : (
              <div />
            )}
          </section>
        ))}
      </article>
    );
  }
}
