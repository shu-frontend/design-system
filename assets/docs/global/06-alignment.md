---
title: Alignment
---

## Initialising Alignment

The following classes should be applied to the `.g` that you want to affect. Due to the nature of how `flex` works, the alignment params are added to the grid parent, distributing alignment to the children. An example would be:

```html
<div class="g align-xxx">
    <div class="g__col">
        <p>Column with alignment</p>
    </div>
    <div class="g__col">
        <p>Column with alignment</p>
    </div>
    <div class="g__col">
        <p>Column with alignment</p>
    </div>
</div>
```

## Type

Vertical alignment selectors can be used responsively by simply using the standard `@medium` etc modifier, for example, `align-v-center@medium`.
<table>
<thead>
<th>Selector</th>
<th>Description</th>
</thead>
<tbody>
    <tr>
        <td>`align-end`</td>
        <td>Aligns to the end of the grid, IE to 'float' cols RTL</td>
    </tr>
    <tr>
        <td>`align-center`</td>
        <td>Cols will grow out from the center of the grid</td>
    </tr>
    <tr>
        <td>`align-v-top`</td>
        <td>Vertically aligns cols from the top</td>
    </tr>
    <tr>
        <td>`align-v-center`</td>
        <td>Vertically aligns cols from the center</td>
    </tr>
    <tr>
        <td>`align-v-bottom`</td>
        <td>Vertically aligns cols from the bottom</td>
    </tr>

</tbody>
</table>





