import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import {
  addPostSuccess, addPostError, getPostsSuccess, getPostsError,
} from '../actions/posts';

export function* getPosts() {
  try {
    const { data } = yield call(api.get, '/posts');

    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsError(error.message));
  }
}

export function* addPost(post) {
  try {
    const { data } = yield call(api.post, '/posts', post.payload);

    yield put(addPostSuccess(data));
  } catch (error) {
    yield put(addPostError(error.message));
  }
}
