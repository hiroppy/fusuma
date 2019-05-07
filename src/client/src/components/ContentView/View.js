/*
 * View for Presentation mode
 */

import React from 'react';
import { Base } from './Base';
import { Receiver as PresentationReceiver } from '../presentationMode/Receiver';

export default class View extends React.PureComponent {
  constructor() {
    super();

    this.presentationReceiver = new PresentationReceiver();
    this.presentationReceiver.onChangePage((pageNum) => {
      if (window.slide) {
        window.slide.goToSlide(pageNum);
      }
    });
  }

  render() {
    return (
      <Base slides={this.props.slides} lazyload={true} currentIndex={this.props.currentIndex} />
    );
  }
}
