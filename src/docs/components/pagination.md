---
title: "Pagination"
---

<div class="pl-pattern">
<h3>Pagination</h3>

Pagination allows large collections of content to be displayed within the same area on a page by allowing a user to from set of results to another. 

#### Description
Collections of data are often split into multiple pages for performance reasons. Either the size of the data is too much to download at once, or the size of the data would take too long to render all at once. Pagination controls allow for the user to retrieve or view pages of data in a performant matter.

#### Basic Functionality
This pagination pattern provides a few variations of the following features:

- Navigating to prev/next pages
- Navigating to first/last pages
- Jumping to a manually entered page/item
- Adjusting the number of items per page

The features should be chosen based on the user's needs, the data, and the space available. Don't include pagination features that aren't necessary. If your users have no need to adjust the paging size or jump to a manually entered page for a particular type of data, don't include those features.
</div>


<div class="pl-pattern">

### Examples
The examples below show various configurations of pagination features. Depending on the data, you may treat your pages as item ranges `Showing 150-160` or as pages `Page 15 of 25`.

#### Full
These show possible configurations for layouts with large amounts of screen real estate. 


{::nomarkdown}
<div class="pl-preview">
<div class="form-inline">
    <div class="form-group">
      <div class="btn-group dropdown">
        <button type="button" id="dropdownMenu9" class="btn-link btn dropdown-toggle" data-toggle="dropdown">
        10 per page
        <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu9">
          <li role="presentation" class="dropdown-header">Show up to</li>
          <li role="presentation" class="active">
            <a role="menuitem" tabindex="-1" href="#">10 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">25 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">50 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">100 items</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="form-group">
      <div class="btn-group">
        <a class="btn btn-default" href="#">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="btn btn-default" href="#">1</a>
        <a class="btn btn-default" href="#">...</a>
        <a class="btn btn-default" href="#">13</a>
        <a class="btn btn-default" href="#">14</a>
        <a class="btn btn-default active" href="#">15</a>
        <a class="btn btn-default" href="#">16</a>
        <a class="btn btn-default" href="#">17</a>
        <a class="btn btn-default" href="#">...</a>
        <a class="btn btn-default" href="#">25</a>
        <a class="btn btn-default" href="#">
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="mdl-textfield mdl-js-textfield" style="width: 150px;">
          <label class="mdl-textfield__label">15 out of 40</label>
          <input type="text" class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" />
        </div>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Go</button>
        </span>
      </div>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="form-inline">
    <div class="form-group">
      <div class="btn-group dropdown">
        <button type="button" id="dropdownMenu9" class="btn-link btn dropdown-toggle" data-toggle="dropdown">
        10 per page
        <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu9">
          <li role="presentation" class="dropdown-header">Show up to</li>
          <li role="presentation" class="active">
            <a role="menuitem" tabindex="-1" href="#">10 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">25 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">50 items</a>
          </li>
          <li role="presentation">
            <a role="menuitem" tabindex="-1" href="#">100 items</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="form-group">
      <div class="btn-group">
        <a class="btn btn-default" href="#">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="btn btn-default" href="#">1</a>
        <a class="btn btn-default" href="#">...</a>
        <a class="btn btn-default" href="#">13</a>
        <a class="btn btn-default" href="#">14</a>
        <a class="btn btn-default active" href="#">15</a>
        <a class="btn btn-default" href="#">16</a>
        <a class="btn btn-default" href="#">17</a>
        <a class="btn btn-default" href="#">...</a>
        <a class="btn btn-default" href="#">25</a>
        <a class="btn btn-default" href="#">
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="mdl-textfield mdl-js-textfield" style="width: 150px;">
          <label class="mdl-textfield__label">15 out of 40</label>
          <input type="text" class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" />
        </div>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Go</button>
        </span>
      </div>
    </div>
</div>
{% endhighlight %}


#### Small
A possible configuration for very narrow/confined layouts. 


{::nomarkdown}
<div class="pl-preview">
    <div class="form-inline">
      <div class="form-group dropdown">
        <div class="btn-group">
          <a href="#" class="btn btn-default">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="btn btn-default dropdown-toggle" id="dropdownMenu6" data-toggle="dropdown" href="">
            15/25 <span class="caret"></span>
          </a>
          <a href="#" class="btn btn-default">
            <i class="fa fa-angle-right"></i>
          </a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu6">
            <li role="presentation" class="dropdown-header">Show up to</li>
            <li role="presentation" class="active">
              <a role="menuitem" tabindex="-1" href="#">10 items</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">25 items</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">50 items</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">100 items</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="mdl-textfield mdl-js-textfield" style="width: 150px;">
            <label class="mdl-textfield__label">15 out of 40</label>
            <input type="text" class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" />
          </div>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">Go</button>
          </span>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="form-inline">
  <div class="form-group dropdown">
    <div class="btn-group">
      <a href="#" class="btn btn-default">
        <i class="fa fa-angle-left"></i>
      </a>
      <a class="btn btn-default dropdown-toggle" id="dropdownMenu6" data-toggle="dropdown" href="">
        15/25 <span class="caret"></span>
      </a>
      <a href="#" class="btn btn-default">
        <i class="fa fa-angle-right"></i>
      </a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu6">
        <li class="divider"></li>
        <li role="presentation" class="dropdown-header">Show up to</li>
        <li role="presentation" class="active">
          <a role="menuitem" tabindex="-1" href="#">10 items</a>
        </li>
        <li role="presentation">
          <a role="menuitem" tabindex="-1" href="#">25 items</a>
        </li>
        <li role="presentation">
          <a role="menuitem" tabindex="-1" href="#">50 items</a>
        </li>
        <li role="presentation">
          <a role="menuitem" tabindex="-1" href="#">100 items</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="form-group">
    <div class="input-group">
      <div class="mdl-textfield mdl-js-textfield" style="width: 150px;">
        <label class="mdl-textfield__label">15 out of 40</label>
        <input type="text" class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" />
      </div>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go</button>
      </span>
    </div>
  </div>
</div>
{% endhighlight %}

</div>



