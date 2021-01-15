import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from '@thefakeorg/store';

import withStoreProvider from '../hooks/withStoreProvider';
import CounterBase from './CounterBase';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <CounterBase
      onDown={() => dispatch(decrement())}
      onUp={() => dispatch(increment())}
      count={count}
    />
  );
};

export default withStoreProvider(Counter);
