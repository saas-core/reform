import * as React from 'react';
import { Field, FieldConfig } from 'formik';
import Label from './Label';

export type TextAreaProps = {
  name: string;
  label?: React.ReactNode;
  id?: string;
  labelClassName?: string;
} & JSX.IntrinsicElements['textarea'] & {
    ref?: any; // TODO see if we can avoid TS error caused by JSX.IntrinsicElements['textarea']['ref'] clashing with Field typedef
  } & FieldConfig;

export default function TextArea({
  name,
  label,
  id = name,
  labelClassName,
  ...rest
}: TextAreaProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <Field component="textarea" name={name} id={id} {...rest} />
    </React.Fragment>
  );
}
