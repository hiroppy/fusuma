import React from 'react';
import ReactLoading from 'react-loading';

export const Loader = ({ displayed = true }) => (
  <div className={displayed ? 'page-loader' : 'page-loader-fadeout'}>
    <ReactLoading type="bars" />
  </div>
);
