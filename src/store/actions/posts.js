import POST_ACTIONS from '../../constants/posts';

const addPost = post => ({
  type: POST_ACTIONS.ADD_POST,
  payload: post,
});

export default {
  addPost,
};
