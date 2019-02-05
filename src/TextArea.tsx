import * as React from 'react';
import { Field, FieldConfig, FieldProps } from 'formik';
import Label from './Label';

export type TextAreaProps = {
  name: string;
  label?: React.ReactNode;
  id?: string;
  labelClassName?: string;
} & JSX.IntrinsicElements['textarea'] & {
  ref?: any; // TODO see if we can avoid TS error caused by JSX.IntrinsicElements['textarea']['ref'] clashing with Field typedef
} & FieldConfig;

type TextAreaInnerProps = FieldProps & TextAreaProps;

function TextAreaInner({
  field,
  form,
  id,
  label,
  labelClassName,
  ...rest
}: TextAreaInnerProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <textarea id={id} {...field} {...rest} />
    </React.Fragment>
  );
}

export default function TextArea({ name, id = name, ...rest }: TextAreaProps) {
  return <Field component={TextAreaInner} name={name} id={id} {...rest} />;
}
