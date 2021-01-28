/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const App = () => {
  return <div>Hello</div>;
};

it('renders correctly', () => {
  renderer.create(<App />);
});
