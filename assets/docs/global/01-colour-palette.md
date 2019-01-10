---
title: Colour palette
# @todo add tint docs
---

Colour definitions are stored in `design/colours.yml` as [Design Token compliant](https://github.com/salesforce-ux/theo#overview) `YAML` files, and automatically pulled into Sass and JavaScript using [`gulp-theo`](https://github.com/salesforce-ux/gulp-theo).

Within Sass colours are consumed using the `palette()` helper function, which takes the string name of the colour and returns an `rgb()` value.

## Current available colours

The list below is automatically generated from the colours available to this project.

<table>
<thead>
<th>Hex</th>
<th>Comment</th>
<th>Reference</th>
</thead>
<tbody>
{% for key, colour in colours %}
    <tr>
        <td style="background-color:{{ colour.value }}">
            `{{ colour.value }}`
        </td>
        <td>{{ colour.comment }}</td>
        <td>`palette({{ key }})`</td>
    <tr>
{% endfor %}
</tr>
</table>

---

## Tint function
The tint function is used as an alternative to sass `lighten`/`darken`, it allows us to lighten or darken a colour incrementally throughout the project without manually setting the amount each time

### Base tint, no modifier
The base tint amount is 10%, the following will darken the secondary palette color by 10%
```
background: tint(palette(secondary), 'darken');
```

The following will lighten the secondary palette color by 10%:
```
background: tint(palette(secondary), 'lighten');
```

### Incremental tint amount overrides

You can incrementally override the tint amount by using a multiplier

The following will lighten the secondary palette color by 20%
```
background: tint(palette(secondary), 'lighten', 2);
```

The following will lighten the secondary palette color by 50% and so on...
```
background: tint(palette(secondary), 'lighten', 5);
```
