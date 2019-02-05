import * as React from 'react';
import Radio from '../../../src/Radio';
import { getRadioClassNames } from '../stylesheets/radio';

export default function StyledRadio(props) {
  const classNames = getRadioClassNames(props);

  return (
    <Radio
      {...props}
      {...classNames}
    />
  );
}
