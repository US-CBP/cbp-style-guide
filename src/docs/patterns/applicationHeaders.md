---
title: "Headers"
---


<div class="pl-pattern">
<h3>Headers</h3>

The Universal Header consists of the following:

- Official CBP Brand Presence
- Approved DHS Blue Background Color
- Application Directory Menu
- User Feedback (optional)
- User Profile and Logout
- User Preferences (optional)

The Universal Header provides a consistent brand across applications.  It also provides
users with common navigation and features.


The Application Header allows for an application to place menus, search bars, and other components that are specific to the application.  

&nbsp;

</div>

<div class="pl-pattern">

### Universal Header

{::nomarkdown}
<div class="pl-preview">
    <img  src="../../generated/images/cbp-header.png" alt="CBP Header Example">
</div>
{:/nomarkdown}

{% highlight html %}
<div role="navigation" class="cbp-header">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="../">
      <span class="visible-md visible-lg"><span class="cbp-brand">U.S. Customs &amp; Border Protection</span></span>
      <span class="visible-xs visible-sm"><span class="cbp-brand">U.S. CBP</span></span>
      <span class="visible-md visible-lg"><span class="dhs-brand">U.S. Department of Homeland Security</span></span>
    </a>
    <button data-target="#navbar-user-info" data-toggle="collapse" type="button" class="navbar-toggle">
    <span class="sr-only">Toggle Global Navigation</span>
    </button>
  </div>
  <div id="navbar-user-info" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" role="button" href="#">
          Kitchen Sink <span class="caret"></span> <!-- Your application name goes here!!!-->
        </a>
        <ul class="dropdown-menu" role="menu">
          <li><a href="#">Recent Apps</a></li>
          <li class="divider"></li>
          <li><a href="#">Another Application</a></li>
          <li><a href="#">Yet Another Application</a></li>
        </ul>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <a href="#">
          <span class="fa fa-comment"></span>
          <span class="hidden-sm">Feedback</span>
        </a>
      </li>
      <li data-toggle="hover" class="dropdown">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle">
          <span class="fa fa-user"></span>
          <span class="hidden-sm" title="FIRST.LAST@CBP.DHS.GOV">First Last Name</span>
          <span class="caret"></span>
        </a>
        <ul rel="right-menu-links" role="menu" class="dropdown-menu">
          <li>
            <a title="Preferences" href="#">Preferences</a>
          </li>
          <li class="divider"></li>
          <li>
            <a title="Logout" href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</div>

{% endhighlight %}
</div>

<div class="pl-pattern">

### Application Header

{::nomarkdown}
<div class="pl-preview">
    <img  src="../../generated/images/cbp-application-header.png" alt="CBP Application Header Example">
</div>
{:/nomarkdown}

{% highlight html %}
// HTML
  <div role="navigation" class="app-header">
    <div class="container-fluid">

      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle Application Navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <div class="nav navbar-nav">
          <ul class="nav nav-tabs nav-tabs-light" role="tablist">

            <li class="active">
              <a href="#" role="tab" data-toggle="tab">Active App View Link</a>
            </li>

            <li class="dropdown">
              <a class="pull-left" data-toggle="tab" href="#pane1">View Link w/ View Options Dropdown</a>
              <a class="pull-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu pull-right" role="menu">
                <li role="presentation">
                  <a href="#" data-toggle="tab">View Option A</a>
                </li>
                <li class="divider"></li>
                <li role="presentation">
                  <a href="#" data-toggle="tab">View Option B</a>
                </li>
                <li role="presentation">
                  <a href="#" data-toggle="tab">View Option C</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" role="tab" data-toggle="tab">Normal App View Link</a>
            </li>

            <li class="disabled">
              <a role="tab">Disabled App View Link</a>
            </li>

          </ul>
        </div>

        <div class="nav navbar-nav navbar-form navbar-right">
          <form role="search">
            <div class="form-group">
              <div class="input-group">
                <div class="mdl-textfield mdl-js-textfield">
                  <label for="main-search" class="mdl-textfield__label">Search</label>
                  <input type="text" id="main-search" class="mdl-textfield__input" />
                </div>
                <span class="input-group-btn">
                  <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                </span>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
{% endhighlight %}
</div>
