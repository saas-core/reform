import * as React from 'react';
import { FieldProps } from 'formik';
import Input, { InputProps } from './Input';

type CurrencyInputInnerProps = JSX.IntrinsicElements['input'] & FieldProps;

function CurrencyInputInner({ field, form, ...rest }: CurrencyInputInnerProps) {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue(field.name, formatToCurrency(e.target.value));
    },
    [field.name, form.setFieldValue],
  );

  return <input type="number" {...field} onChange={handleChange} {...rest} />;
}

export default function CurrencyInput(props: InputProps) {
  return <Input {...props} component={CurrencyInputInner} />;
}

function digitsOnly(value: string = '') {
  return value.replace(/(-(?!\d))|[^0-9|-]/g, '') || '';
}

function padDigits(digitsStr: string) {
  const desiredLength = 3;
  const actualLength = digitsStr.length;

  if (actualLength >= desiredLength) {
    return digitsStr;
  }

  const amountToAdd = desiredLength - actualLength;
  const padding = '0'.repeat(amountToAdd);

  return padding + digitsStr;
}

function removeLeadingZeroes(numberStr: string = '') {
  return numberStr.replace(/^0+([0-9]+)/, '$1');
}

function addDecimalToNumber(numberStr: string = '') {
  const centsStartingPosition = numberStr.length - 2;

  const dollars = removeLeadingZeroes(
    numberStr.substring(0, centsStartingPosition),
  );

  const cents = numberStr.substring(centsStartingPosition);

  return `${dollars}.${cents}`;
}

function formatToCurrency(value: string) {
  const digits = digitsOnly(value);
  const digitsWithPadding = padDigits(digits);
  return addDecimalToNumber(digitsWithPadding);
}
