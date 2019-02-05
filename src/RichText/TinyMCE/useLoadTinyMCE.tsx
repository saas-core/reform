import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TINYMCE_WINDOW_PROP = 'tinymce';
const TINYMCE_SCRIPT_ID = 'tinymce-script';

export default function useLoadTinyMCE() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [failed, setFailed] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      if (!!window && !!window[TINYMCE_WINDOW_PROP]) {
        setLoaded(true);
        return;
      }

      loadTinyMCE(
        () => {
          setLoaded(true);
        },
        () => {
          setFailed(true);
        },
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
  // Function to run after the script tag has loaded
  function tinyMCELoadCallback() {
    return onLoad();
  }

  // Function to run after if the script doesn't load
  function tinyMCEErrorCallback(error) {
    console.error(error); // eslint-disable-line no-console
    return onError();
  }

  // Generate a script tag
  const addedScript = document.getElementById(TINYMCE_SCRIPT_ID);

  if (!addedScript) {
    const script = createTinyMCEScript();
    script.onload = tinyMCELoadCallback;
    script.onerror = tinyMCEErrorCallback;

    // Load the script tag
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    const prevOnLoad: (e) => void = addedScript.onload;
    addedScript.onload = function(e) {
      prevOnLoad(e);
      tinyMCELoadCallback();
    };

    const prevOnError = addedScript.onerror;
    addedScript.onerror = function(error) {
      prevOnError(error);
      tinyMCEErrorCallback(error);
    };
  }
}

function createTinyMCEScript(): HTMLScriptElement {
  const script = document.createElement('script');
  script.id = TINYMCE_SCRIPT_ID;
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.0.0/tinymce.min.js';

  return script;
}
