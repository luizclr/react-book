import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as NavigationActions } from '../../store/ducks/navigation';

import {
  addEventListener, removeEventListener, debounce, isMobile,
} from '../../utils/index';

import '../../style/components/Header.scss';

class Header extends Component {
  componentDidMount() {
    this.updateDimensions();
    addEventListener('resize', debounce(this.updateDimensions));
  }

  componentWillUnmount() {
    removeEventListener('resize', debounce(this.updateDimensions));
  }

  updateDimensions = () => {
    const { toggleNav } = this.props;
    toggleNav(isMobile());
  };

  render() {
    const { title, isOn, toggleNav } = this.props;
    return (
      <div className="header">
        {isOn && (
          <button type="button" className="header__button" onClick={() => toggleNav(false)}>
            MENU
          </button>
        )}

        <h1>{title}</h1>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isOn: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isOn: state.navigation.isOn,
});

const mapDispatchToProps = dispatch => bindActionCreators(NavigationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
