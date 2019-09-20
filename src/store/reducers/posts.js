import DataTemplate from '../../../templates/data';

const INITIAL_STATE = DataTemplate;

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
