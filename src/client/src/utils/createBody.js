import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from '../components/AppContainer';

export function createBody(slides = [], theme) {
  render(<AppContainer theme={theme} slides={slides} />, document.getElementById('root'));
}
