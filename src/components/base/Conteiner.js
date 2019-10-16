import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
