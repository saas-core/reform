import * as React from 'react';
import { FieldArray, FieldArrayConfig, FieldArrayRenderProps } from 'formik';
import { css, cx } from 'emotion';
import Label from './Label';

export interface CheckboxOption {
  label: React.ReactNode;
  value: string;
}

type CheckboxGroupValue = string[];

function getOptionValue(option: CheckboxOption): string {
  return option.value;
}

/** **************************************
 * BASE CHECKBOX INPUT
 ****************************************/

const checkboxContainerClass = css`
  display: flex;
`;

type CheckboxInputProps = CheckboxOption & {
  labelClassName?: string;
  containerClassName?: string;
} & JSX.IntrinsicElements['input'];

function CheckboxInput({
  value,
  label,
  id,
  labelClassName,
  containerClassName,
  ...rest
}: CheckboxInputProps) {
  return (
    <div className={cx(checkboxContainerClass, containerClassName)}>
      <input type="checkbox" id={id} value={value} {...rest} />
      <Label htmlFor={id} className={labelClassName}>
        {label}
      </Label>
    </div>
  );
}

/** **************************************
 * SINGLE CHECKBOX
 ****************************************/

export type CheckboxItemProps = Pick<
  CheckboxInputProps,
  Exclude<keyof CheckboxInputProps, 'id'>
> & {
  arrayHelpers: FieldArrayRenderProps;
  id?: string;
};

export function CheckboxItem({
  value,
  arrayHelpers,
  ...rest
}: CheckboxItemProps) {
  const checkbox = useCheckboxInGroup(value, arrayHelpers);

  return (
    <CheckboxInput id={`${checkbox.name}_${value}`} {...checkbox} {...rest} />
  );
}

export function useCheckboxInGroup(
  value: string,
  arrayHelpers: FieldArrayRenderProps,
) {
  const name = arrayHelpers.name;
  const currentValues: CheckboxGroupValue = arrayHelpers.form.values[name];

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        arrayHelpers.push(value);
      } else {
        const idx = currentValues.indexOf(value);
        arrayHelpers.remove(idx);
      }
    },
    [currentValues, value, arrayHelpers.push, arrayHelpers.remove],
  );

  return {
    name,
    value,
    onChange,
    checked: currentValues.includes(value),
  };
}

/** **************************************
 * SELECT ALL
 ****************************************/

type CheckboxSelectAllProps = Pick<
  CheckboxInputProps,
  Exclude<keyof CheckboxInputProps, 'value' | 'id'>
> & {
  options: CheckboxOption[];
  arrayHelpers: FieldArrayRenderProps;
  id?: string;
};

export function CheckboxItemSelectAll({
  options,
  arrayHelpers,
  ...rest
}: CheckboxSelectAllProps) {
  const checkbox = useSelectAll(options, arrayHelpers);

  return (
    <CheckboxInput
      id={`${checkbox.name}_all`}
      value="all"
      {...checkbox}
      {...rest}
    />
  );
}

// TODO get rid of CheckboxOption in favour of passing array of actual values?
export function useSelectAll(
  options: CheckboxOption[],
  arrayHelpers: FieldArrayRenderProps,
) {
  const name = arrayHelpers.name;
  const currentValues: CheckboxGroupValue = arrayHelpers.form.values[name];

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.checked ? options.map(getOptionValue) : [];

      arrayHelpers.form.setFieldValue(name, nextValue);
    },
    [options, arrayHelpers.form.setFieldValue],
  );

  return {
    name,
    onChange,
    value: 'all',
    checked: currentValues.length === options.length,
  };
}

/** **************************************
 * CHECKBOX GROUP
 ****************************************/

const baseClass = css`
  margin: 0;
  padding: 0;
  border: none;
`;

export interface CheckboxGroupProps extends FieldArrayConfig {
  label?: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

export default function CheckboxGroup({
  label: groupLabel,
  className,
  labelClassName,
  ...rest
}: CheckboxGroupProps) {
  return (
    <fieldset className={cx(baseClass, className)}>
      <legend className={labelClassName}>{groupLabel}</legend>
      <FieldArray {...rest} />
    </fieldset>
  );
}
