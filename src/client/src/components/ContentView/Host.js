/**
 * Host for Presentation mode
 */

import React from 'react';
import { Base } from './Base';
import '../../../assets/style/host.css';

export default class Host extends React.PureComponent {
  constructor(props) {
    super();

    this.slides = props.slides; // TODO: separate from current reference

    const lastPage = {
      meta: {
        note: '',
        className: '',
        sectionTitle: '',
        shouldReplace: false
      },
      context: '<h2>Finish</h2>'
    };

    this.firstSlide = this.slides.shift(); // delete the first page
    this.slides = [...this.slides, lastPage];
  }

  render() {
    const index = window.slide ? window.slide.currentSlideI_ : 0;

    return (
      <div className="host-container">
        <div className="host-note">
          <a className="fa fa-times terminate-button" onClick={this.props.terminate} />
          {window.slide ? (
            <pre>
              {!!location.hash && ~~location.hash.match(/#slide=(.*)/)[1] !== 1 // for 0 page
                ? this.slides[index].meta.note
                : this.firstSlide.meta.note}
            </pre>
          ) : null}
        </div>
        <div className="host-info">
          <div className="host-slides">
            <span className="current-slide-num">
              {window.slide ? index + 1 : 1} / {this.slides.length}
            </span>
          </div>
          <h2>next</h2>
          <Base
            slides={this.slides}
            className="host-next-slide"
            lazyload={false}
            currentIndex={index}
          />
        </div>
      </div>
    );
  }
}
