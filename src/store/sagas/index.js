import { all, takeLatest } from 'redux-saga/effects';
import POST_ACTIONS from '../../constants/posts';

import { addPost, getPosts } from './posts';

export default function* rootSaga() {
  yield all([
    takeLatest(POST_ACTIONS.GET_POSTS_REQUEST, getPosts),
    takeLatest(POST_ACTIONS.ADD_POST_REQUEST, addPost),
  ]);
}
