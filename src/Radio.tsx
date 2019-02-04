import * as React from 'react';
import { Field, FieldProps } from 'formik';
import { css, cx } from 'emotion';
import Label from './Label';

export type RadioProps = {
  name: string;
  value: string;
  label?: React.ReactNode;
  id?: string;
  labelClassName?: string;
  containerClassName?: string;
} & RadioInputProps;

type RadioInputProps = JSX.IntrinsicElements['input'] &
  Partial<FieldProps<HTMLInputElement>> & {
    ref?: any; // TODO see if we can avoid TS error caused by JSX.IntrinsicElements['input']['ref'] clashing with Field typedef
  };

export function RadioInput({
  field,
  form, // this is injected by <Field /> from Formik, no need to pass it down to <input />
  value,
  ...rest
}: RadioInputProps) {
  return (
    <input
      {...rest}
      {...field}
      type="radio"
      checked={value === field.value}
      value={value}
    />
  );
}

export default function Radio({
  name,
  id = name,
  label,
  className,
  labelClassName,
  containerClassName,
  ...rest
}: RadioProps) {
  return (
    <div className={cx(css({ display: 'flex' }), containerClassName)}>
      <Field
        id={id}
        name={name}
        component={RadioInput}
        className={className}
        {...rest}
      />
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
    </div>
  );
}
