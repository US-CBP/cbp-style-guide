---
title: "Popovers"
---

<div class="pl-pattern">
<h3>Popovers</h3>

Popovers help users access additional related information or functionality without a change in context.

#### Description
- Popovers are a cross between a dialog and a tooltip
- Popovers are smaller contextual dialogs that are generally triggered by a click
- They may or may not provide additional interactive controls
- Popovers display information or functionality related to a particular item or control
- Popovers can be dismissed via a close icon, clicking the control that opened it, or by clicking anywhere outside of the popover
- The amount of content in a popover should be relatively short, but they can be scrollable if necessary
- Popovers should be positioned based on the screen space available, 

Use a popover instead of a tooltip or dialog when:

- You want a contextual relationship that a dialog can't provide
- You need to provide relatively simple interactions
- You have more text/content than can comfortably fit in a tooltip

{::nomarkdown}
<div class="pl-preview">
<div class="panel">
  <div class="panel-body">
    <h3>Static Popover</h3>
    <div class="bs-example bs-example-popover">
      <div class="popover left">
        <div class="arrow"></div>
        <div class="popover-header">
          <button type="button" class="close" data-dismiss="popover">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
          </button>
          <h3 class="popover-title">Add note</h3>
        </div>
        <div class="popover-content">
          <textarea placeholder="Enter note here" class="form-control" name="" id="" rows="3"></textarea>
        </div>
        <div class="popover-toolbar">
          <button class="btn btn-hover btn-icon-only">
          <i class="fa fa-image"></i>
          <span class="sr-only">Add image</span>
          </button>
          <button class="btn btn-hover btn-icon-only">
          <i class="fa fa-chain"></i>
          <span class="sr-only">Add link</span>
          </button>
          <button class="btn btn-primary pull-right">Add</button>
        </div>
      </div>
      <div class="popover right">
        <div class="arrow"></div>
        <div class="popover-content">
          <p>
            Simple search: Type a term in the search field and select the search button.
          </p>
          <p>
            Advanced search: Advanced boolean operators may be used. The default operator when searching multiple terms is “AND”.
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="panel">
  <div class="panel-body">
    <h3>Static Popover</h3>
    <div class="bs-example bs-example-popover">
      <div class="popover left">
        <div class="arrow"></div>
        <div class="popover-header">
          <button type="button" class="close" data-dismiss="popover">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
          </button>
          <h3 class="popover-title">Add note</h3>
        </div>
        <div class="popover-content">
          <textarea placeholder="Enter note here" class="form-control" name="" id="" rows="3"></textarea>
        </div>
        <div class="popover-toolbar">
          <button class="btn btn-hover btn-icon-only">
          <i class="fa fa-image"></i>
          <span class="sr-only">Add image</span>
          </button>
          <button class="btn btn-hover btn-icon-only">
          <i class="fa fa-chain"></i>
          <span class="sr-only">Add link</span>
          </button>
          <button class="btn btn-primary pull-right">Add</button>
        </div>
      </div>
      <div class="popover right">
        <div class="arrow"></div>
        <div class="popover-content">
          <p>
            Simple search: Type a term in the search field and select the search button.
          </p>
          <p>
            Advanced search: Advanced boolean operators may be used. The default operator when searching multiple terms is “AND”.
          </p>
          <a href="">Learn more</a>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</div>
{% endhighlight %}


#### Live Examples

{::nomarkdown}
<div class="pl-preview">
    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on left
    </button>
    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on top
    </button>
    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on bottom
    </button>
    <button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on right
    </button>
</div>
{:/nomarkdown}
</div>
