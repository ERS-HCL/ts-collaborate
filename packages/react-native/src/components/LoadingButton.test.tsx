/**
 * @format
 */
import 'react-native';
import React from 'react';
import LoadingButton from './LoadingButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const MyApp = () => {
  return (
    <>
      <LoadingButton />
    </>
  );
};

describe('TestProject', () => {
  it('renders correctly', () => {
    renderer.create(<MyApp />);
  });
});
