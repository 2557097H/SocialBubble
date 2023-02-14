import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

//https://docs.expo.dev/guides/testing-with-jest/

describe('<App />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});