---
title: "Search"
preview: true
---

<div class="pl-pattern">

### Search

#### Purpose

Users need to search for data.
 
&nbsp;

##### Basic

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

##### With advanced

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

##### Scoped

{::nomarkdown}
<div class="pl-preview">
<div style="width: 600px">
  <form role="search">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-btn">
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
        </span>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
          <label for="tag" class="mdl-textfield__label">Search</label>
          <input type="text" id="tag" class="mdl-textfield__input" />
        </div>
        <span class="input-group-btn">
          <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
      </span>
      </div>
    </div>
  </form>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
  <form role="search">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-btn">
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
        </span>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-js-textfield" style="width: 100%;">
          <label for="tag" class="mdl-textfield__label">Search</label>
          <input type="text" id="tag" class="mdl-textfield__input" />
        </div>
        <span class="input-group-btn">
          <button type="submit" class="btn btn-primary" ><i class="fa fa-search"></i></button>
      </span>
      </div>
    </div>
  </form>
{% endhighlight %}

</div>
