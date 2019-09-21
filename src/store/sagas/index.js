import { all, takeLatest } from 'redux-saga/effects';
import POST_ACTIONS from '../../constants/posts';

import { getPost } from './posts';

export default function* rootSaga() {
  yield all([takeLatest(POST_ACTIONS.GET_POST_REQUEST, getPost)]);
}
