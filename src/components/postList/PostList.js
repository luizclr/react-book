import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as PostActions } from '../../store/ducks/posts';

import PostForm from '../postForm/postForm';
import Post from '../post/Post';

class PostList extends Component {
  componentDidMount() {
    const { getPostsRequest } = this.props;
    getPostsRequest();
  }

  render() {
    const {
      posts, loading, error, addPostRequest,
    } = this.props;

    return (
      <>
        <PostForm addPost={addPostRequest} />
        {posts && (
          <ul>
            {posts
              .map(post => (
                <li key={post.id}>
                  <Post post={post} />
                </li>
              ))
              .sort((a, b) => (a.id > b.id ? 1 : -1))}
          </ul>
        )}
        {loading && <span>loading...</span>}
        {error && !loading && <span>{error}</span>}
      </>
    );
  }
}

PostList.defaultProps = {
  posts: [],
  error: '',
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      about: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  addPostRequest: PropTypes.func.isRequired,
  getPostsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.data,
  loading: state.posts.loading,
  loaded: state.posts.loaded,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
