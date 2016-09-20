import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

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
