---
title: "Search"
---

<div class="pl-pattern">

<h3>Search</h3>

Users can specify a single word, or a phrase, to find particular relevant pieces of content without the use of primary or secondary navigation. Search can be used to discover content, or as a way to filter content results. Search can be used an overarching element that searches an entire application or affixed to another component such as a data table.
</div>

<div class="pl-pattern">

### Examples

#### Basic

{::nomarkdown}
<div class="pl-preview">
<div style="width: 400px">
  <div class="input-group">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
      <label for="tag" class="mdl-textfield__label">Search</label>
      <input type="text" id="tag" class="mdl-textfield__input" />
    </div>
    <span class="input-group-btn">
      <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
    </span>
  </div>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
  <div class="input-group">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
      <label for="tag" class="mdl-textfield__label">Search</label>
      <input type="text" id="tag" class="mdl-textfield__input" />
    </div>
    <span class="input-group-btn">
      <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
    </span>
  </div>
{% endhighlight %}

#### Advanced Search

{::nomarkdown}
<div class="pl-preview">
<div style="width: 400px">
  <div class="input-group">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
      <label for="tag" class="mdl-textfield__label">Search</label>
      <input type="text" id="tag" class="mdl-textfield__input" />
    </div>
    <span class="input-group-btn">
      <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
      <button type="button" class="btn btn-link">Advanced Search</button>
  </span>
  </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
 <div class="input-group">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
      <label for="tag" class="mdl-textfield__label">Search</label>
      <input type="text" id="tag" class="mdl-textfield__input" />
    </div>
    <span class="input-group-btn">
      <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
      <button type="button" class="btn btn-link">Advanced Search</button>
  </span>
</div>
{% endhighlight %}

</div>
