import { all, takeLatest } from 'redux-saga/effects';

import { Types as PostActions } from '../ducks/posts';
import { Types as UsersActions } from '../ducks/users';

import { addPost, getPosts } from './posts';
import { getUsers } from './users';

export default function* rootSaga() {
  yield all([
    // POSTS
    takeLatest(PostActions.GET_POSTS_REQUEST, getPosts),
    takeLatest(PostActions.ADD_POST_REQUEST, addPost),
    // USERS
    takeLatest(UsersActions.GET_USERS_REQUEST, getUsers),
  ]);
}
