import * as React from 'react';
import { FieldArrayRenderProps } from 'formik';
import CheckboxGroup, { CheckboxItem, CheckboxItemSelectAll, CheckboxOption } from '../../src/CheckboxGroup';
import Radio from '../../src/Radio';
import RadioGroup, { RadioOption } from '../../src/RadioGroup';

export default function TestRadioGroup({
  name,
  label: groupLabel,
  options,
}: {
  name: string,
  label?: React.ReactNode,
  options: CheckboxOption[],
}) {
  const renderRadio = React.useCallback(
    ({ label, value }: RadioOption) => {
      return (
        <Radio
          id={`${name}_${value}`}
          key={`${name}_${value}`}
          name={name}
          label={label}
          value={value}
        />
      );
    },
    [name]
  );

  return (
    <RadioGroup
      name={name}
      label={groupLabel}
      options={options}
      renderRadio={renderRadio}
    />
  );
}
