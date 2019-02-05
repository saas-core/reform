import * as React from 'react';
import Checkbox from '../../../src/Checkbox';
import { getCheckboxClassNames } from '../stylesheets/checkbox';

export default function StyledCheckbox(props) {
  const classNames = getCheckboxClassNames(props);

  return (
    <Checkbox
      {...props}
      {...classNames}
    />
  );
}
