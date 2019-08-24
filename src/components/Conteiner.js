import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import '../style/Container.scss';
=======
import '../../style/Container.scss';
>>>>>>> Improve project architecture - style and templates folder

const Container = ({ children }) => <div className="container">{children}</div>;

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.element,
};

export default Container;
