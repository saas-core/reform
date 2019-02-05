import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { IAllProps, IProps } from '@tinymce/tinymce-react/lib/es2015/components/Editor';
import useTinyMCEConfig, { CustomTinyMCEConfig } from './useTinyMCEConfig';
import useLoadTinyMCE from './useLoadTinyMCE';
import TextArea from '../../TextArea';

export type TinyMCEEditorProps = {
  FallbackComponent?: React.ComponentType<any>;
  editorConfig?: CustomTinyMCEConfig;
} & Partial<IProps>;

export default function TinyMCEEditor({
  FallbackComponent = TextAreaFallback,
  editorConfig,
  ...rest
}: TinyMCEEditorProps) {
  const loadStatus = useLoadTinyMCE();
  const init = useTinyMCEConfig(editorConfig);

  if (!loadStatus.loaded || loadStatus.failed) {
    return !!FallbackComponent ? <FallbackComponent /> : null;
  }

  return <Editor init={init} {...rest} />;
}

function TextAreaFallback({ textareaName }: IAllProps) {
  return <TextArea name={textareaName} />;
}
