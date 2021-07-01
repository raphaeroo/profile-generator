import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {reducers} from './ducks';
import {runSagas} from './sagas';

const appReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof appReducer>;

const sagaMiddleware = createSagaMiddleware();

export const appStore = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware),
);

runSagas(sagaMiddleware);
