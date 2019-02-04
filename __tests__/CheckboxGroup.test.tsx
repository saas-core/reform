import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import TestForm from './utils/TestForm';
import TestCheckboxGroup from './utils/TestCheckboxGroup';

afterEach(cleanup);

const checkboxOptions = [
  {
    label: 'English',
    value: 'EN'
  },
  {
    label: 'French',
    value: 'FR'
  },
  {
    label: 'German',
    value: 'DE'
  },
];

function TestFormWithCheckobxGroup({ onSubmit, ...rest }: { onSubmit?: any }) {
  return (
    <TestForm initialValues={{ testGroup: [] }} onSubmit={onSubmit}>
      <TestCheckboxGroup options={checkboxOptions} label="Test Checkbox Group" name="testGroup" {...rest} />
    </TestForm>
  );
}

describe('<CheckboxGroup />', () => {
  test('renders without exploding', () => {
    const { container, getByText } = render(<TestFormWithCheckobxGroup />);

    expect(getByText('Test Checkbox Group')).toBeTruthy();

    checkboxOptions.forEach(({ value, label }) => {
      expect(getByText(label)).toBeTruthy();
      expect(getByText(label)).toHaveAttribute('for', `testGroup_${value}`);
      expect(container.querySelector(`input[value="${value}"]`)).toBeTruthy();
    });
  });

  test('checkbox value changes on change', async () => {
    const jestSubmit = jest.fn();

    const { container, getByText } = render(<TestFormWithCheckobxGroup onSubmit={jestSubmit} />);

    const fireSubmit = async () => {
      jestSubmit.mockClear();
      fireEvent.click(getByText('Submit'));

      await wait(() => {
        setTimeout(() => true, 200);
      });
    };

    const checkbox1 = container.querySelector(
      'input[value="EN"]'
    ) as HTMLInputElement;
    const checkbox2 = container.querySelector(
      'input[value="FR"]'
    ) as HTMLInputElement;
    const checkbox3 = container.querySelector(
      'input[value="DE"]'
    ) as HTMLInputElement;

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: [],
    }, expect.any(Object));

    fireEvent.click(checkbox1);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(false);
    expect(checkbox3.checked).toBe(false);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: ['EN'],
    }, expect.any(Object));

    fireEvent.click(checkbox2);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(false);

    fireEvent.click(checkbox3);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(true);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: ['EN', 'FR', 'DE'],
    }, expect.any(Object));

    fireEvent.click(checkbox1);
    expect(checkbox1.checked).toBe(false);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(true);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: ['FR', 'DE'],
    }, expect.any(Object));
  });

  test('can select/deselect all', async () => {
    const jestSubmit = jest.fn();

    const { container, getByText } = render(<TestFormWithCheckobxGroup onSubmit={jestSubmit} />);

    const fireSubmit = async () => {
      jestSubmit.mockClear();
      fireEvent.click(getByText('Submit'));

      await wait(() => {
        setTimeout(() => true, 200);
      });
    };

    const checkboxAll = container.querySelector(
      'input[value="all"]'
    ) as HTMLInputElement;
    const checkbox1 = container.querySelector(
      'input[value="EN"]'
    ) as HTMLInputElement;
    const checkbox2 = container.querySelector(
      'input[value="FR"]'
    ) as HTMLInputElement;
    const checkbox3 = container.querySelector(
      'input[value="DE"]'
    ) as HTMLInputElement;

    fireEvent.click(checkboxAll);
    expect(checkboxAll.checked).toBe(true);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(true);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: ['EN', 'FR', 'DE'],
    }, expect.any(Object));

    fireEvent.click(checkbox2);
    expect(checkboxAll.checked).toBe(false);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(false);
    expect(checkbox3.checked).toBe(true);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: ['EN', 'DE'],
    }, expect.any(Object));

    fireEvent.click(checkboxAll);
    expect(checkboxAll.checked).toBe(true);
    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(true);

    fireEvent.click(checkboxAll);
    expect(checkboxAll.checked).toBe(false);
    expect(checkbox1.checked).toBe(false);
    expect(checkbox2.checked).toBe(false);
    expect(checkbox3.checked).toBe(false);

    await fireSubmit();

    expect(jestSubmit).toHaveBeenCalledWith({
      testGroup: [],
    }, expect.any(Object));
  });
});
