import POST_ACTIONS from '../../constants/posts';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
};

/**
 * REDUCER
 */
export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    /**
     * GET POSTS
     */
    case POST_ACTIONS.GET_POSTS_REQUEST:
      return { ...state, loading: true, error: '' };
    case POST_ACTIONS.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        loaded: true,
      };
    case POST_ACTIONS.GET_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload.data };

    /**
     * ADD POSTS
     */
    case POST_ACTIONS.ADD_POST_REQUEST:
      return { ...state, loading: true, error: '' };
    case POST_ACTIONS.ADD_POST_SUCCESS:
      return {
        loading: false,
        data: [...state.data, action.payload.data],
        loaded: true,
      };
    case POST_ACTIONS.ADD_POST_ERROR:
      return { ...state, loading: false, error: action.payload.data };

    /**
     * DEFAULT
     */
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  // GET POSTS
  getPostsRequest: () => ({
    type: POST_ACTIONS.GET_POSTS_REQUEST,
  }),
  getPostsSuccess: data => ({
    type: POST_ACTIONS.GET_POSTS_SUCCESS,
    payload: { data },
  }),
  getPostsError: data => ({
    type: POST_ACTIONS.GET_POSTS_ERROR,
    payload: { data },
  }),

  // ADD POST
  addPostRequest: post => ({
    type: POST_ACTIONS.ADD_POST_REQUEST,
    payload: post,
  }),
  addPostSuccess: data => ({
    type: POST_ACTIONS.ADD_POST_SUCCESS,
    payload: { data },
  }),
  addPostError: data => ({
    type: POST_ACTIONS.ADD_POST_ERROR,
    payload: { data },
  }),
};
