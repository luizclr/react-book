import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import { getPosts, addPost } from '../../src/store/sagas/posts';
import { Creators as PostActions } from '../../src/store/ducks/posts';

const apiMock = new MockAdapter(api);

describe('Posts Sagas:', () => {
  let dispatched;

  beforeEach(() => {
    dispatched = [];
  });

  describe('- getPosts:', () => {
    it("should be able to call 'getPostsSuccess' on SUCCESS", async () => {
      apiMock.onGet('/posts').reply(200, ['post 1', 'post 2']);

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        getPosts,
      ).toPromise();

      expect(dispatched).toContainEqual(PostActions.getPostsSuccess(['post 1', 'post 2']));
    });

    it("should be able to call 'getPostsError' on ERROR", async () => {
      apiMock.onGet('/posts').reply(400);

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        getPosts,
      ).toPromise();

      expect(dispatched).toContainEqual(
        PostActions.getPostsError('Request failed with status code 400'),
      );
    });
  });

  describe('- addPost:', () => {
    it("should be able to call 'addPostSuccess' on SUCCESS", async () => {
      apiMock.onPost('/posts').reply(200, { desc: 'description' });

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        addPost,
        {}, // addPost patameter
      ).toPromise();

      expect(dispatched).toContainEqual(PostActions.addPostSuccess({ desc: 'description' }));
    });

    it("should be able to call 'addPostError' on ERROR", async () => {
      apiMock.onPost('/posts').reply(400);

      await runSaga(
        {
          dispatch: action => {
            dispatched.push(action);
          },
        },
        addPost,
        {}, // addPost() patameter
      ).toPromise();

      expect(dispatched).toContainEqual(
        PostActions.addPostError('Request failed with status code 400'),
      );
    });
  });
});
