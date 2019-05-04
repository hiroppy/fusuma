/* eslint-disable  react/prop-types */

import React from 'react';
import Prism from 'prismjs';
import classnames from 'classnames';

export class Base extends React.PureComponent {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const {
      slides,
      currentIndex,
      className = undefined,
      // showIndex(webSlides) checks all slides so lazyload can not be used together
      lazyload = !process.env.SHOW_INDEX
    } = this.props;
    const articleClass = process.env.IS_VERTICAL ? classnames('vertical', className) : className;

    return (
      <article className={articleClass} id="webslides">
        {slides.map((slide, i) => (
          <section
            key={i /* fix */}
            className={slide.meta.className}
            dangerouslySetInnerHTML={{
              __html:
                (currentIndex >= i - 5 && currentIndex <= i + 5) || !lazyload
                  ? slide.context
                  : '<div />'
            }}
          />
        ))}
      </article>
    );
  }
}
