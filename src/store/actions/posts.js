import POST_ACTIONS from '../../constants/posts';

/**
 * GET POSTS
 */
export const getPostsRequest = () => ({
  type: POST_ACTIONS.GET_POSTS_REQUEST,
});
export const getPostsSuccess = data => ({
  type: POST_ACTIONS.GET_POSTS_SUCCESS,
  payload: { data },
});
export const getPostsError = data => ({
  type: POST_ACTIONS.GET_POSTS_ERROR,
  payload: { data },
});

/**
 * ADD POST
 */
export const addPostRequest = post => ({
  type: POST_ACTIONS.ADD_POST_REQUEST,
  payload: post,
});
export const addPostSuccess = data => ({
  type: POST_ACTIONS.ADD_POST_SUCCESS,
  payload: { data },
});
export const addPostError = data => ({
  type: POST_ACTIONS.ADD_POST_ERROR,
  payload: { data },
});
