import { combineReducers } from 'redux';
import posts from './posts';
import navigation from './navigation';

export default combineReducers({
  posts,
  navigation,
});
