import { combineReducers } from 'redux';
import posts from './posts';
import navigation from './navigation';
import users from './users';

export default combineReducers({
  posts,
  navigation,
  users,
});
