---
title: "Progress and Loading"
---

<div class="pl-pattern">
### Progress bars

Progress bars should be used when there is a determinate amount of time/progress related to a process (e.g., uploading a file). An indeterminate progress can be used in conjunction with a determinate progress bar.

#### Determinate progress bar

{::nomarkdown}
<div class="pl-preview">
    <div style="max-width: 200px;">
      <div class="progress-label">
        Importing... <span id="exampleProgressBarValue" class="pull-right text-muted">60%</span>
      </div>
      <div class="progress">
        <div id="exampleProgressBar" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div>
  <div class="progress-label">
    Importing... <span id="exampleProgressBarValue" class="pull-right text-muted">60%</span>
  </div>
  <div class="progress">
    <div id="exampleProgressBar" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
  </div>
</div>
{% endhighlight %}

#### Indeterminate progress bar

{::nomarkdown}
<div class="pl-preview">
    <div style="max-width: 200px;">
      <div class="progress-label">
        Finalizing...
        <span id="exampleProgressBarValue" class="pull-right text-muted">100%</span>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
      </div>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div style="max-width: 200px;">
  <div class="progress-label">
    Finalizing...
    <span id="exampleProgressBarValue" class="pull-right text-muted">100%</span>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
  </div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Load spinners

Load spinners should be used when there is an indeterminate amount of time/progress related to a process (e.g., downloading data).

#### Loading button with text
For buttons with text, the load spinner can appear where the icon would appear. The text may change to reflect the current state.

{::nomarkdown}
<div class="pl-preview">
<button class="btn btn-default">Load more</button>
<button class="btn btn-default" disabled>
    <i class="fa fa-spinner fa-spin"></i> Loading...
</button>
</div>
{:/nomarkdown}

{% highlight html %}
<button class="btn btn-default">Load more</button>
<button class="btn btn-default" disabled>
    <i class="fa fa-spinner fa-spin"></i> Loading...
</button>
{% endhighlight %}

#### Loading button with icon only
If a simple action is initiated from an icon-only button, the icon can be replaced with the load spinner until the action is complete.

{::nomarkdown}
<div class="pl-preview">
<button class="btn btn-default btn-icon-only">
    <i class="fa fa-star-o"></i>
    <span class="sr-only">Favorite</span>
</button>
<button class="btn btn-default btn-icon-only" disabled>
    <i class="fa fa-spinner fa-spin"></i>
    <span class="sr-only">Loading</span>
</button>
<button class="btn btn-default btn-icon-only">
    <i class="fa fa-star"></i>
    <span class="sr-only">Favorite</span>
</button>
</div>
{:/nomarkdown}

{% highlight html %}
<button class="btn btn-default btn-icon-only">
    <i class="fa fa-star-o"></i>
    <span class="sr-only">Favorite</span>
</button>
<button class="btn btn-default btn-icon-only" disabled>
    <i class="fa fa-spinner fa-spin"></i>
    <span class="sr-only">Loading</span>
</button>
<button class="btn btn-default btn-icon-only">
    <i class="fa fa-star"></i>
    <span class="sr-only">Favorite</span>
</button>
{% endhighlight %}

#### Loading overlay
In some situations during the process of loading, it may be desired to overlay and block functionality until loading is complete.

{::nomarkdown}
<div class="pl-preview">
<div style="position: relative; padding: 40px; background: #fff;">
    <table class="cbp-table mdl-js-data-table" style="opacity: .5;">
        <thead>
          <tr>
            <th class="non-numeric">Project name</th>
            <th class="non-numeric">Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="non-numeric">Invoice</td>
            <td class="non-numeric">
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <td class="non-numeric">Templates</td>
            <td class="non-numeric">
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <td class="non-numeric">Payments</td>
            <td class="non-numeric">
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <td class="non-numeric">Account Management</td>
            <td class="non-numeric">
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
        </tbody>
    </table>
      <div class="loading-box text-center text-muted">
        <i class="fa fa-spinner fa-pulse fa-fw"></i>&nbsp;Loading...
      </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<table class="cbp-table mdl-js-data-table" style="opacity: .5;">
    <thead>
      <tr>
        <th class="non-numeric">Project name</th>
        <th class="non-numeric">Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="non-numeric">Invoice</td>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Templates</td>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Payments</td>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Account Management</td>
        <td class="non-numeric">
          <span>Improve account management workflow</span>
        </td>
        <td>
          <span>$6,000</span>
        </td>
      </tr>
    </tbody>
</table>
<div class="loading-box text-center text-muted">
<i class="fa fa-spinner fa-pulse fa-fw"></i>&nbsp;Loading...
</div>
{% endhighlight %}

</div>
