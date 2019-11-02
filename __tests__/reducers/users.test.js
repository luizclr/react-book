import usersReducer, { Creators as UsersActions } from '../../src/store/ducks/users';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
  user: {},
};

const user = { id: 1, name: 'name' };

describe('users Reducers:', () => {
  describe('Get Users Reducers:', () => {
    it('should be loadind without error', () => {
      const state = usersReducer(INITIAL_STATE, UsersActions.getUsersRequest());

      expect(state).toEqual({
        loading: true,
        loaded: false,
        error: '',
        data: [],
        user: {},
      });
    });

    it('should be get users list', () => {
      const state = usersReducer(INITIAL_STATE, UsersActions.getUsersSuccess([user]));

      expect(state).toEqual({
        loading: false,
        loaded: true,
        error: '',
        data: [
          {
            id: 1,
            name: 'name',
          },
        ],
        user: {},
      });
    });

    it('should be show the error message', () => {
      const state = usersReducer(INITIAL_STATE, UsersActions.getUsersError('error'));

      expect(state).toEqual({
        loading: false,
        loaded: false,
        error: 'error',
        data: [],
        user: {},
      });
    });
  });

  it('should save a user', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.addUser(user));

    expect(state).toEqual({
      loading: false,
      loaded: false,
      error: '',
      data: [],
      user: {
        id: 1,
        name: 'name',
      },
    });
  });

  it('should remove the user', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.removeUser());

    expect(state).toEqual({
      loading: false,
      loaded: false,
      error: '',
      data: [],
      user: {},
    });
  });

  it('should remove users list', () => {
    const state = usersReducer({ ...INITIAL_STATE, data: [user] }, UsersActions.removeUsers());

    expect(state).toEqual({
      loading: false,
      loaded: false,
      error: '',
      data: [],
      user: {},
    });
  });
});
