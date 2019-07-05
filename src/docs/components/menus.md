---
title: "Menus"
---

<div class="pl-pattern">
<h3>Menus</h3>

When the user needs to perform an action, and depending on space constraints or the frequency of use, the action does not need to be visible at all times.

#### Description
Menus provide a list of available actions and options. They're used in dropdowns, selects, and context menus. 

</div>

<div class="pl-pattern">

### Basic Functionality
Menus appear relative to the control or interaction that triggered the menu. Clicking an item from the menu performs the action or selects the option. For most actions, the menu should close when a menu item is clicked. If the clicked menu item is part of a set of multi-selectable options, then the menu should stay open. 

- Menus may have submenus, icons, dividers, category labels, and checkboxes
- Menu items may change depending on the context (e.g., `Mark as read` vs `Mark as unread`)
- Use dividers to group related menu items
- Use submenus to separate large sets of menu items
- Include keyboard shortcuts if applicable
- Disable menu items rather than hiding to improve discoverability of features
- Indicate submenus with a caret
- Indicate dialogs with an ellipsis
- Use sentence case for menu items

{::nomarkdown}
<h4>Example</h4>
<div class="pl-preview">
    <ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu" role="menu">
      <li role="presentation">
        <a href="">Bold
          <span class="pull-right text-muted">Ctrl+B</span>
        </a>
      </li>
      <li role="presentation">
        <a href="">Italic
          <span class="pull-right text-muted">Ctrl+I</span>
        </a>
      </li>
      <li role="presentation">
        <a href="">Underline
          <span class="pull-right text-muted">Ctrl+U</span>
        </a>
      </li>
      <li role="presentation" class="divider"></li>
      <li role="presentation">
        <a href="">Font
          <i class="fa fa-caret-right pull-right"></i>
        </a>
      </li>
      <li role="presentation">
        <a href="">Font size
          <i class="fa fa-caret-right pull-right"></i>
        </a>
      </li>
      <li role="presentation" class="divider"></li>
      <li role="presentation" class="disabled">
        <a>Conditional formatting...</a>
      </li>
      <li role="presentation" class="divider"></li>
      <li role="presentation">
        <a href="">Clear formatting</a>
      </li>
    </ul>
</div>
{:/nomarkdown}

{% highlight html %}
<ul class="dropdown-menu" role="menu">
  <li role="presentation">
    <a href="">Bold
      <span class="pull-right text-muted">Ctrl+B</span>
    </a>
  </li>
  <li role="presentation">
    <a href="">Italic
      <span class="pull-right text-muted">Ctrl+I</span>
    </a>
  </li>
  <li role="presentation">
    <a href="">Underline
      <span class="pull-right text-muted">Ctrl+U</span>
    </a>
  </li>
  <li role="presentation" class="divider"></li>
  <li role="presentation">
    <a href="">Font
      <i class="fa fa-caret-right pull-right"></i>
    </a>
  </li>
  <li role="presentation">
    <a href="">Font size
      <i class="fa fa-caret-right pull-right"></i>
    </a>
  </li>
  <li role="presentation" class="divider"></li>
  <li role="presentation" class="disabled">
    <a>Conditional formatting...</a>
  </li>
  <li role="presentation" class="divider"></li>
  <li role="presentation">
    <a href="">Clear formatting</a>
  </li>
</ul>
{% endhighlight %}

</div>


<div class="pl-pattern">
### Submenus

Submenus help organize menu items.

{::nomarkdown}
<div class="pl-preview">
    <ul style="display: inline-block; position: relative; float: none; width: 220px;" class="dropdown-menu" role="menu">
      <li role="presentation">
        <a href="">Submenu item
          <i class="fa fa-caret-right pull-right"></i>
        </a>
      </li>
      <li role="presentation" class="disabled">
        <a href="">Disabled submenu item
          <i class="fa fa-caret-right pull-right"></i>
        </a>
      </li>
    </ul>
</div>
{:/nomarkdown}

{% highlight html %}
<ul class="dropdown-menu" role="menu">
  <li role="presentation">
    <a href="">Submenu item
      <i class="fa fa-caret-right pull-right"></i>
    </a>
  </li>
  <li role="presentation" class="disabled">
    <a href="">Disabled submenu item
      <i class="fa fa-caret-right pull-right"></i>
    </a>
  </li>
</ul>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Icons

Use icons for menu items that have a common, easily recognizable icon. You don't need an icon for every menu item, only for menu items that are more frequently used. 

If you have an icon in a menu, ensure that all menu items are aligned appropriately.

{::nomarkdown}
<div class="pl-preview">
<ul style="display: inline-block; position: relative; float: none; width: 200px;" class="dropdown-menu has-icon" role="menu">
  <li role="presentation">
    <a href="">
      <i class="fa fa-fw fa-star dropdown-menu-icon"></i> &nbsp; Star
    </a>
  </li>
  <li role="presentation">
    <a href="">&nbsp; Share...</a>
  </li>
  <li class="divider" role="presentation"></li>
  <li role="presentation">
    <a href="">
      <i class="fa fa-fw fa-trash-o dropdown-menu-icon"></i> &nbsp; Remove
    </a>
  </li>
</ul>
</div>
{:/nomarkdown}

{% highlight html %}
<ul class="dropdown-menu has-icon" role="menu">
  <li role="presentation">
    <a href="">
      <i class="fa fa-fw fa-star dropdown-menu-icon"></i> &nbsp; Star
    </a>
  </li>
  <li role="presentation">
    <a href="">&nbsp; Share...</a>
  </li>
  <li class="divider" role="presentation"></li>
  <li role="presentation">
    <a href="">
      <i class="fa fa-fw fa-trash-o dropdown-menu-icon"></i> &nbsp; Remove
    </a>
  </li>
</ul>
{% endhighlight %}
</div>
