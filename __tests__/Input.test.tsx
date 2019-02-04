import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TestForm from './utils/TestForm';
import Input from '../src/Input';

afterEach(cleanup);

function TestFormWithInput(props) {
  return (
    <TestForm initialValues={{ testInput: '' }}>
      <Input label="Test Input" name="testInput" {...props} />
    </TestForm>
  );
}

describe('<Input />', () => {
  test('renders without exploding', () => {
    const { container, getByText, debug } = render(<TestFormWithInput />);

    const form = container.querySelector('form');
    expect(form).toBeTruthy();

    expect(container.querySelector('input[type=text]')).toBeTruthy();
    expect(container.querySelector('input[type=text]')).toHaveAttribute('id', 'testInput');

    expect(getByText('Test Input')).toBeTruthy();
    expect(getByText('Test Input')).toHaveAttribute('for', 'testInput');
  });

  test('input value changes on change', () => {
    const { container } = render(<TestFormWithInput />);

    const input = container.querySelector(
      'input[name="testInput"]'
    ) as HTMLInputElement;

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'lorem ipsum 23' } });
    expect(input.value).toBe('lorem ipsum 23');
  });

  test('input value change for numbers', () => {
    const { container } = render(<TestFormWithInput type="number" />);

    const input = container.querySelector(
      'input[name="testInput"]'
    ) as HTMLInputElement;

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 23 } });
    expect(parseInt(input.value, 10)).toBe(23);
  });

  test('input value change for password', () => {
    const { container } = render(<TestFormWithInput type="password" />);

    const input = container.querySelector(
      'input[name="testInput"]'
    ) as HTMLInputElement;

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'qwerty123' } });
    expect(input.value).toBe('qwerty123');
  });

  test('input value change for email', () => {
    const { container } = render(<TestFormWithInput type="email" />);

    const input = container.querySelector(
      'input[name="testInput"]'
    ) as HTMLInputElement;

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'abhi@workpop.com' } });
    expect(input.value).toBe('abhi@workpop.com');
  });
});
