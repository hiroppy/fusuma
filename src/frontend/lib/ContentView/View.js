/* eslint-disable  react/prop-types */

/*
 * View for Presentation mode
 */

import React from 'react';
import Base from './Base';

class View extends React.Component {
  UNSAFE_componentWillMount() {
    window.addEventListener('storage', (e) => {
      if (e.key === 'page') {
        const page = JSON.parse(e.newValue).page;

        window.slide.bespoke.slide(page);
      }
    });
  }

  componentDidMount() {
    import('../setup-prism');
  }

  render() {
    return <Base slides={this.props.slides} />;
  }
}

export default View;
