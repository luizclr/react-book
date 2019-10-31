const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
  user: {},
};

/**
 * TYPES
 */

export const Types = {
  GET_POSTS_REQUEST: 'get-posts-request',
  GET_POSTS_SUCCESS: 'get-posts-success',
  GET_POSTS_ERROR: 'get-posts-error',
  ADD_POST_REQUEST: 'add-post-request',
  ADD_POST_SUCCESS: 'add-post-success',
};
/**
 * REDUCER
 */
export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    /**
     * GET POSTS
     */
    case Types.GET_POSTS_REQUEST:
      return { ...state, loading: true, error: '' };
    case Types.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        loaded: true,
      };
    case Types.GET_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload.data };

    /**
     * ADD POSTS
     */
    case Types.ADD_POST_REQUEST:
      return { ...state, loading: true, error: '' };
    case Types.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        loaded: true,
      };
    case Types.ADD_POST_ERROR:
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
    type: Types.GET_POSTS_REQUEST,
  }),
  getPostsSuccess: data => ({
    type: Types.GET_POSTS_SUCCESS,
    payload: { data },
  }),
  getPostsError: data => ({
    type: Types.GET_POSTS_ERROR,
    payload: { data },
  }),

  // ADD POST
  addPostRequest: post => ({
    type: Types.ADD_POST_REQUEST,
    payload: post,
  }),
  addPostSuccess: data => ({
    type: Types.ADD_POST_SUCCESS,
    payload: { data },
  }),
  addPostError: data => ({
    type: Types.ADD_POST_ERROR,
    payload: { data },
  }),
};
