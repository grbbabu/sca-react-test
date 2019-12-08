import React from 'react';
import renderer from 'react-test-renderer';
import Subscribe from './index';

it('renders correctly when there are no input to the form', () => {
    const tree = renderer.create(<Subscribe />).toJSON();
    expect(tree).toMatchSnapshot();
});
