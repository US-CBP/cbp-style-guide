---
title: "Grid"
---

<div class="pl-pattern">

<h3>Grid</h3>

The 12 column grid can be used for aligning components and assisting in responsive behavior. It is not intended to be the only solution for aligning components. [See the Layouts](layouts.html) section for the most common example of layouts using the grid.

Grid systems are used for creating page layouts through a series of rows and columns that house your content. Here's how the Bootstrap grid system works:

 {::nomarkdown}
 (Most of the information below was taken directly from <a href='https://getbootstrap.com/docs/3.3/css/'>Bootstrap 3.7 Advanced Grid System</a> )
 <ul>
 <li>Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding.</li>
 <li>Use rows to create horizontal groups of columns.</li>
<li>Content should be placed within columns, and only columns may be immediate children of rows.</li>
<li>Predefined grid classes like .row and .col-xs-4 are available for quickly making grid layouts. Less mixins can also be used for more semantic layouts.</li>
<li>Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on .rows.</li>
<li>The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content.</li>
<li>Grid columns are created by specifying the number of twelve available columns you wish to span. For example, three equal columns would use three .col-xs-4.</li>
<li>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</li>
<li>Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, e.g. applying any .col-md-* class to an element will not only affect its styling on medium devices but also on large devices if a .col-lg-* class is not present.</li>
</ul>

{:/nomarkdown}
</div>

<div class="pl-pattern">
### Mobile First

Use bootstrap's mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, with five default responsive tiers.

{::nomarkdown}
<div class="pl-preview">
    <div class="container-fluid pl-grid-example">
        <div class="row">
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
        </div>
        <div class="row">
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
        </div>
        <div class="row">
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
        </div>
        <div class="row">
            <div class="col-sm-4"><div>col-sm-4</div></div>
            <div class="col-sm-4"><div>col-sm-4</div></div>
            <div class="col-sm-4"><div>col-sm-4</div></div>
        </div>
        <div class="row">
            <div class="col-sm-6"><div>col-sm-6</div></div>
            <div class="col-sm-6"><div>col-sm-6</div></div>
        </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}

<div class="container-fluid pl-grid-example">
      <div class="row">
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
            <div class="col-sm-1"><div>col-sm-1</div></div>
        </div>
        <div class="row">
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
            <div class="col-sm-2"><div>col-sm-2</div></div>
        </div>
        <div class="row">
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
            <div class="col-sm-3"><div>col-sm-3</div></div>
        </div>
        <div class="row">
            <div class="col-sm-4"><div>col-sm-4</div></div>
            <div class="col-sm-4"><div>col-sm-4</div></div>
            <div class="col-sm-4"><div>col-sm-4</div></div>
        </div>
        <div class="row">
            <div class="col-sm-6"><div>col-sm-6</div></div>
            <div class="col-sm-6"><div>col-sm-6</div></div>
        </div>
    </div>

{% endhighlight %}
</div>

<div class="pl-pattern">

### Stacked-to-Horizontal

Using a single set of .col-md-* grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any .row.


{::nomarkdown}
<div class="pl-preview">

<div class="container-fluid pl-grid-example">
<div class="row">
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">col-md-8</div>
  <div class="col-md-4">col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4">col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">col-md-6</div>
  <div class="col-md-6">col-md-6</div>
</div>
</div>

</div>

{:/nomarkdown}
{% highlight html %}

<div class="container-fluid pl-grid-example">

<div class="row">
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
  <div class="col-md-1">col-md-1</div>
</div>
<div class="row">
  <div class="col-md-8">col-md-8</div>
  <div class="col-md-4">col-md-4</div>
</div>
<div class="row">
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4">col-md-4</div>
  <div class="col-md-4">col-md-4</div>
</div>
<div class="row">
  <div class="col-md-6">col-md-6</div>
  <div class="col-md-6">col-md-6</div>
</div>

</div>

{% endhighlight %}
</div>

<div class="pl-pattern">

### Mobile and Desktop

Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding .col-xs-* .col-md-* to your columns. See the example below for a better idea of how it all works.

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid pl-grid-example">
<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-xs-12 col-md-8">col-xs-12 col-md-8</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
</div>
<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
</div>
<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-xs-6">col-xs-6</div>
  <div class="col-xs-6">col-xs-6</div>
</div>
</div>
</div>
{:/nomarkdown}
{% highlight html %}

<div class="container-fluid pl-grid-example">

<!-- Stack the columns on mobile by making one full-width and the other half-width -->
<div class="row">
  <div class="col-xs-12 col-md-8">col-xs-12 col-md-8</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
</div>
<!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<div class="row">
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
  <div class="col-xs-6 col-md-4">col-xs-6 col-md-4</div>
</div>
<!-- Columns are always 50% wide, on mobile and desktop -->
<div class="row">
  <div class="col-xs-6">col-xs-6</div>
  <div class="col-xs-6">col-xs-6</div>
</div>


</div>
{% endhighlight %}

</div>
