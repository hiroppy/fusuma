import React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer } from '../components/AppContainer';

const renderMethod = module.hot ? render : hydrate;

export function createBody(slides = [], hash = 0) {
  renderMethod(<AppContainer slides={slides} hash={hash} />, document.getElementById('root'));
}
