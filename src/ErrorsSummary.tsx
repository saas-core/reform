import * as React from 'react';
import { FormikErrors } from 'formik';

export type ErrorsSummaryProps<Values> = {
  errors: FormikErrors<Values>;
};

type ErrorFieldLinkProps = JSX.IntrinsicElements['a'] & {
  field: string;
};

function ErrorFieldLink({ field, ...rest }: ErrorFieldLinkProps) {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById(field).scrollIntoView({
        block: 'center',
      });
    },
    [field],
  );
  return <a href={`#${field}`} onClick={handleClick} {...rest} />;
}

export default function ErrorsSummary<Values>({
  errors,
}: ErrorsSummaryProps<Values>) {
  const erroredFields = Object.keys(errors);

  if (erroredFields.length === 0) {
    return null;
  }

  const renderError = React.useCallback(
    (field) => {
      return (
        <li key={field}>
          <ErrorFieldLink field={field}>{errors[field]}</ErrorFieldLink>
        </li>
      );
    },
    [errors],
  );

  return <ul>{erroredFields.map(renderError)}</ul>;
}
