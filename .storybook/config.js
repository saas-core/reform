import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(
  withOptions({
    sortStoriesByKind: true,
  }),
);

addDecorator(checkA11y);

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
