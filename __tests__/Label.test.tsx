import 'jest-dom/extend-expect';
import * as React from 'react';
import {
  cleanup,
  render,
} from 'react-testing-library';
import Label from '../src/Label';

afterEach(cleanup);

describe('<Label />', () => {

  test('renders without exploding', () => {
    const { getByText, container } = render(
      <Label htmlFor="name">Name</Label>,
    );

    expect(getByText('Name')).toBeTruthy();

    const label = container.querySelector('label');

    expect(label).toBeTruthy();
    expect(label).toHaveAttribute('for', 'name');
  });

  test('renders with ReactNode as children', () => {
    const { getByText } = render(
      <Label htmlFor="name">
        <div>
          foo
        </div>
      </Label>
    );

    expect(getByText('foo')).toBeTruthy();
  });
});
