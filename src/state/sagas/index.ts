import {SagaMiddleware} from 'redux-saga';

import userSaga from './user';

export const runSagas = (sagaMiddleware: SagaMiddleware<object>): void => {
  [userSaga].forEach(sagaMiddleware.run);
};
