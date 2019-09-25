import POST_ACTIONS from '../../constants/posts';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
};

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
