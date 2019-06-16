import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from '../components/AppContainer';

export function createBody(slides = [], hash = 0) {
  render(<AppContainer slides={slides} hash={hash} />, document.getElementById('root'));
}
