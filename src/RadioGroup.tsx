import * as React from 'react';
import { css, cx } from 'emotion';
import Radio, { RadioProps } from './Radio';

export interface RadioOption {
  label: React.ReactNode;
  value: string;
}

interface RadioGroupProps {
  name: string;
  label?: React.ReactNode;
  options: RadioOption[];
  RadioComponent?: React.ComponentType<RadioProps>;
  className?: string;
  labelClassName?: string;
}

const baseClass = css`
  margin: 0;
  padding: 0;
  border: none;
`;

export default function RadioGroup({
  name,
  label: groupLabel,
  options,
  RadioComponent = Radio,
  className,
  labelClassName,
}: RadioGroupProps) {
  const renderRadio = React.useCallback(
    ({ label, value }: RadioOption) => {
      return (
        <RadioComponent
          id={`${name}_${value}`}
          key={`${name}_${value}`}
          name={name}
          label={label}
          value={value}
        />
      );
    },
    [name],
  );

  return (
    <fieldset className={cx(baseClass, className)}>
      <legend className={labelClassName}>{groupLabel}</legend>
      {options.map(renderRadio)}
    </fieldset>
  );
}
