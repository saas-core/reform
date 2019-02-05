import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TestForm from '../__tests__/utils/TestForm';
import Input from '../src/Input';
import Select from '../src/Select';
import Radio from '../src/Radio';
import RadioGroup from '../src/RadioGroup';
import Checkbox from '../src/Checkbox';
import TestCheckboxGroup from '../__tests__/utils/TestCheckboxGroup';
import TextArea from '../src/TextArea';
import StyledInput from './styled-forms/components/Input';
import StyledTextArea from './styled-forms/components/TextArea';
import StyledCheckboxGroup from './styled-forms/components/CheckboxGroup';
import StyledCheckbox from './styled-forms/components/Checkbox';
import StyledRadio from './styled-forms/components/Radio';
import StyledRadioGroup from './styled-forms/components/RadioGroup';
import { RichText } from '../src/RichText';

const stories = storiesOf('Forms', module);

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

const initialValues = {
  name: '',
  age: '',
  color: '',
  email: '',
  password: '',
  text: '',
  cool: '',
  boolean: '',
  singleConfirm: '',
  languages: [],
  richText: '<p>Lorem ipsum</p><p>Foo Bar</p>'
};

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

stories
  .add('Primitives', function() {
    return (
      <TestForm initialValues={initialValues}>
        <Input label="Name" name="name" />
        <br />
        <Input label="Age" name="age" type="number" />
        <br />
        <Input label="Password" name="password" type="password" />
        <br />
        <Input label="Email" name="email" type="email" />
        <br />
        <TextArea label="Text area" name="text" />
        <br />
        <Select
          label="Color"
          name="color"
          options={colorOptions}
          placeholder="Pick a color"
        />
        <h4>Radio</h4>
        <Radio label="Are you cool?" name="cool" value="IS_COOL" />
        <RadioGroup options={radioOptions} label="Yes or no?" name="boolean" />
        <h4>Checkbox</h4>
        <Checkbox
          label="Check this to confirm?"
          name="singleConfirm"
        />
        <TestCheckboxGroup options={checkboxOptions} label="Language" name="languages" />
        <br />
        <RichText name="richText" label="Rich Text" />
      </TestForm>
    );
  })
  .add('Styled Forms Example', function() {
    return (
      <TestForm initialValues={initialValues}>
        <StyledInput label="Name" name="name" />
        <br />
        <StyledInput label="Age" name="age" type="number" />
        <br />
        <StyledInput label="Password" name="password" type="password" />
        <br />
        <StyledInput label="Email" name="email" type="email" />
        <br />
        <StyledTextArea label="Text area" name="text" />
        <br />
        <Select
          label="Color"
          name="color"
          options={colorOptions}
          placeholder="Pick a color"
        />
        <h4>Radio</h4>
        <StyledRadio label="Are you cool?" name="cool" value="IS_COOL" />
        <StyledRadioGroup options={radioOptions} label="Yes or no?" name="boolean" />
        <h4>Checkbox</h4>
        <StyledCheckbox
          label="Check this to confirm?"
          name="singleConfirm"
        />
        <StyledCheckboxGroup options={checkboxOptions} label="Language" name="languages" />
        <br />
      </TestForm>
    );
  });
