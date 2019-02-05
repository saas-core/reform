# reform
This library provides a set of components to be used as building blocks for your form. It is a compilation of common form controls built on top of [Formik](https://jaredpalmer.com/formik/) with semantic HMTL and accessibility in mind while leaving styling up to you.

## Usage

```
const reform = require('reform');

// TODO: DEMONSTRATE API
```

## Components


### `<Checkbox />`
Renders a checkbox with a label.

#### Props
* `name: string` &mdash; field name
* `label?: React.ReactNode` &mdash; checkbox label
* `id?: string` &mdash; sets `id` attribute for the checkbox as well as `for` attribute for the label. Defaults to `name` prop.
* `labelClassName?: string` &mdash; sets class name for the label.
* `containerClassName?: string` &mdash; sets class name for the wrapper `<div />` containing the checkbox and the label.

Anything else you pass to `<Checkbox />` will be applied to the `<input />` element rendered by this component.

### `<CheckboxGroup />`
A container component built on top of Formik's `<FieldArray />` to be used to render a group of checkboxes. 

#### Props
`<CheckboxGroup />` accepts all props supported by [`<FieldArray />`](https://jaredpalmer.com/formik/docs/api/fieldarray) component from Formik (e.g. `render` or `component` or `children` etc) as well as the following:
* `label?: React.ReactNode` &mdash; label for the group
* `className?: string` &mdash; sets class name for the group root element. **NOTE:** `<CheckboxGroup />` renders a `fieldset` element for the sake of semantic HTML, which results in some styling caveats; see [MDN docs on Fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#Styling_with_CSS) for more details.
* `labelClassName?: string` &mdash; sets class name for the group label.

#### Example
```typescript jsx
import CheckboxGroup, { CheckboxItemSelectAll, CheckboxItem } from '@saascore/forms/lib/CheckboxGroup';

const checkboxOptions = [
  {
    label: 'English',
    value: 'EN'
  },
  {
    label: 'French',
    value: 'FR'
  },
  {
    label: 'German',
    value: 'DE'
  },
];

function DemoCheckboxGroup() {
  const renderGroup = React.useCallback(
    (arrayHelpers: FieldArrayRenderProps) => {
      return (
        <React.Fragment>
          <CheckboxItemSelectAll
            options={checkboxOptions}
            arrayHelpers={arrayHelpers}
            label="Select All"
            name={arrayHelpers.name}
          />

          {checkboxOptions.map(({ value, label }) => {
            return (
              <CheckboxItem
                key={`${arrayHelpers.name}_${value}`}
                name={arrayHelpers.name}
                arrayHelpers={arrayHelpers}
                value={value}
                label={label}
              />
            );
          })}
        </React.Fragment>
      );
    },
    [checkboxOptions]
  );

  return (
    <CheckboxGroup
      name="testGroup"
      label="Languages"
      render={renderGroup}
    />
  );
}

```

#### Hooks
You don't have to use `<CheckboxItem />` or `<CheckboxItemSelectAll />` to render checkboxes inside a `<CheckboxGroup />`. If you want to implement your own checkbox components, you can use these hooks to get values and methods needed for a checkbox to work:
* `useCheckboxInGroup` &mdash; provides values to be passed to an `<input type="checkbox" />` element.
    ```typescript jsx
    function MyCheckbox({
      value,
      arrayHelpers,
    }) {
        const checkbox = useCheckboxInGroup(value, arrayHelpers);
        // same as
        // const { name, value, checked, onChange } = useCheckboxInGroup(optionValue, arrayHelpers);
        
        return (
          <input type="checkbox" {...checkbox} />
        );
    }
    ```
* `useSelectAll` &mdash; provides values to be passed to an `<input type="checkbox" />` element which would select/deselect all checkboxes on change.
    ```typescript jsx
    function MyCheckboxSelectAll({
      options,
      arrayHelpers,
    }) {
      const checkbox = useSelectAll(options, arrayHelpers);
    
      return (
        <input type="checkbox" value="all" {...checkbox} />
      );
    }
    ```


### `<CheckboxItem />`
Unlike [`<Checkbox />`](#) this component is not to be used on its own; its purpose is to render a checkbox belonging to a `<CheckboxGroup />`.

#### Props
* `value: string` &mdash; what value should the checkbox represent.
* `label: React.ReactNode` &mdash; checkbox label.
* `arrayHelpers: FieldArrayRenderProps` &mdash; API for working with the group values. This property is provided by `<CheckboxGroup />`. See [Formik docs](https://jaredpalmer.com/formik/docs/api/fieldarray) for more info on `arrayHelpers`.
* `labelClassName?: string` &mdash; sets class name for the checkbox label.
* `containerClassName?: string` &mdash; sets class name for the wrapper `<div />` containing the checkbox and the label.

Anything else you pass to `<CheckboxItem />` will be applied to the `<input />` element rendered by this component.


### `<CheckboxItemSelectAll />`
Similar to [`<CheckboxItem />`](#) this component should be used only inside a `<CheckboxGroup />`. It renders a checkbox which will select or deselect all options in the group.

#### Props
* `label: React.ReactNode` &mdash; checkbox label.
* `options: CheckboxOption[]` &mdash; an array of objects describing each checkbox in the group.
* `arrayHelpers: FieldArrayRenderProps` &mdash; API for working with the group values. This property is provided by `<CheckboxGroup />`. See [Formik docs](https://jaredpalmer.com/formik/docs/api/fieldarray) for more info on `arrayHelpers`.
* `labelClassName?: string` &mdash; sets class name for the checkbox label.
* `containerClassName?: string` &mdash; sets class name for the wrapper `<div />` containing the checkbox and the label.

Anything else you pass to `<CheckboxItemSelectAll />` will be applied to the `<input />` element rendered by this component.


### `<Input />`
Renders an `<input />` with a label.

#### Props
* `name: string` &mdash; field name
* `label?: React.ReactNode` &mdash; input label
* `id?: string` &mdash; sets `id` attribute for the input as well as `for` attribute for the label. Defaults to `name` prop.
* `labelClassName?: string` &mdash; sets class name for the label.

Anything else you pass to `<Input />` will be applied to the `<input />` element rendered by this component.


### `<Label />`
A wrapper component around `<label />`; generally you won't need it unless you are writing your own form control.

#### Props
* `children?: React.ReactNode`
* `htmlFor: string`
* `className?: string`


### `<Radio />`
Renders a single radio control. Usually makes sense only if used to build a radio group.

#### Props
* `name: string` &mdash; field name
* `value: string` &mdash; what value should the radio represent.
* `label: React.ReactNode` &mdash; radio label.
* `id?: string` &mdash; sets `id` attribute for the radio as well as `for` attribute for the label. Defaults to `name` prop.
* `labelClassName?: string` &mdash; sets class name for the radio label.
* `containerClassName?: string` &mdash; sets class name for the wrapper `<div />` containing the radio and the label.

Anything else you pass to `<Radio />` will be applied to the `<input />` element rendered by this component.


### `<RadioGroup />`
Renders a group of radio controls. Each radio option should be defined using this interface:
```typescript
interface RadioOption {
  label: React.ReactNode; // radio label
  value: string; // radio value
}
```

#### Props
* `name: string` &mdash; field name
* `label?: React.ReactNode` &mdash; label for the group
* `options: CheckboxOption[]` &mdash; an array of objects describing each radio.
* `className?: string` &mdash; sets class name for the group root element. **NOTE:** `<RadioGroup />` renders a `fieldset` element for the sake of semantic HTML, which results in some styling caveats; see [MDN docs on Fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#Styling_with_CSS) for more details.
* `labelClassName?: string` &mdash; sets class name for the group label.


### `<Select />`
Renders a `<select />` element. Each option should be defined using this interface:
```typescript
interface SelectOption {
  label: string; // option label
  value: string; // option value
}
```

#### Props
* `name: string` &mdash; field name
* `label?: React.ReactNode` &mdash; checkbox label
* `placeholder?: string` &mdash; will insert an option which has empty value (`value=""`) and `placeholder` as its label.
* `id?: string` &mdash; sets `id` attribute for the select as well as `for` attribute for the label. Defaults to `name` prop.
* `className?: string` &mdash; sets class name for the `<select />` node.
* `labelClassName?: string` &mdash; sets class name for the label.


### `<TextArea />`
Renders a text area.

#### Props
* `name: string` &mdash; field name
* `label: React.ReactNode` &mdash; text area label.
* `id?: string` &mdash; sets `id` attribute for the text area as well as `for` attribute for the label. Defaults to `name` prop.
* `labelClassName?: string` &mdash; sets class name for the text area label.

Anything else you pass to `<TextArea />` will be applied to the `<textarea />` element rendered by this component.
