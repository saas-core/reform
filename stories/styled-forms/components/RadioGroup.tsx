import * as React from 'react';
import RadioGroup from '../../../src/RadioGroup';
import StyledRadio from './Radio';

export default function StyledRadioGroup(props) {
  return (
    <RadioGroup
      {...props}
      RadioComponent={StyledRadio}
    />
  );
}
