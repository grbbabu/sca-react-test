import React from 'react';
import renderer from 'react-test-renderer';
import Input from './index';

it('renders correctly when there are no input to the form', () => {
    const tree = renderer
        .create(
            <Input
                label="First Name"
                type="text"
                id="firstName"
                name="firstName"
                value="firstName"
                onChange={e => e.target.value}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
