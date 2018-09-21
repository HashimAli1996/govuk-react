DateField
=========

### Import
```js
  import DateField from '@govuk-react/date-input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateField>What is your date of birth?</DateField>
```

Date with hint text
```jsx
<DateField hintText="For example, 31 03 1980">
  What is your date of birth?
</DateField>
```

Date with hint text & error
```jsx
<DateField
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateField>
```

With custom input name props
```jsx
<DateField inputNames={{ day: 'dayInputName' }} hintText="For example, 31 03 1980">
  What is your date of birth?
</DateField>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `errorText` |  | ```undefined``` | string | Error text
 `hintText` |  | ```undefined``` | string | Optional hint text
 `inputNames` |  | ```{   day: 'DateFieldDay',   month: 'DateFieldMonth',   year: 'DateFieldYear', }``` | shape[object Object] | Input name attributes


