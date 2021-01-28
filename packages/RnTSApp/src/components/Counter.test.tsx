/**
 * @format
 */
import 'react-native';
import React from 'react';
import Counter from './Counter';
import {Text} from 'react-native';
import {toSlug} from '@thefakeorg/utils';
// import {LoadingButton} from '@thefakeorg/react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const MyApp = () => {
  return (
    <>
      <Counter />
      <Text>{`Using shared lib for generating slug: ${toSlug(
        'hello world',
      )}`}</Text>
      {/*     <LoadingButton /> */}
    </>
  );
};

describe('TestProject', () => {
  it('renders correctly', () => {
    renderer.create(<MyApp />);
  });
});
