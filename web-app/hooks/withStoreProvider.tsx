import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@thefakeorg/store';

const withStoreProvider = (WrappedComponent: any) => (props: any) => {
  return (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
};


export default withStoreProvider;