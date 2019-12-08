import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

it('renders correctly when there are no input to the form', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});
