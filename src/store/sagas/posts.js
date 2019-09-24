import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getPostSuccess } from '../actions/posts';

export function* getPost() {
  const { data } = yield call(api.get, '/posts/');

  yield put(getPostSuccess(data));
}
