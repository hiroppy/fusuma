/* eslint-disable  react/prop-types */

/*
 * View for Presentation mode
 */

import React from 'react';
import Base from './Base';
import PresentationReceiver from '../presentation-mode/Receiver';

class View extends React.PureComponent {
  constructor() {
    super();

    this.presentationReceiver = new PresentationReceiver();
    this.presentationReceiver.onChangePage((pageNum) => {
      window.slide.bespoke.slide(pageNum);
    });
  }

  render() {
    return (
      <Base slides={this.props.slides} lazyload={false} currentIndex={this.props.currentIndex} />
    );
  }
}

export default View;
