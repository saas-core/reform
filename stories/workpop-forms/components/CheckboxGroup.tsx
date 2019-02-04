import * as React from 'react';
import { FieldArrayRenderProps } from 'formik';
import CheckboxGroup, {
  CheckboxGroupProps,
  CheckboxItem,
  CheckboxItemSelectAll,
  CheckboxOption
} from '../../../src/CheckboxGroup';
import { getCheckboxClassNames } from '../stylesheets/checkbox';

function CustomCheckbox({
  InputComponent,
  ...rest
}: { InputComponent: React.ReactType, [k: string]: any }) {
  const classNames = getCheckboxClassNames(rest);

  return (
    <InputComponent
      {...rest}
      {...classNames}
    />
  );
}

export default function WorkpopCheckboxGroup({
  options,
  ...rest
}: {
  options: CheckboxOption[],
} & CheckboxGroupProps) {
  const renderGroup = React.useCallback(
    (arrayHelpers: FieldArrayRenderProps) => {
      return (
        <React.Fragment>
          <CustomCheckbox
            InputComponent={CheckboxItemSelectAll}
            options={options}
            arrayHelpers={arrayHelpers}
            label="Select All"
            name={arrayHelpers.name}
          />

          {options.map(({ value, label }) => {
            return (
              <CustomCheckbox
                InputComponent={CheckboxItem}
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
      render={renderGroup}
      {...rest}
    />
  );
}
