/* eslint-disable  react/prop-types */

/**
 * Host for Presentation mode
 */

import React from 'react';
import Base from './Base';
import '../../assets/style/host.css';

class Host extends React.Component {
  constructor(props) {
    super();

    this.slides = props.slides; // TODO: separate from current reference

    const lastPage = {
      meta: {
        note: '',
        className: '',
        fx: {
          direction: 'horizontal',
          transition: 'none'
        },
        background: 'default'
      },
      content: '<h2>Finish</h2>'
    };

    this.slides.shift(); // delete the first page
    this.slides = [...this.slides, lastPage];
  }

  UNSAFE_componentWillReceiveProps(p) {
    // to load when bespoke loading is completed
    if (p.loadedBespoke && !this.loaded) {
      window.slide.bespoke.on('activate', (e) => {
        localStorage.setItem(
          'page',
          JSON.stringify({
            date: Date.now(),
            page: e.index
          })
        );
      });

      this.loaded = true;
    }
  }

  render() {
    const index = window.slide
      ? window.slide.bespoke.slide() - 1 < 0
        ? 0
        : window.slide.bespoke.slide() - 1
      : 0;

    return (
      <div className="host-container">
        <div className="host-note">
          {window.slide ? (
            <pre>
              {!!location.hash && ~~location.hash.match(/#(.*)/)[1] !== 1 // for 0 page
                ? this.slides[index].meta.note
                : ''}
            </pre>
          ) : null}
        </div>
        <div className="host-info">
          {/* TODO: currently, this view is displayed none
            window.slide ? (
              <div className="host-slides">
                <span>
                  {window.slide.bespoke.slide() + 1} / {this.slides.length}
                </span>
              </div>
            ) : null
          */}
          <h2>next</h2>
          <Base slides={this.slides} className="host-next-slide" lazyload={false} />;
        </div>
      </div>
    );
  }
}

export default Host;
