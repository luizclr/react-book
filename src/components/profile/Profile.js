import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Creators as UsersActions } from '../../store/ducks/users';

import '../../style/components/Profile.scss';

class Profile extends Component {
  render() {
    const {
      user: { picture, name, posts },
    } = this.props;
    return (
      <div className="profile">
        <div className="card">
          <img className="avatar" src={`${picture}/150/150`} alt={name} />
          <h1 className="name">{name}</h1>
          <p>
            <img
              src="https://image.flaticon.com/icons/svg/254/254030.svg"
              height="25"
              alt="posts"
            />
            Posts:
            <span>{posts}</span>
          </p>
          <p>
            <img
              src="https://image.flaticon.com/icons/svg/134/134908.svg"
              height="25"
              alt="comments"
            />
            Comments:
            <span>{posts}</span>
          </p>
          <p>
            <img
              src="https://image.flaticon.com/icons/svg/891/891391.svg"
              height="25"
              alt="logout"
            />
            logout
          </p>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    posts: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.users.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
