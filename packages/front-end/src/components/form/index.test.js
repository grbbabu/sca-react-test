import React from 'react';
import renderer from 'react-test-renderer';
import Form from './index';

it('renders correctly when there are no input to the form', () => {
    const tree = renderer
        .create(
            <Form>
                <label htmlFor="first">
                    First Name
                    <input type="text" id="first" name="first" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
