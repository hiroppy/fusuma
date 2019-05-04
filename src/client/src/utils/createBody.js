import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from '../components/AppContainer';

export function createBody(slides = []) {
  render(<AppContainer slides={slides} />, document.getElementById('root'));
}
