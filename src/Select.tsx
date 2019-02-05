import * as React from 'react';
import { Field, FieldConfig, FieldProps } from 'formik';
import Label from './Label';

export interface SelectOption {
  label: string;
  value: any;
}

export type SelectProps = {
  name: string;
  label?: React.ReactNode;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  className?: string;
  labelClassName?: string;
} & FieldConfig;

type SelectInnerProps = FieldProps & SelectProps;

function SelectInner({
  field,
  form,
  id,
  label,
  labelClassName,
  placeholder,
  options,
  ...rest
}: SelectInnerProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <select id={id} {...field} {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(renderOption)}
      </select>
    </React.Fragment>
  );
}

export default function Select({ name, id = name, ...rest }: SelectProps) {
  return <Field component={SelectInner} name={name} id={id} {...rest} />;
}

function renderOption({ label, value }: SelectOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
}
