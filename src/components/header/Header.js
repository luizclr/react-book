import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../style/components/Header.scss';

class Header extends Component {
  state = {
    showToggleButton: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    if (window.innerWidth >= 993) {
      this.setState({ showToggleButton: false });
    } else {
      this.setState({ showToggleButton: true });
    }
  };

  toggleMenu = () => {
    console.log('toggle');
  };

  render() {
    const { showToggleButton } = this.state;
    const { title } = this.props;
    return (
      <div className="header">
        {showToggleButton && (
          <button type="button" onClick={this.toggleMenu}>
            {JSON.stringify(showToggleButton)}
          </button>
        )}
        <h1>{title}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
