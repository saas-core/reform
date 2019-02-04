import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TestForm from '../__tests__/utils/TestForm';
import Input from '../src/Input';
import Select from '../src/Select';
import Radio from '../src/Radio';
import RadioGroup from '../src/RadioGroup';
import Checkbox from '../src/Checkbox';
import CheckboxGroup from '../src/CheckboxGroup';
import TestCheckboxGroup from '../__tests__/utils/TestCheckboxGroup';
import TextArea from '../src/TextArea';
import WorkpopInput from './workpop-forms/components/Input';
import WorkpopTextArea from './workpop-forms/components/TextArea';
import WorkpopCheckboxGroup from './workpop-forms/components/CheckboxGroup';
import WorkpopCheckbox from './workpop-forms/components/Checkbox';
import WorkpopRadio from './workpop-forms/components/Radio';
import WorkpopRadioGroup from './workpop-forms/components/RadioGroup';

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
      </TestForm>
    );
  })
  .add('Workpop Forms Example', function() {
    return (
      <TestForm initialValues={initialValues}>
        <WorkpopInput label="Name" name="name" />
        <br />
        <WorkpopInput label="Age" name="age" type="number" />
        <br />
        <WorkpopInput label="Password" name="password" type="password" />
        <br />
        <WorkpopInput label="Email" name="email" type="email" />
        <br />
        <WorkpopTextArea label="Text area" name="text" />
        <br />
        <Select
          label="Color"
          name="color"
          options={colorOptions}
          placeholder="Pick a color"
        />
        <h4>Radio</h4>
        <WorkpopRadio label="Are you cool?" name="cool" value="IS_COOL" />
        <WorkpopRadioGroup options={radioOptions} label="Yes or no?" name="boolean" />
        <h4>Checkbox</h4>
        <WorkpopCheckbox
          label="Check this to confirm?"
          name="singleConfirm"
        />
        <WorkpopCheckboxGroup options={checkboxOptions} label="Language" name="languages" />
        <br />
      </TestForm>
    );
  });
