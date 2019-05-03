import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

const createBody = (slides = [], theme) => {
  ReactDOM.render(<AppContainer theme={theme} slides={slides} />, document.getElementById('root'));
};

export default createBody;
