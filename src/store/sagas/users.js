import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';

export function* getUsers() {
  try {
    const { data } = yield call(api.get, '/users');

    yield put(UsersActions.getUsersSuccess(data));
  } catch (error) {
    yield put(UsersActions.getUsersError(error.message));
  }
}
