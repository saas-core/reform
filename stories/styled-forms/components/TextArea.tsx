import * as React from 'react';
import { css, cx } from 'emotion';
import inputStyles from '../stylesheets/input';
import labelStyles from '../stylesheets/label';
import TextArea, { TextAreaProps } from '../../../src/TextArea';
import textAreaStyles from '../stylesheets/textArea';


export default function StyledTextArea({
  className,
  ...rest
}: TextAreaProps) {
  return (
    <TextArea
      labelClassName={css(labelStyles.label)}
      render={({ field, form }) => {
        return (
          <textarea
            className={cx(
              css(inputStyles.inputCommon as any),
              css(inputStyles.input),
              css(textAreaStyles.common),
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
