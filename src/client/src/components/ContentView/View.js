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
      window.slide.bespoke.slide(pageNum);
    });
  }

  render() {
    return (
      <Base slides={this.props.slides} lazyload={false} currentIndex={this.props.currentIndex} />
    );
  }
}
