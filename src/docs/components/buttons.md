---
title: "Buttons"
---

<div class="pl-pattern">

<h3>Buttons</h3>

<p>Buttons are mildly skeuomorphic, interactive elements that utilize shape and color to guide users to take actions or make choices. They should have a clear and appropriate verb that describes the choice the user is being presented with. Icons may be used in conjunction with text, but they must be contextually appropriate and send the same message if the text were hidden.</p>
</div>

<div class="pl-pattern">

### Button Styles

There are 6 button styles:

- __Default__, the general button style.
- __Primary__, indicates the critical, or most important action on a form/page.
- __Danger__, indicates a dangerous, generally destructive action, such as deleting.
- __Success__, indicates a positive action.
- __Warning__, indicates an action that may have some side effects, such as giving a user admin access.
- __Link__, used for non-critical actions. Useful for keeping the interface simple.

All buttons are prefixed with the `btn` class. The `btn` class can be applied to any element. Try to use `<button>` elements when an action won't change the URL/route, and `<a>` elements when the action will change the URL/route.

{::nomarkdown}
<div class="pl-preview">
    <button type="button" class="btn btn-default">Default</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-link">Link</button>
</div>
{:/nomarkdown}

{% highlight html %}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-link">Link</button>
{% endhighlight %}

&nbsp;

##### Disabled state

{::nomarkdown}
<div class="pl-preview">
    <button disabled type="button" class="btn btn-default">Default</button>
    <button disabled type="button" class="btn btn-primary">Primary</button>
    <button disabled type="button" class="btn btn-success">Success</button>
    <button disabled type="button" class="btn btn-info">Info</button>
    <button disabled type="button" class="btn btn-danger">Danger</button>
    <button disabled type="button" class="btn btn-warning">Warning</button>
    <button disabled type="button" class="btn btn-link">Link</button>
</div>
{:/nomarkdown}

{% highlight html %}
<button disabled type="button" class="btn btn-default">Default</button>
<button disabled type="button" class="btn btn-primary">Primary</button>
<button disabled type="button" class="btn btn-success">Success</button>
<button disabled type="button" class="btn btn-info">Info</button>
<button disabled type="button" class="btn btn-danger">Danger</button>
<button disabled type="button" class="btn btn-warning">Warning</button>
<button disabled type="button" class="btn btn-link">Link</button>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Button Sizes

There are 4 different button sizes:

- __Large -__ use the `btn-lg` class
- __Normal -__ no extra classes necessary
- __Small -__ use the `btn-sm` class
- __Extra small -__ use the `btn-xs` class

{::nomarkdown}
<div class="pl-preview">
    <button type="button" class="btn btn-lg btn-default">Button</button>
    <button type="button" class="btn btn-default">Button</button>
    <button type="button" class="btn btn-sm btn-default">Button</button>
    <button type="button" class="btn btn-xs btn-default">Button</button>
</div>
{:/nomarkdown}

{% highlight html %}
<button type="button" class="btn btn-lg btn-default">Button</button>
<button type="button" class="btn btn-default">Button</button>
<button type="button" class="btn btn-sm btn-default">Button</button>
<button type="button" class="btn btn-xs btn-default">Button</button>
{% endhighlight %}

#### Block Level Buttons
Use the `btn-block` class for buttons that fill the width of their container. These are useful for narrow containers and cleaning up alignment.

{::nomarkdown}
<div class="pl-preview">
    <div style="width: 280px;">
        <button type="button" class="btn btn-primary btn-block">Block level</button>
        <button type="button" class="btn btn-default btn-block">Block level</button>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<button type="button" class="btn btn-default btn-block">Block level</button>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Toggle Buttons

Similar to a checkbox, toggle buttons can be toggled between active or not active.

Add the `active` class and the `aria-pressed="true"` attribute to a button to visually hold a depressed state.

{::nomarkdown}
<div class="pl-preview">
    <button type="button" class="btn btn-default active" aria-pressed="true">Active</button>
    <button type="button" class="btn btn-default">Normal</button>
    <div class="btn-group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default active" aria-pressed="true">Active</button>
        <button type="button" class="btn btn-default">Right</button>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<button type="button" class="btn btn-default active" aria-pressed="true">Active</button>
<button type="button" class="btn btn-default">Normal</button>
<div class="btn-group">
    <button type="button" class="btn btn-default">Left</button>
    <button type="button" class="btn btn-default active" aria-pressed="true">Active</button>
    <button type="button" class="btn btn-default">Right</button>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Dropdown Buttons
Dropdown buttons can provide a menu or popover when clicked.

{::nomarkdown}
<div class="pl-preview">
    <div class="btn-group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Dropdown <span class="caret"></span></button>
        <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
        </ul>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Split Buttons

Split buttons contain both a button and a dropdown. Clicking the button performs the action. Clicking the dropdown reveals other actions. Generally, the button is the primary or most common action, and items in the dropdown are secondary or less common actions.

{::nomarkdown}
<div class="pl-preview">
    <div class="btn-group">
      <button type="button" class="btn btn-default">Action</button>
      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div> <div class="btn-group">
      <button type="button" class="btn btn-primary">Action</button>
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="btn-group">
  <button type="button" class="btn btn-default">Action</button>
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Icon Buttons

Icon buttons are buttons with an icon inside. An icon button may or may not have text. Icon buttons can help save space or improve the ability to scan/find buttons quickly.

Use `btn-icon-only` for buttons with only an icon in it. This optimizes the padding.

For an icon without a border, use a `btn-hover`.

{::nomarkdown}
<div class="pl-preview">
    <button type="button" class="btn btn-default">
    <i class="fa fa-comment"></i> &nbsp;Comment
    </button>
    <button type="button" class="btn btn-icon-only btn-default">
    <i class="fa fa-print"></i>
    <span class="sr-only">Print</span>
    </button>
    <button type="button" class="btn btn-icon-only btn-primary">
    <i class="fa fa-inverse fa-floppy-o"></i>
    <span class="sr-only">Save</span>
    </button>
    <button type="button" class="btn btn-icon-only btn-hover">
    <i class="fa fa-calendar-o"></i>
    <span class="sr-only">Calendar</span>
    </button>
    <button type="button" class="btn btn-default">
    Lock&nbsp;
    <i class="fa fa-arrow-right"></i>
    </button>

</div>
{:/nomarkdown}

{% highlight html %}
<button type="button" class="btn btn-default">
    <i class="fa fa-comment"></i> &nbsp;Comment
</button>
<button type="button" class="btn btn-icon-only btn-default">
    <i class="fa fa-print"></i>
    <span class="sr-only">Print</span>
</button>
<button type="button" class="btn btn-icon-only btn-primary">
    <i class="fa fa-inverse fa-floppy-o"></i>
    <span class="sr-only">Save</span>
</button>
<button type="button" class="btn btn-icon-only btn-hover">
    <i class="fa fa-calendar-o"></i>
    <span class="sr-only">Calendar</span>
</button>
<button type="button" class="btn btn-default">
    Lock&nbsp;
    <i class="fa fa-arrow-right"></i>
</button>

{% endhighlight %}

</div>
