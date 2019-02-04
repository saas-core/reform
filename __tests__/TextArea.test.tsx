import 'jest-dom/extend-expect';
import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import TestForm from './utils/TestForm';
import TextArea from '../src/TextArea';

afterEach(cleanup);

function TestFormWithTextArea(props) {
  return (
    <TestForm initialValues={{ testTextArea: '' }}>
      <TextArea label="Test Text Area" name="testTextArea" {...props} />
    </TestForm>
  );
}

describe('<Input />', () => {
  test('renders without exploding', () => {
    const { container, getByText } = render(<TestFormWithTextArea />);

    expect(container.querySelector('textarea')).toBeTruthy();
    expect(container.querySelector('textarea')).toHaveAttribute('id', 'testTextArea');

    expect(getByText('Test Text Area')).toBeTruthy();
    expect(getByText('Test Text Area')).toHaveAttribute('for', 'testTextArea');
  });

  test('value changes on change', () => {
    const { container } = render(<TestFormWithTextArea />);

    const textarea = container.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;

    expect(textarea.value).toBe('');
    fireEvent.change(textarea, { target: { value: 'lorem ipsum 23' } });
    expect(textarea.value).toBe('lorem ipsum 23');
  });

  test('accepts textarea attributes', () => {
    const { container, getByText } = render(<TestFormWithTextArea rows={71} />);

    expect(container.querySelector('textarea')).toHaveAttribute('rows', '71');
  });
});
