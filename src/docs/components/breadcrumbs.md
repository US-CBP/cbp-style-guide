---
title: "Breadcrumbs"
---

<div class="pl-pattern">
<h3>Breadcrumbs</h3>

Breadcrumbs are a navigation element where a user is shown their current location in relation to the application’s overall hierarchy.

#### Description

- Breadcrumbs display the current path as links separated by carets to indicate each level
- The navigation root is the first element on the left, the current location is the last element to the right
- The current location is not clickable
- Clicking on a link takes you to that screen

Depending on the complexity of the navigational hierarchy and the type of page or application, it may make sense for the breadcrumb to represent only part of the hierarchy while sub tabs/trees/navigation represent the remaining hierarchy.

{::nomarkdown}
<div class="pl-preview">
    <ol class="breadcrumb">
      <li class="active">Home</li>
    </ol>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li class="active">Library</li>
    </ol>
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ol>
</div>
{:/nomarkdown}

{% highlight html %}
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
{% endhighlight %}

</div>
