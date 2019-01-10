---
title: Spacing Helpers
---

Spacing defintions are stored in `design/spacing.yml` as [Design Token compliant](https://github.com/salesforce-ux/theo#overview) `YAML` files, and automatically pulled into Sass and JavaScript using [`gulp-theo`](https://github.com/salesforce-ux/gulp-theo).

Within Sass spacing values are consumed using the `spacing()` helper function. This function takes a space delimited list of values, consisting of either the name of a spacing unit (see below) and/or integer values.

## Useful things to know

- All values are automatically converted to rems on output
- If you wish to use an integer value, specify in unitless pixels 


## Spacing units and names

The list below is automatically generated from the breakpoints available to this project.

<table>
<thead>
<th>Name</th>
<th>Value</th>
<th>Reference</th>
</thead>
<tbody>
{% for key, breakpoint in spacing %}
    <tr>
        <td>`{{ key }}`</td>
        <td>`{{ breakpoint.value }}px`</td>
        <td>`property: spacing({{ key }})`</td>
    <tr>
{% endfor %}
</tr>
</table>

---

## Spacing / Pad Utility
An array of utility selectors that can be used to attribute spacing based on the spacing design tokens explained above. It can be used to apply either padding (`p-` prefix classnames) or margin (`m-` prefix classnames)

### Base
The base class will give padding amount in the specified position (`top`, `left`, `right`, `bottom`) with the specified amount (`half`, `base`, `double`, `triple`, `quad`, `oct`)
```html
.p-top--double
.p-left--quad
.p-bottom
```

```html
.mg-top--double
.mg-left--quad
.mg-bottom
```


### Responsive
Responsive modifiers can be added:
```html
.p-top@medium
.p-left--quad@large
.p-bottom@medium
```

```html
.mg-top@medium
.mg-left--quad@large
.mg-bottom@medium
```

### Reset
Reset modifier will clear padding for said params, for example you may want `double` padding at small, then no padding at `medium`
```html
.p-top--reset@medium
.m-bottom--reset@large
```
