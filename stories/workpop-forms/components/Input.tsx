import * as React from 'react';
import { css, cx } from 'emotion';
import Input, { InputProps } from '../../../src/Input';
import inputStyles from '../stylesheets/input';
import labelStyles from '../stylesheets/label';


export default function WorkpopInput({
  className,
  ...rest
}: InputProps) {
  return (
    <Input
      labelClassName={css(labelStyles.label)}
      render={({ field, form }) => {
        return (
          <input
            className={cx(
              css(inputStyles.inputCommon as any),
              css(inputStyles.input),
              form.errors[field.name] && css(inputStyles.error),
              rest.disabled && css(inputStyles.disabled),
              className,
            )}
            {...rest}
          />
        );
      }}
      {...rest}
    />
  );
}
