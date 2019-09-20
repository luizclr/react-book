import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import POST_ACTIONS from '../../constants/posts';

import Post from '../post/Post';

const PostList = ({ posts, addPost }) => (
  <>
    <button
      type="button"
      onClick={() => addPost({
        id: `id${Math.random()}`,
        name: 'maria',
        picture: '',
        about: 'hello',
      })}
    >
      add post
    </button>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch({ type: POST_ACTIONS.ADD_POST, payload: post }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
