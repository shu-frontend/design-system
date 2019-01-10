---
title: Grid
---

## Initialising the Grid

Adding the `.g` class initiates the flex based grid system, adding the `.g__col` class applies the base cell spacing that negates the negative margin applied on `.g`, all children within a `.g` should have `.g__col` applied.

```html
<div class="g">
    <div class="g__col">
        <p>I'm naked!</p>
    </div>
</div>
```

## Columns

There are a number of modifier classes available for `.g__col`, the first being `auto`

### Auto-flex columns

Applying `.g__col-auto` will cause flex to automatically share the full space of it's parent `.g`, this can be combined with more traditional column based modifiers. These will have no % columns or any widths assigned at all, they are simply sharing the parent `.g` space.

```html
<div class="g">
    <div class="g__col g__col-auto">
        <p>Auto shared space</p>
    </div>
    <div class="g__col g__col-auto">
        <p>Auto shared space</p>
    </div>
    <div class="g__col g__col-auto">
        <p>Auto shared space</p>
    </div>
</div>
```

### Responsive

This (and any other cell modifier) can be used responsively, simply add a breakpoint modifier.

```html
<div class="g">
    <div class="g__col g__col-12 g__col-auto@medium g__col-6@large">
        <p>auto</p>
    </div>
</div>
```

This example would give us a full 12 col cell at mobile, a auto cell at medium, and a half width 6 column cell at large.

###  More traditional columns

This works in a more traditional way by applying a number based cell width. We are using a 12 column grid so anything in that system can be used

```html
<div class="g">
    <div class="g__col g__col-12">
        <p>12 column cell</p>
    </div>
    <div class="g__col g__col-11">
        <p>11 column cell</p>
    </div>
</div>
```

### Combining columns with auto

The 2 methods can be combined, for example, you may want a 3 column cell, followed by space filled up dynamic flex cells, followed by another 3 column cell.

```html
<div class="g">
    <div class="g__col g__col-4">
        <p>4 col</p>
    </div>
    <div class="g__col g__col-auto">
        <p>auto</p>
    </div>
    <div class="g__col g__col-auto">
        <p>auto</p>
    </div>
    <div class="g__col g__col-4">
        <p>4 col</p>
    </div>
</div>
```

### Column Ordering
Flexbox lets us easily re-order columns at different breakpoints. The following selectors are available out of the box:

```html
<div class="g">
    <div class="g__col g__col-order-1 g__col-order-2@medium">
        <p>4 col</p>
    </div>
    <div class="g__col g__col-order-2 g__col-order-1@medium">
        <p>auto</p>
    </div>
</div>
```

## Cell Selector Reference

<table>
<thead>
<th>Selector</th>
<th>Width</th>
</thead>
<tbody>
    {% for i in [1,2,3,4,5,6,7,8,9,10,11,12] %}
        <tr>
            <td>`.g__col-{{ i }}`</td>
            <td>{{ i / 12 * 100 }}%</td>
        </tr>
    {% endfor %} 

    {% for key, breakpoint in breakpoints %}
        {% for i in [1,2,3,4,5,6,7,8,9,10,11,12] %}
        <tr>
            <td>`.g__col-{{ i }}@{{ key }}`</td>
            <td>`{{ i / 12 * 100 }}% ({{ key }})`</td>
        </tr>
        {% endfor %} 
    {% endfor %}
    <tr>
        <td>`.g__col-auto`</td>
        <td>`auto`</td>
    </tr>
    {% for key, breakpoint in breakpoints %}
        <tr>
            <td>`.g__col-auto@{{ key }}`</td>
            <td>`auto` ({{ key }})</td>
        </tr>
    {% endfor %}
</tr>
</table>
