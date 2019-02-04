import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TestForm from './utils/TestForm';
import Select from '../src/Select';

afterEach(cleanup);

const colorOptions = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
  {
    label: 'Green',
    value: 'green'
  }
];

function TestFormWithSelect(props) {
  return (
    <TestForm initialValues={{ testSelect: '' }}>
      <Select
        label="Test Select"
        name="testSelect"
        options={colorOptions}
        placeholder="Pick an option"
        {...props}
      />
    </TestForm>
  );
}

describe('<Select />', () => {
  test('renders without exploding', () => {
    const { container, getByText } = render(<TestFormWithSelect />);

    expect(container.querySelector('select')).toBeTruthy();
    expect(container.querySelector('select')).toHaveAttribute('id', 'testSelect');

    expect(getByText('Test Select')).toBeTruthy();
    expect(getByText('Test Select')).toHaveAttribute('for', 'testSelect');

    const placeholderOption = container.querySelectorAll('option')[0];

    expect(placeholderOption).toHaveTextContent('Pick an option');
    expect(placeholderOption.value).toBe('');

    colorOptions.forEach(({ value, label }) => {
      expect(getByText(label)).toBeTruthy();
      expect(getByText(label)).toHaveAttribute('value', value);
    });
  });

  test('select value changes on change', () => {
    const { container } = render(<TestFormWithSelect />);

    const input = container.querySelector('select[name="testSelect"]') as HTMLSelectElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'red' } });

    expect(input.value).toBe('red');
  });
});
