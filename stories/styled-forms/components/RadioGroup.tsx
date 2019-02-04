import * as React from 'react';
import RadioGroup from '../../../src/RadioGroup';
import WorkpopRadio from './Radio';

export default function WorkpopRadioGroup(props) {
  return (
    <RadioGroup
      {...props}
      RadioComponent={WorkpopRadio}
    />
  );
}
