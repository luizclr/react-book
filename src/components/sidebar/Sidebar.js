import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Creators as NavigationActions } from '../../store/ducks/navigation';

import '../../style/components/Sidebar.scss';

class Sidebar extends Component {
  render() {
    const { toggleNav, isOn, children } = this.props;
    return (
      <div>
        <div
          className={`sidebar-background${isOn ? '__hidden' : ''}`}
          onClick={() => toggleNav(true)}
        />
        <div className={`sidebar-content${isOn ? '__hidden' : ''}`}>{children}</div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  children: null,
};

Sidebar.propTypes = {
  children: PropTypes.element,
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
)(Sidebar);
