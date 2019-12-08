import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('renders correctly when there are no input to the form', () => {
    const tree = renderer
        .create(<Button type="button" label="Submit" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
