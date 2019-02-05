import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Field, FieldConfig, FieldProps } from "formik";
import Label from "./Label";
import TinyMCEEditor, { TinyMCEEditorProps } from './RichText/TinyMCE/TinyMCEEditor';

export type RichTextFieldInnerProps = FieldProps & TinyMCEEditorProps;

function RichTextFieldInner({ field, form, ...rest }: RichTextFieldInnerProps) {
  const handleChange = React.useCallback(
    (content: string) => {
      form.setFieldValue(field.name, content);
    },
    [field.name, form.setFieldValue]
  );

  return (
    <TinyMCEEditor
      onEditorChange={handleChange}
      textareaName={field.name}
      {...rest}
      initialValue={field.value} // Editor is uncontrolled component, so we have to provide initialValue here
    />
  );
}

export type RichTextProps = {
  name: string;
  label?: React.ReactNode;
  id?: string;
  labelClassName?: string;
} & FieldConfig;

export function RichText({
  name,
  label,
  id = name,
  labelClassName,
  ...rest
}: RichTextProps) {
  return (
    <React.Fragment>
      {label && (
        <Label className={labelClassName} htmlFor={id}>
          {label}
        </Label>
      )}
      <Field component={RichTextFieldInner} name={name} id={id} {...rest} />
    </React.Fragment>
  );
}
