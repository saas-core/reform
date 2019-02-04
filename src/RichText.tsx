import React from 'react';
import { hasInWindow } from '@workpop/utilities/hasWindow';
import { Editor } from '@tinymce/tinymce-react';
import { Field, FieldConfig, FieldProps } from 'formik';
import Label from './Label';
import { IProps } from '@tinymce/tinymce-react/lib/es2015/components/Editor';

const TINYMCE_WINDOW_PROP = 'tinymce';

const TINY_MCE_VALID_ELEMENTS =
  '-a[href|name|target=_blank],-p,-ul,-ol,-li,-b,-strong,-i,-em,br';

function useTinyMCEConfig(plugins: string[] = [], toolbar: string[] = [], contentCss: string[] = []) {
  return React.useMemo(
    () => {
      const config = {
        min_height: 200,
        autoresize_min_height: 200,
        valid_elements: TINY_MCE_VALID_ELEMENTS,
        branding: false,
        resize: 'both',
        menu: false,
        menubar: false,
        statusbar: false,
        content_css: [
          '//cloud.typography.com/7972754/774106/css/fonts.css',
          ...(contentCss || []),
        ],
        // content_style: mceContentStyles, // TODO implement styles
        plugins: ['autoresize lists', 'paste', ...plugins].join(' '),
        toolbar: ['bold | italic | bullist | numlist', ...toolbar].join('|'),
      };

      return config;
    },
    [plugins, toolbar, contentCss],
  );
}

function useLoadTinyMCE() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [failed, setFailed] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      if (hasInWindow(TINYMCE_WINDOW_PROP)) {
        setLoaded(true);
        return;
      }

      loadTinyMCE(
        () => { setLoaded(true); },
        () => { setFailed(true); },
      );
    },
    [setLoaded, setFailed],
  );

  return {
    loaded,
    failed,
  };
}

function loadTinyMCE(onLoad: () => void, onError: () => void) {

  // Functions to run after the script tag has loaded
  function tinyMCELoadCallback() {
    return onLoad();
  }

  // If the script doesn't load
  function tinyMCEErrorCallback(error) {
    console.error(error); // eslint-disable-line no-console
    return onError();
  }

  // Generate a script tag
  const addedScript = document.getElementById('tinymce-script');

  if (!addedScript) {
    const script = document.createElement('script');
    script.id = 'tinymce-script';
    script.type = 'text/javascript';
    script.src = '//cdn.www.workpop.com/4/tinymce.min.js';
    script.onload = tinyMCELoadCallback;
    script.onerror = tinyMCEErrorCallback;

    // Load the script tag
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    const prevOnLoad: (e) => void = addedScript.onload;
    addedScript.onload = function (e) {
      prevOnLoad(e);
      tinyMCELoadCallback();
    };

    const prevOnError = addedScript.onerror;
    addedScript.onerror = function (error) {
      prevOnError(error);
      tinyMCEErrorCallback(error);
    };
  }
}

export type TinyMCEEditorProps = {
  FallbackComponent?: React.ComponentType<any>,
} & Partial<IProps>;

export function TinyMCEEditor({
  FallbackComponent,
  ...rest
}: TinyMCEEditorProps) {
  const loadStatus = useLoadTinyMCE();
  const config = useTinyMCEConfig();

  if (!loadStatus.loaded || loadStatus.failed) {
    return !!FallbackComponent ? (
      <FallbackComponent />
    ) : null;
  }

  return (
    <Editor init={config} {...rest} />
  );
}

export type RichTextFieldInnerProps = FieldProps;

function RichTextFieldInner({
  field,
  form,
}: RichTextFieldInnerProps) {
  const handleChange = React.useCallback(
    (content: string) => {
      form.setFieldValue(field.name, content);
    },
    [field.name, form.setFieldValue],
  );

  return (
    <TinyMCEEditor
      onEditorChange={handleChange}
      textareaName={field.name}
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
      <Field
        component={RichTextFieldInner}
        name={name}
        id={id}
        {...rest}
      />
    </React.Fragment>
  );
}
