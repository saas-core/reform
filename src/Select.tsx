import * as React from 'react';
import { Field, FieldConfig } from 'formik';
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

export default function Select({
  name,
  label,
  options,
  placeholder,
  id = name,
  className,
  labelClassName,
}: SelectProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <Field component="select" className={className} name={name} id={id}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(renderOption)}
      </Field>
    </React.Fragment>
  );
}

function renderOption({ label, value }: SelectOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
}
