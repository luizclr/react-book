import React from 'react';
import PropTypes from 'prop-types';

import '../../style/components/Header.scss';

const Header = ({ title }) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
