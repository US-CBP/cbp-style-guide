---
title: "Tooltips"
---

<div class="pl-pattern">
<h3>Tooltips</h3>

#### Purpose
Users need additional, potentially optional information on demand. 

#### Description
Tooltips provide information when an element is hovered over.

- Tooltips are attached to an element and appear when the element is hovered over
- The show and hide delays of a tooltip may vary depending on the need, but the default is 200ms to show and 0ms to hide
- Tooltips cannot be interacted with

Use tooltips for:

- Icon and button descriptions
- Expanding shortened date/time stamps


{::nomarkdown}
<div class="pl-preview">
<div class="tooltip fade in right" style="display: inline-block; position: relative; width: auto;">
  <div class="tooltip-inner">I'm a tooltip!</div>
  <div class="tooltip-arrow"></div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="tooltip fade in right" style="display: inline-block; position: relative; width: auto;">
  <div class="tooltip-inner">I'm a tooltip!</div>
  <div class="tooltip-arrow"></div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Positioning
Tooltips can be positioned either above, below, to the left, or to the right of target element. In many situations, tooltips should be positioned dynamically based on the available space around the target element.

{::nomarkdown}
<div class="pl-preview">
    <div style="margin-top: 65px; width: 120px;">
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip above">Position above</button>
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip to left">Position left</button>
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip to right">Position right</button>
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip below">Position below</button>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div style="margin-top: 65px; width: 120px;">
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip above">Position above</button>
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip to left">Position left</button>
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip to right">Position right</button>
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip below">Position below</button>
</div>
{% endhighlight %}
<div class="pl-pattern">
### Content
The content of a tooltip can vary. It's best to keep it to a few words.

{::nomarkdown}
<div class="pl-preview">
    <div style="margin-top: 25px; width: 120px;">
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Print">Short</button>
      <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper volutpat ultrices. Mauris lobortis lacus vel ullamcorper vestibulum.'>Wrapping</button>
      <button type="button" class="btn btn-block btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='<i class="fa fa-inverse fa-calendar-o"></i>
      &nbsp;
      <strong>January 21</strong>
      , 2014'>
      Rich content
      </button>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div style="margin-top: 25px; width: 120px;">
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" title="Print">Short</button>
  <button type="button" class="btn btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper volutpat ultrices. Mauris lobortis lacus vel ullamcorper vestibulum.'>Wrapping</button>
  <button type="button" class="btn btn-block btn-block btn-default" data-toggle="tooltip" data-placement="right" data-html="true" title='<i class="fa fa-inverse fa-calendar-o"></i>
  &nbsp;
  <strong>January 21</strong>
  , 2014'>
  Rich content
  </button>
</div>

{% endhighlight %}
</div>
