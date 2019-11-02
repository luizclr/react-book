const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
  user: {
    id: 1,
    picture: 'https://picsum.photos/id/777',
    name: 'Nita Reese',
    posts: 1,
  },
};

/**
 * TYPES
 */
export const Types = {
  ADD_USER: 'add-user',
  REMOVE_USER: 'remove-user',
  REMOVE_USERS: 'remove-users',
  GET_USERS_REQUEST: 'get-users-request',
  GET_USERS_SUCCESS: 'get-users-success',
  GET_USERS_ERROR: 'get-users-error',
};

/**
 * REDUCER
 */
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return { ...state, user: action.payload.data };
    case Types.REMOVE_USER:
      return { ...state, user: {} };
    case Types.REMOVE_USERS:
      return { ...state, data: [] };
    case Types.GET_USERS_REQUEST:
      return { ...state, loading: true, error: '' };
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        loaded: true,
      };
    case Types.GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload.data };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  addUser: user => ({
    type: Types.ADD_USER,
    payload: user,
  }),
  removeUser: () => ({
    type: Types.REMOVE_USER,
  }),
  removeUsers: () => ({
    type: Types.REMOVE_USERS,
  }),
  getUsersRequest: () => ({
    type: Types.GET_USERS_REQUEST,
  }),
  getUsersSuccess: data => ({
    type: Types.GET_USERS_SUCCESS,
    payload: { data },
  }),
  getUsersError: data => ({
    type: Types.GET_USERS_ERROR,
    payload: { data },
  }),
};
