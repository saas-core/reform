import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { IProps } from '@tinymce/tinymce-react/lib/es2015/components/Editor';

const TINY_MCE_VALID_ELEMENTS =
  '-a[href|name|target=_blank],-p,-ul,-ol,-li,-b,-strong,-i,-em,br';

type TinyMCEConfig = IProps['init'];

const defaultConfig = {
  min_height: 200,
  autoresize_min_height: 200,
  valid_elements: TINY_MCE_VALID_ELEMENTS,
  branding: false,
  resize: 'both',
  menu: false,
  menubar: false,
  statusbar: false,
  content_css: [],
  plugins: ['autoresize lists', 'paste'].join(' '),
  toolbar: ['bold | italic | bullist | numlist'].join('|'),
};

export type CustomTinyMCEConfig = TinyMCEConfig | ((config: TinyMCEConfig) => TinyMCEConfig);

export default function useTinyMCEConfig(
  customConfig: CustomTinyMCEConfig = {},
) {
  return React.useMemo(
    () => {
      return typeof customConfig === 'function' ? customConfig(defaultConfig) : {
        ...defaultConfig,
        ...(customConfig || {}),
      };
    },
    [customConfig],
  );
}
