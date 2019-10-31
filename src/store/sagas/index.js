import { all, takeLatest } from 'redux-saga/effects';
import POST_ACTIONS from '../../constants/posts';
import { Types as UsersActions } from '../ducks/users';

import { addPost, getPosts } from './posts';
import { getUsers } from './users';

export default function* rootSaga() {
  yield all([
    // POSTS
    takeLatest(POST_ACTIONS.GET_POSTS_REQUEST, getPosts),
    takeLatest(POST_ACTIONS.ADD_POST_REQUEST, addPost),
    // USERS
    takeLatest(UsersActions.GET_USERS_REQUEST, getUsers),
  ]);
}
