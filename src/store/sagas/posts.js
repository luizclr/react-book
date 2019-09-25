import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PostActions } from '../ducks/posts';

export function* getPosts() {
  try {
    const { data } = yield call(api.get, '/posts');

    yield put(PostActions.getPostsSuccess(data));
  } catch (error) {
    yield put(PostActions.getPostsError(error.message));
  }
}

export function* addPost(post) {
  try {
    const { data } = yield call(api.post, '/posts', post.payload);

    yield put(PostActions.addPostSuccess(data));
  } catch (error) {
    yield put(PostActions.addPostError(error.message));
  }
}
