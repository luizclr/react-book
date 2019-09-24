/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composeWithDevTools(composer));
sagaMiddleware.run(sagas);

export default store;
