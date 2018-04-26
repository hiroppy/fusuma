import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import createRoot from './create-root';

const createBody = (slides = [], theme) => {
  ReactDOM.render(
    <AppContainer
      theme={theme}
      slides={slides}
    />, createRoot()
  );
};

export default createBody;
