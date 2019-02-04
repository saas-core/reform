import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TestForm from './utils/TestForm';
import Radio from '../src/Radio';

afterEach(cleanup);

function TestFormWithRadio(props) {
  return (
    <TestForm initialValues={{ testRadio: '' }}>
      <Radio label="Are you cool?" name="testRadio" value="IS_COOL" {...props} />
    </TestForm>
  );
}

describe('<Radio />', () => {
  test('renders without exploding', () => {
    const { container, getByText } = render(<TestFormWithRadio />);

    expect(container.querySelector('input[type="radio"]')).toBeTruthy();
    expect(container.querySelector('input[type="radio"]')).toHaveAttribute('id', 'testRadio');

    expect(getByText('Are you cool?')).toBeTruthy();
    expect(getByText('Are you cool?')).toHaveAttribute('for', 'testRadio');
  });

  test('radio value changes on change', () => {
    const { container } = render(<TestFormWithRadio />);

    const radio = container.querySelector(
      'input[name="testRadio"]'
    ) as HTMLInputElement;

    expect(radio.value).toBe('IS_COOL');
    expect(radio.checked).toBe(false);

    fireEvent.change(radio, { target: { checked: 'true' } });
    expect(radio.checked).toBe(true);
  });
});
