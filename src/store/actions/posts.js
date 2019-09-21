import POST_ACTIONS from '../../constants/posts';

export const getPostRequest = () => ({
  type: POST_ACTIONS.ADD_POST_REQUEST,
});

export const getPostSuccess = data => ({
  type: POST_ACTIONS.ADD_POST_SUCCESS,
  payload: { data },
});

export const addPostRequest = post => ({
  type: POST_ACTIONS.ADD_POST_REQUEST,
  payload: post,
});

export const addPostSuccess = data => ({
  type: POST_ACTIONS.ADD_POST_SUCCESS,
  payload: { data },
});
