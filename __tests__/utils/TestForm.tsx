import * as React from 'react';
import { Formik, Form, FormikActions } from 'formik';

interface Values {
  name: string;
  color?: string;
}

function defaultOnSubmit(values: Values, { setSubmitting }: FormikActions<Values>) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
}

export default function TestForm({
  initialValues = {},
  children,
  onSubmit = defaultOnSubmit,
}) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props) => {
        return (
          <React.Fragment>
            <Form>
              {children}
              <button type="submit">Submit</button>
            </Form>
            <pre>{JSON.stringify(props.values, null, 2)}</pre>
          </React.Fragment>
        );
      }}
    </Formik>
  );
}
