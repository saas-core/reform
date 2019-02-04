import * as React from 'react';
import { Field, FieldConfig } from 'formik';
import Label from './Label';

export type InputProps = {
  name: string;
  label?: React.ReactNode;
  id?: string;
  labelClassName?: string;
} & JSX.IntrinsicElements['input'] & {
    ref?: any; // TODO see if we can avoid TS error caused by JSX.IntrinsicElements['input']['ref'] clashing with Field typedef
  } & FieldConfig;

export default function Input({
  name,
  label,
  id = name,
  labelClassName,
  ...rest
}: InputProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <Field name={name} id={id} type="text" {...rest} />
    </React.Fragment>
  );
}
