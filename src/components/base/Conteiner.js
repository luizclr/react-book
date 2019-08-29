import React from 'react';
import PropTypes from 'prop-types';

import '../../style/components/Container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
