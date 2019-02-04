import * as React from 'react';
import { FieldArrayRenderProps } from 'formik';
import CheckboxGroup, { CheckboxItem, CheckboxItemSelectAll, CheckboxOption } from '../../src/CheckboxGroup';

export default function TestCheckboxGroup({
  name,
  label: groupLabel,
  options,
}: {
  name: string,
  label?: React.ReactNode,
  options: CheckboxOption[],
}) {
  const renderGroup = React.useCallback(
    (arrayHelpers: FieldArrayRenderProps) => {
      return (
        <React.Fragment>
          <CheckboxItemSelectAll
            options={options}
            arrayHelpers={arrayHelpers}
            label="Select All"
            name={arrayHelpers.name}
          />

          {options.map(({ value, label }) => {
            return (
              <CheckboxItem
                key={`${arrayHelpers.name}_${value}`}
                name={arrayHelpers.name}
                arrayHelpers={arrayHelpers}
                value={value}
                label={label}
              />
            );
          })}
        </React.Fragment>
      );
    },
    [options]
  );

  return (
    <CheckboxGroup
      name={name}
      label={groupLabel}
      render={renderGroup}
    />
  );
}
