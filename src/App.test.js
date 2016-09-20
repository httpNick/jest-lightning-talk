import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import incrementAsync from './some-async-thing';

it('adds element when button is clicked', () => {

  const component = renderer
    .create(<App />);

  let tree = component
    .toJSON();

  let button = tree.children
    .find(x => x.type === 'button');

  console.log(button);

  expect(tree)
    .toMatchSnapshot();

  button.props
    .onClick();

  tree = component
    .toJSON();
  expect(tree)
    .toMatchSnapshot();
});

it('increments my number', () => {
  return incrementAsync(1)
    .then(x => expect(x).toEqual(2));
});
