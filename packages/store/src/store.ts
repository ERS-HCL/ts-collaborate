import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './features/counter/CounterSlice';
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // add mode as required
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

