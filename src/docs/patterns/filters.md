---
title: "Filters"
---

<div class="pl-pattern">

<h3>Filters</h3>

<p>Filters provide a set of controls to reduce items in a collection based on attributes the user is interested in (e.g., filtering items by creation date).</p>

Filters can provide the following functionality:

- A list of interesting attributes common to items in a collection, and
possible values to filter by
- An indication of the currently applied filters
- A way to clear the currently applied filters
- Predefined filters


#### Common Filter Types

- Single-select and categorical refinement (links)
- Multi-select (checkboxes)
- Date range
- Sliders
- Single-select dropdowns
</div>

<div class="pl-pattern">

### Vertical Filters

Filters can be stacked vertically on the left side if:

- Filtering is a primary interaction, where users are very likely to use filtering in each session
- You have many filters
- You have enough horizontal screen real estate

Filters can optionally be:

- Collapsible (some or all filters can be collapsed or expanded by default)
- Grouped under subheadings
- Clearable or resettable

{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="margin-top: 8px;">
    <div class="row">
              <div class="cbp-sidebar after-double-header" role="sidebar">
                <div class="row">
                  <div class="col-md-12 pull-left">
                    <form class="filters">
                      <div class="filter-list" role="tablist">
                        <h1 class="filter-heading">Filters <a href="" class="filters-clear">Clear Filters</a></h1>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup8" class="filter-group-title">
                        Year <i class="fa fa-angle-right pull-right"></i>
                        </h2>
                        <div id="filterGroup8" class="collapse in">
                          <div class="filter-group-content">
                            <div class="form-group">
                              <ul class="list-unstyled">
                                <li><a href="">2014</a></li>
                                <li><a href="">2013</a></li>
                                <li><a href="">2012</a></li>
                                <li><a href="">2011</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup2" class="filter-group-title"> <i class="fa fa-angle-right pull-right"></i>
                        Mode of Transportation
                        </h2>
                        <div id="filterGroup2" class="collapse in">
                          <div class="filter-group-content">
                            <div class="form-group">
                              <div class="checkbox">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                  <input id="conveytype1" checked type="checkbox" class="mdl-checkbox__input">
                                  <span for="conveytype1" class="mdl-checkbox__label">Truck</span>
                                  <span class="text-muted">(13)</span>
                                </label>
                              </div>
                              <div class="checkbox">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                  <input id="conveytype2" type="checkbox" class="mdl-checkbox__input">
                                  <span for="conveytype2" class="mdl-checkbox__label">Air</span>
                                  <span class="text-muted">(45)</span>
                                </label>
                              </div>
                              <div class="checkbox">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                  <input id="conveytype3" type="checkbox" class="mdl-checkbox__input">
                                  <span for="conveytype3" class="mdl-checkbox__label">Sea</span>
                                  <span class="text-muted">(18)</span>
                                </label>
                              </div>
                              <div class="checkbox">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                  <input id="conveytype4" type="checkbox" class="mdl-checkbox__input">
                                  <span for="conveytype4" class="mdl-checkbox__label">Rail</span>
                                  <span class="text-muted">(32)</span>
                                </label>
                              </div>
                              <div class="checkbox">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                  <input id="conveytype5" type="checkbox" class="mdl-checkbox__input">
                                  <span for="conveytype5" class="mdl-checkbox__label">Fixed</span>
                                  <span class="text-muted">(43)</span>
                                </label>
                              </div>
                            </div>
                            <a href="" style="margin-left: 21px; display: block; margin-top: -5px;">Show 12 more...</a>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup1" class="filter-group-title">
                          <i class="fa fa-angle-right pull-right"></i> Date range
                        </h2>
                        <div id="filterGroup1" class="collapse in">
                          <div class="filter-group-content">
                            <div class="row">
                              <div class="form-group col-sm-6">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  <label for="startRange" class="mdl-textfield__label"><i class="fa fa-calendar-o fa-fw"></i>&nbsp;Start</label>
                                  <input type="text" id="startRange" class="datepicker mdl-textfield__input" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " />
                                </div>
                              </div>
                              <div class="form-group col-sm-6">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  <label for="endRange" class="mdl-textfield__label"><i class="fa fa-calendar-o fa-fw"></i>&nbsp;End</label>
                                  <input type="text" id="endRange" class="datepicker mdl-textfield__input" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup5" class="filter-group-title">
                        <i class="fa fa-angle-right pull-right"></i> Distance
                        </h2>
                        <div id="filterGroup5" class="collapse in">
                          <div class="filter-group-content">
                            <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--full-width">
                              <select class="mdl-selectfield__select" id="distance">
                                <option value=""></option>
                                <option value="5">Within 5 miles</option>
                                <option value="255">Within 25 miles</option>
                              </select>
                              <label class="mdl-selectfield__label" for="distance">Distance</label>
                            </div>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup6" class="filter-group-title">
                        <i class="fa fa-angle-right pull-right"></i> Name
                        </h2>
                        <div id="filterGroup6" class="collapse in">
                          <div class="filter-group-content">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <label for="serange" class="mdl-textfield__label"><i class="fa fa-search fa-fw"></i>&nbsp;Search</label>
                              <input type="text" id="serange" class="mdl-textfield__input" />
                            </div>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup3" class="filter-group-title">
                          Chart Colors <i class="fa fa-angle-right pull-right"></i>
                        </h2>
                        <div id="filterGroup3" class="collapse in">
                          <div class="filter-group-content">
                            <div class="form-group">
                              <div style="background-color: #E00000;" class="filter-color"></div>
                              <div style="background-color: #009CDE;" class="filter-color"></div>
                              <div style="background-color: #1BAB00;" class="filter-color active"></div>
                              <div style="background-color: #BB16A3;" class="filter-color"></div>
                              <div style="background-color: #F3CE37;" class="filter-color"></div>
                              <div style="background-color: #A7A8AA;" class="filter-color"></div>
                            </div>
                          </div>
                        </div>
                        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup7" class="filter-group-title">
                          Tags <i class="fa fa-angle-right pull-right"></i>
                        </h2>
                        <div id="filterGroup7" class="collapse in">
                          <div class="filter-group-content">
                            <div class="form-group">
                              <ul id="tagsExample" class="list-unstyled">
                                <li class="tag tag-default">
                                  Assignment <i class="fa fa-close fa-muted" data-dismiss="tag"></i>
                                </li>
                                <li class="tag tag-default">
                                  Change of name <i class="fa fa-close fa-muted" data-dismiss="tag"></i>
                                </li>
                              </ul>
                              <div class="input-group">
                                <div class="mdl-textfield mdl-js-textfield" style="width: 100%;">
                                  <label for="tag" class="mdl-textfield__label"><i class="fa fa-tag fa-fw"></i>&nbsp;Enter Tag</label>
                                  <input type="text" id="tag" class="mdl-textfield__input" />
                                </div>
                                <span class="input-group-btn">
                                  <button type="submit" class="btn btn-default tag-example-button" >Add</button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="cbp-sidebar after-double-header" role="sidebar">
<div class="row">
  <div class="col-md-12 pull-left">
    <form class="filters">
      <div class="filter-list" role="tablist">
        <h1 class="filter-heading">Filters <a href="" class="filters-clear">Clear Filters</a></h1>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup8" class="filter-group-title">
        Year <i class="fa fa-angle-right pull-right"></i>
        </h2>
        <div id="filterGroup8" class="collapse in">
          <div class="filter-group-content">
            <div class="form-group">
              <ul class="list-unstyled">
                <li><a href="">2014</a></li>
                <li><a href="">2013</a></li>
                <li><a href="">2012</a></li>
                <li><a href="">2011</a></li>
              </ul>
            </div>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup2" class="filter-group-title"> <i class="fa fa-angle-right pull-right"></i>
        Mode of Transportation
        </h2>
        <div id="filterGroup2" class="collapse in">
          <div class="filter-group-content">
            <div class="form-group">
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input id="conveytype1" checked type="checkbox" class="mdl-checkbox__input">
                  <span for="conveytype1" class="mdl-checkbox__label">Truck</span>
                  <span class="text-muted">(13)</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input id="conveytype2" type="checkbox" class="mdl-checkbox__input">
                  <span for="conveytype2" class="mdl-checkbox__label">Air</span>
                  <span class="text-muted">(45)</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input id="conveytype3" type="checkbox" class="mdl-checkbox__input">
                  <span for="conveytype3" class="mdl-checkbox__label">Sea</span>
                  <span class="text-muted">(18)</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input id="conveytype4" type="checkbox" class="mdl-checkbox__input">
                  <span for="conveytype4" class="mdl-checkbox__label">Rail</span>
                  <span class="text-muted">(32)</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input id="conveytype5" type="checkbox" class="mdl-checkbox__input">
                  <span for="conveytype5" class="mdl-checkbox__label">Fixed</span>
                  <span class="text-muted">(43)</span>
                </label>
              </div>
            </div>
            <a href="" style="margin-left: 21px; display: block; margin-top: -5px;">Show 12 more...</a>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup1" class="filter-group-title">
          <i class="fa fa-angle-right pull-right"></i> Date range
        </h2>
        <div id="filterGroup1" class="collapse in">
          <div class="filter-group-content">
            <div class="row">
              <div class="form-group col-sm-6">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <label for="startRange" class="mdl-textfield__label"><i class="fa fa-calendar-o fa-fw"></i>&nbsp;Start</label>
                  <input type="text" id="startRange" class="datepicker mdl-textfield__input" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " />
                </div>
              </div>
              <div class="form-group col-sm-6">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <label for="endRange" class="mdl-textfield__label"><i class="fa fa-calendar-o fa-fw"></i>&nbsp;End</label>
                  <input type="text" id="endRange" class="datepicker mdl-textfield__input" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup5" class="filter-group-title">
        <i class="fa fa-angle-right pull-right"></i> Distance
        </h2>
        <div id="filterGroup5" class="collapse in">
          <div class="filter-group-content">
            <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--full-width">
              <select class="mdl-selectfield__select" id="distance">
                <option value=""></option>
                <option value="5">Within 5 miles</option>
                <option value="255">Within 25 miles</option>
              </select>
              <label class="mdl-selectfield__label" for="distance">Distance</label>
            </div>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup6" class="filter-group-title">
        <i class="fa fa-angle-right pull-right"></i> Name
        </h2>
        <div id="filterGroup6" class="collapse in">
          <div class="filter-group-content">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <label for="serange" class="mdl-textfield__label"><i class="fa fa-search fa-fw"></i>&nbsp;Search</label>
              <input type="text" id="serange" class="mdl-textfield__input" />
            </div>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup3" class="filter-group-title">
          Chart Colors <i class="fa fa-angle-right pull-right"></i>
        </h2>
        <div id="filterGroup3" class="collapse in">
          <div class="filter-group-content">
            <div class="form-group">
              <div style="background-color: #E00000;" class="filter-color"></div>
              <div style="background-color: #009CDE;" class="filter-color"></div>
              <div style="background-color: #1BAB00;" class="filter-color active"></div>
              <div style="background-color: #BB16A3;" class="filter-color"></div>
              <div style="background-color: #F3CE37;" class="filter-color"></div>
              <div style="background-color: #A7A8AA;" class="filter-color"></div>
            </div>
          </div>
        </div>
        <h2 aria-expanded="true" data-toggle="collapse" role="tab" data-target="#filterGroup7" class="filter-group-title">
          Tags <i class="fa fa-angle-right pull-right"></i>
        </h2>
        <div id="filterGroup7" class="collapse in">
          <div class="filter-group-content">
            <div class="form-group">
              <ul id="tagsExample" class="list-unstyled">
                <li class="tag tag-default">
                  Assignment <i class="fa fa-close fa-muted" data-dismiss="tag"></i>
                </li>
                <li class="tag tag-default">
                  Change of name <i class="fa fa-close fa-muted" data-dismiss="tag"></i>
                </li>
              </ul>
              <div class="input-group">
                <div class="mdl-textfield mdl-js-textfield" style="width: 100%;">
                  <label for="tag" class="mdl-textfield__label"><i class="fa fa-tag fa-fw"></i>&nbsp;Enter Tag</label>
                  <input type="text" id="tag" class="mdl-textfield__input" />
                </div>
                <span class="input-group-btn">
                  <button type="submit" class="btn btn-default tag-example-button" >Add</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Predefined Filters

Predefined filters are either provided by the system or are defined by the user.

{::nomarkdown}
<div class="pl-preview">
<ul class="nav nav-pills" role="tablist">
  <li><a href="#" role="tab" data-toggle="tab">All cases <span class="badge">39</span></a></li>
  <li class="active"><a href="#" role="tab" data-toggle="tab">New cases <span class="badge">5</span></a></li>
  <li><a href="#" role="tab" data-toggle="tab">Unassigned cases <span class="badge">2</span></a></li>
  <li><a href="#" role="tab" data-toggle="tab">Assigned cases <span class="badge">32</span></a></li>
</ul>
</div>
{:/nomarkdown}

{% highlight html %}
<ul class="nav nav-pills" role="tablist">
  <li><a href="#" role="tab" data-toggle="tab">All cases <span class="badge">39</span></a></li>
  <li class="active"><a href="#" role="tab" data-toggle="tab">New cases <span class="badge">5</span></a></li>
  <li><a href="#" role="tab" data-toggle="tab">Unassigned cases <span class="badge">2</span></a></li>
  <li><a href="#" role="tab" data-toggle="tab">Assigned cases <span class="badge">32</span></a></li>
</ul>
{% endhighlight %}
</div>

<div class="pl-pattern">

### Collapsed Filters

Filters can be collapsed to a single dropdown if:

- Screen real estate is limited due to constrained or dense layouts
- Filtering is not a primary interaction, where collapsing and tucking away the filtering functionality is acceptable

#### Filters With Side Navigation

For many or complex filters, you may want to organize them with a menu along the side.

{::nomarkdown}
<div class="pl-preview">
    <div class="dropdown">
        <button type="button" class="btn btn-link dropdown-toggle collapsed-filter" data-toggle="dropdown" aria-expanded="false"><span class="badge" style="margin-right: 5px;">3</span>Filters <span class="caret"></span></button>
        <div class="dropdown-menu collapsed-filter" role="menu" style="padding: 0; width: 500px;">
            <form class="clearfix" role="form">
                <div class="keyline-right" style="width: 200px; min-height: 300px; float: left;">
                    <ul class="nav nav-stacked" role="tab-list" style="margin-top: 10px">
                        <li role="presentation" class="active"><a role="tab" data-toggle="tab" href="#">Applied filters <span class="badge pull-right">3</span></a></li>
                        <li role="presentation" class="divider"></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Year</a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Conveyance type <span class="badge pull-right">2</span></a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Date range</a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Distance</a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Name <span class="badge pull-right">1</span></a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Colors</a></li>
                        <li role="presentation"><a role="tab" data-toggle="tab" href="#">Tags</a></li>
                    </ul>
                </div>
                <div style="margin-left: 200px; max-height: 300px; overflow: auto;">
                    <div style="opacity: 1; display: inline-block; width: 100%;">
                        <div class="modal-body">
                            <a href="" class="pull-right">Clear all</a>
                            <div class="form-group">
                                <label class="control-label">Conveyance type </label>
                                <div class="">
                                    <ul class="list-unstyled">
                                      <li class="tag tag-default subtle">
                                        Truck
                                        <a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
                                      </li>
                                      <li class="tag tag-default subtle">
                                        Air
                                        <a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
                                      </li>
                                        <li class="tag tag-default subtle">
                                          Sea
                                          <a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Name</label>
                                <div class="">
                                    <ul class="list-unstyled">
                                    <li class="tag tag-default subtle">
                                      John
                                      <a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
{:/nomarkdown}

<!-- </div>
<div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
<select id="se17" class="mdl-selectfield__select" aria-expanded="false">
<option value=""></option>
<option value="2016">2016</option>
<option value="2015">2015</option>
<option value="2014">2014</option>
</select>
<label for="se17" class="mdl-selectfield__label">Year</label>
</div>
<div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
<select id="se17" class="mdl-selectfield__select" aria-expanded="false">
<option value=""></option>
<option value="A">Option A</option>
<option value="B">Option B</option>
<option value="C">Option C</option>
</select>
<label for="se17" class="mdl-selectfield__label">With floating label</label>
</div>    
</form>
</div>
</div>
</div>
</div>
</div>
<!-- end modal -->
<!-- </div>
</div> -->

{% highlight html %}

<div class="dropdown">
<button type="button" class="btn btn-link dropdown-toggle collapsed-filter" data-toggle="dropdown" aria-expanded="false"><span class="badge" style="margin-right: 5px;">3</span>Filters <span class="caret"></span></button>
<div class="dropdown-menu collapsed-filter" role="menu" style="padding: 0; width: 500px;">
<form class="clearfix" role="form">
<div class="keyline-right" style="width: 200px; min-height: 300px; float: left;">
<ul class="nav nav-stacked" role="tab-list" style="margin-top: 10px">
<li role="presentation" class="active"><a role="tab" data-toggle="tab" href="#">Applied filters <span class="badge pull-right">3</span></a></li>
<li role="presentation" class="divider"></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Year</a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Conveyance type <span class="badge pull-right">2</span></a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Date range</a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Distance</a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Name <span class="badge pull-right">1</span></a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Colors</a></li>
<li role="presentation"><a role="tab" data-toggle="tab" href="#">Tags</a></li>
</ul>
</div>
<div style="margin-left: 200px; max-height: 300px; overflow: auto;">
<div style="opacity: 1; display: inline-block; width: 100%;">
<div class="modal-body">
<a href="" class="pull-right">Clear all</a>
<div class="form-group">
<label class="control-label">Conveyance type </label>
<div class="">
<ul class="list-unstyled">
<li class="tag tag-default subtle">
Truck
<a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
</li>
<li class="tag tag-default subtle">
Air
<a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
</li>
<li class="tag tag-default subtle">
Sea
<a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
</li>
</ul>
</div>
</div>
<div class="form-group">
<label class="control-label">Name</label>
<div class="">
<ul class="list-unstyled">
<li class="tag tag-default subtle">
John
<a href="#Tags" class="fa fa-close fa-muted" data-dismiss="tag"></a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
{% endhighlight %}
</div>