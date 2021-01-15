import { put, takeEvery } from 'redux-saga/effects';
import { incrementAsync, incrementByAmount } from './CounterSlice';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* incrementSagaAsync(amount: any) {
  yield delay(1000);
  yield put(incrementByAmount(amount.payload));
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync as any, incrementSagaAsync);
}
