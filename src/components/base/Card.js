import React from 'react';

import PropTypes from 'prop-types';

import '../../style/components/Card.scss';

const Card = ({ children, className }) => <div className={`card ${className}`}>{children}</div>;

Card.defaultProps = {
  children: {},
  className: '',
};

Card.propTypes = {
  children: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};

export default Card;
