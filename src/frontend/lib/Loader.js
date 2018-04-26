import React from 'react';
import ReactLoading from 'react-loading';

const Loader = (props) => (
  <div className={props.displayed ? 'page-loader' : 'page-loader-fadeout'}>
    <ReactLoading type="bars" />
  </div>
);

Loader.defaultProps = {
  displayed: true
};

export default Loader;
