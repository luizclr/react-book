const INITIAL_STATE = {
  isOn: false,
};

export const Types = {
  TOGGLE_NAV: 'TOGGLE_NAV',
};

/**
 * REDUCER
 */
export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_NAV:
      return { ...state, isOn: action.payload };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  toggleNav: status => ({
    type: Types.TOGGLE_NAV,
    payload: status,
  }),
};
