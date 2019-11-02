import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import { getUsers } from '../../src/store/sagas/users';
import { Creators as UsersActions } from '../../src/store/ducks/users';

const apiMock = new MockAdapter(api);

describe('Users Sagas:', () => {
  let dispatched;

  beforeEach(() => {
    dispatched = [];
  });

  describe('- getUsers:', () => {
    it("should be able to call 'getUsersSuccess' on SUCCESS", async () => {
      apiMock.onGet('/users').reply(200, [{ id: 1, name: '1' }, { id: 2, name: '2' }]);

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        getUsers,
      ).toPromise();

      expect(dispatched).toContainEqual(
        UsersActions.getUsersSuccess([{ id: 1, name: '1' }, { id: 2, name: '2' }]),
      );
    });

    it("should be able to call 'getUsersError' on ERROR", async () => {
      apiMock.onGet('/users').reply(400);

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        getUsers,
      ).toPromise();

      expect(dispatched).toContainEqual(
        UsersActions.getUsersError('Request failed with status code 400'),
      );
    });
  });
});
