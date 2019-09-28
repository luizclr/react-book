import postReducer, { Creators as PostActions } from '../../src/store/ducks/posts';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  data: [],
};

const post = { id: 1, desc: 'description' };

describe('Posts Reducers:', () => {
  describe('Get Posts Reducers:', () => {
    it('should be loadind without error', () => {
      const state = postReducer(INITIAL_STATE, PostActions.getPostsRequest());

      expect(state).toEqual({
        loading: true,
        loaded: false,
        error: '',
        data: [],
      });
    });

    it('should be add a new post', () => {
      const state = postReducer(INITIAL_STATE, PostActions.getPostsSuccess([post]));

      expect(state).toEqual({
        loading: false,
        loaded: true,
        error: '',
        data: [
          {
            id: 1,
            desc: 'description',
          },
        ],
      });
    });

    it('should be show the error message', () => {
      const state = postReducer(INITIAL_STATE, PostActions.getPostsError('error'));

      expect(state).toEqual({
        loading: false,
        loaded: false,
        error: 'error',
        data: [],
      });
    });
  });

  describe('Add Post Reducers:', () => {
    it('should be loadind without error', () => {
      const state = postReducer(INITIAL_STATE, PostActions.addPostRequest());

      expect(state).toEqual({
        loading: true,
        loaded: false,
        error: '',
        data: [],
      });
    });

    it('should be add a new post', () => {
      const state = postReducer(INITIAL_STATE, PostActions.addPostSuccess(post));

      expect(state).toEqual({
        loading: false,
        loaded: true,
        error: '',
        data: [
          {
            id: 1,
            desc: 'description',
          },
        ],
      });
    });

    it('should be show the error message', () => {
      const state = postReducer(INITIAL_STATE, PostActions.addPostError('error'));

      expect(state).toEqual({
        loading: false,
        loaded: false,
        error: 'error',
        data: [],
      });
    });
  });
});
