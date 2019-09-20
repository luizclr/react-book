import DataTemplate from '../../../templates/data';
import POST_ACTIONS from '../../constants/posts';

const INITIAL_STATE = DataTemplate;

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_ACTIONS.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
