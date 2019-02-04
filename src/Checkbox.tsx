import * as React from 'react';
import { Field, FieldProps } from 'formik';
import Label from './Label';
import { css, cx } from 'emotion';

export type CheckboxProps = {
  name: string;
  label?: React.ReactNode;
  id?: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
} & JSX.IntrinsicElements['input'] & {
    ref?: any; // TODO see if we can avoid TS error caused by JSX.IntrinsicElements['input']['ref'] clashing with Field typedef
  };

type CheckboxInputProps = JSX.IntrinsicElements['input'] & FieldProps;

function CheckboxInput({ field, form, ...rest }: CheckboxInputProps) {
  return <input type="checkbox" checked={field.value} {...field} {...rest} />;
}

export default function Checkbox({
  name,
  label,
  id = name,
  labelClassName,
  containerClassName,
  ...rest
}: CheckboxProps) {
  return (
    <div className={cx(css({ display: 'flex' }), containerClassName)}>
      <Field
        name={name}
        id={id}
        // TODO there's an issue with Formik not binding initial values to checkbox inputs, hence the need to use custom component (see more here: https://github.com/jaredpalmer/formik/issues/1050)
        component={CheckboxInput}
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
