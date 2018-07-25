/* eslint-disable  react/prop-types */

/*
 * View for Presentation mode
 */

import React from 'react';
import Base from './Base';

class View extends React.PureComponent {
  constructor() {
    super();

    window.addEventListener('storage', (e) => {
      if (e.key === 'page') {
        const page = JSON.parse(e.newValue).page;

        window.slide.bespoke.slide(page);
      }
    });
  }

  render() {
    return <Base slides={this.props.slides} lazyload={false} />;
  }
}

export default View;
