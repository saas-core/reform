import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TestForm from './utils/TestForm';
import RadioGroup from '../src/RadioGroup';

afterEach(cleanup);

const radioOptions = [
  {
    label: 'Yes',
    value: 'yes'
  },
  {
    label: 'No',
    value: 'no'
  }
];

function TestFormWithRadioGroup(props) {
  return (
    <TestForm initialValues={{ testRadio: '' }}>
      <RadioGroup options={radioOptions} label="Yes or no?" name="testRadio" {...props} />
    </TestForm>
  );
}

describe('<RadioGroup />', () => {
  test('renders without exploding', () => {
    const { container, getByText } = render(<TestFormWithRadioGroup />);

    expect(getByText('Yes or no?')).toBeTruthy();

    expect(container.querySelector('input[value="yes"]')).toBeTruthy();
    expect(container.querySelector('input[value="yes"]')).toHaveAttribute('id', 'testRadio_yes');
    expect(getByText('Yes')).toBeTruthy();
    expect(getByText('Yes')).toHaveAttribute('for', 'testRadio_yes');

    expect(container.querySelector('input[value="no"]')).toBeTruthy();
    expect(getByText('No')).toBeTruthy();
    expect(getByText('No')).toHaveAttribute('for', 'testRadio_no');
    expect(container.querySelector('input[value="no"]')).toHaveAttribute('id', 'testRadio_no');
  });

  test('radio value changes on change', () => {
    const { container } = render(<TestFormWithRadioGroup />);

    const radioYes = container.querySelector(
      'input[value="yes"]'
    ) as HTMLInputElement;

    const radioNo = container.querySelector(
      'input[value="no"]'
    ) as HTMLInputElement;

    expect(radioYes.value).toBe('yes');
    expect(radioYes.checked).toBe(false);

    fireEvent.change(radioYes, { target: { checked: 'true' } });
    expect(radioYes.checked).toBe(true);

    expect(radioNo.value).toBe('no');
    expect(radioNo.checked).toBe(false);

    fireEvent.change(radioNo, { target: { checked: 'true' } });
    expect(radioNo.checked).toBe(true);

    expect(radioYes.checked).toBe(false);
  });
});
