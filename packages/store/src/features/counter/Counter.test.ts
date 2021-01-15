import counter, {
  counterInitialState,
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from './CounterSlice';
import { runSaga } from 'redux-saga';
import { incrementSagaAsync } from './CounterSaga';

describe('Counter Reducer', () => {
  it('should handle undefined initial state', () => {
    expect(counter(undefined, { type: 'init' })).toEqual(counterInitialState);
  });

  it('should handle undefined initial state with selector', () => {
    const nextState = counter(undefined, { type: 'any random type' });
    const rootState = { counter: nextState };
    expect(selectCount(rootState)).toEqual(0);
    expect(nextState).toEqual(counterInitialState);
  });

  it('should handle increment of undefined initial state', () => {
    expect(counter(undefined, increment)).toEqual({ value: 1 });
  });

  it('should handle increment of initial state', () => {
    expect(counter({ value: 0 }, increment)).toEqual({ value: 1 });
  });

  it('should handle decrement of undefined initial state', () => {
    expect(counter(undefined, decrement)).toEqual({ value: -1 });
  });

  it('should handle decrement of initial state', () => {
    expect(counter({ value: 1 }, decrement)).toEqual({ value: 0 });
  });

  it('should handle increment By Amount of undefined initial state', () => {
    expect(counter(undefined, incrementByAmount(10))).toEqual({ value: 10 });
  });

  it('should handle increment By Amount of initial state', () => {
    expect(counter({ value: 1 }, incrementByAmount(10))).toEqual({ value: 11 });
  });

  it('should execute saga', async () => {
    const dispatched: any[] = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => counterInitialState,
      },
      incrementSagaAsync,
      { payload: Number(10) }
    ).toPromise();

    expect(dispatched).toContainEqual(incrementByAmount(10));
  });
});
