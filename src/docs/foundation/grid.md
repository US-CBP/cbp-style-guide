---
title: "Grid"
---

<div class="pl-pattern">

<h3>Grid</h3>

The 12 column grid can be used for aligning components and assisting in responsive behavior. It is not intended to be the only solution for aligning components. [See the Layouts](layouts.html) section for the most common example of layouts using the grid.

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
