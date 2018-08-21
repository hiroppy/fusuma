/* eslint-disable  react/prop-types */

import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ displayed = true }) => (
  <div className={displayed ? 'page-loader' : 'page-loader-fadeout'}>
    <ReactLoading type="bars" />
  </div>
);

export default Loader;
