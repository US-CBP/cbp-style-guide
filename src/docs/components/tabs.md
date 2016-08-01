---
title: "Tabs"
---

<div class="pl-pattern">
<h3>Tabs</h3>

#### Purpose
User's need to flip between multiple focused panes/views of content.

#### Description
Tabs manage stacked panes of content, giving the users the ability to view only the content pane they are interested in. Each tab button has a corresponding content pane. Tabs build on a real world metaphor. The selected state is reinforced with the tab metaphor of a folder physically in front of the others in the set.

#### Basic functionality
- You have multiple categories/views/panes of content, but there is the need to only show one pane at a time.
- Tabs are listed in a horizontal row.
- Avoid overflowing tabs to new lines.
- Tab titles should be short and predictable.
- Tab buttons can contain icons, text, both, and even dropdowns.

&nbsp;

</div>

<div class="pl-pattern">
### Normal tabs
The selected tab color should be the same color as the tab content.

{::nomarkdown}
<div class="pl-preview">
<ul class="nav nav-tabs" role="tablist">
  <li class="active">
    <a href="#activeTab" role="tab" data-toggle="tab" aria-controls="activeTab">Active</a>
  </li>
  <li>
    <a href="#normalTab" role="tab" data-toggle="tab" aria-controls="normalTab">Normal</a>
  </li>
  <li class="disabled">
    <a role="tab">Disabled</a>
  </li>
</ul>
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="activeTab">
    <div class="panel-body">
       <h4>Did you know that </h1>
      <p>Banging your head against a wall burns 150 calories an hour.</p>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane fade" id="normalTab">
    <div class="panel-body">
      <h4>Did you know that </h1>
      <p>Cherophobia is the fear of fun.</p>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
<ul class="nav nav-tabs" role="tablist">
  <li class="active">
    <a href="#activeTab" role="tab" data-toggle="tab" aria-controls="activeTab">Active</a>
  </li>
  <li>
    <a href="#normalTab" role="tab" data-toggle="tab" aria-controls="normalTab">Normal</a>
  </li>
  <li class="disabled">
    <a role="tab">Disabled</a>
  </li>
</ul>
<div class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="activeTab">
    <div class="panel-body">
       <h4>Did you know that </h1>
      <p>Banging your head against a wall burns 150 calories an hour.</p>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane fade" id="normalTab">
    <div class="panel-body">
      <h4>Did you know that </h1>
      <p>Cherophobia is the fear of fun.</p>
    </div>
  </div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Light tabs
Use when the tabs need less emphasis in relation to other navigational elements. 

{::nomarkdown}
<div class="pl-preview">
<ul class="nav nav-tabs nav-tabs-light" role="tablist">
  <li class="active">
    <a href="#" role="tab" data-toggle="tab">Active</a>
  </li>
  <li>
    <a href="#" role="tab" data-toggle="tab">Normal</a>
  </li>
  <li class="disabled">
    <a role="tab">Disabled</a>
  </li>
</ul>
</div>
{:/nomarkdown}
{% highlight html %}
<ul class="nav nav-tabs nav-tabs-light" role="tablist">
  <li class="active">
    <a href="#" role="tab" data-toggle="tab">Active</a>
  </li>
  <li>
    <a href="#" role="tab" data-toggle="tab">Normal</a>
  </li>
  <li class="disabled">
    <a role="tab">Disabled</a>
  </li>
</ul>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Nested tabs

{::nomarkdown}
<div class="pl-preview">
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                      <a href="#template" role="tab" data-toggle="tab" aria-controls="template" >Template</a>
                    </li>
                    <li role="presentation">
                      <a href="#history" role="tab" data-toggle="tab" aria-controls="history" >History</a>
                    </li>
                    <li role="presentation">
                      <a href="#analytics" role="tab" data-toggle="tab" aria-controls="analytics" >Analytics</a>
                    </li>
                  </ul>
                  <div class="tab-content">

                    <div role="tabpanel" class="tab-pane fade in active" id="template">
                      <ul class="nav nav-tabs nav-tabs-light" role="tablist">
                        <li role="presentation">
                          <a href="#html" role="tab" data-toggle="tab">HTML</a>
                        </li>
                        <li role="presentation" class="active">
                          <a href="#preview" role="tab" data-toggle="tab">Preview</a>
                        </li>
                      </ul>
                      <div class="panel-body">
                        <div class="tab-content" id="html">

                        </div>
                        <div class="tab-content" id="preview">

                        </div>
                      </div>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="history">
                      <ul class="nav nav-tabs nav-tabs-light" role="tablist">
                        <li>
                          <a href="#" role="tab" data-toggle="tab">Cargo History</a>
                        </li>
                        <li class="active">
                          <a href="#" role="tab" data-toggle="tab">Vessel History</a>
                        </li>
                      </ul>
                      <div class="panel-body">
                        <p></p>
                      </div>
                    </div>

                    <div role="tabpanel" class="tab-pane fade" id="analytics">
                      <div class="panel-body">
                        <p>Did you know that...</p>
                      </div>
                    </div>

                  </div>

</div>
{:/nomarkdown}
{% highlight html %}
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
      <a href="#template" role="tab" data-toggle="tab" aria-controls="template" >Template</a>
    </li>
    <li role="presentation">
      <a href="#history" role="tab" data-toggle="tab" aria-controls="history" >History</a>
    </li>
    <li role="presentation">
      <a href="#analytics" role="tab" data-toggle="tab" aria-controls="analytics" >Analytics</a>
    </li>
  </ul>
  <div class="tab-content">

    <div role="tabpanel" class="tab-pane fade in active" id="template">
      <ul class="nav nav-tabs nav-tabs-light" role="tablist">
        <li role="presentation">
          <a href="#html" role="tab" data-toggle="tab">HTML</a>
        </li>
        <li role="presentation" class="active">
          <a href="#preview" role="tab" data-toggle="tab">Preview</a>
        </li>
      </ul>
      <div class="panel-body">
        <div class="tab-content" id="html">

        </div>
        <div class="tab-content" id="preview">

        </div>
      </div>
    </div>

    <div role="tabpanel" class="tab-pane fade" id="history">
      <ul class="nav nav-tabs nav-tabs-light" role="tablist">
        <li>
          <a href="#" role="tab" data-toggle="tab">Cargo History</a>
        </li>
        <li class="active">
          <a href="#" role="tab" data-toggle="tab">Vessel History</a>
        </li>
      </ul>
      <div class="panel-body">
        <p></p>
      </div>
    </div>

    <div role="tabpanel" class="tab-pane fade" id="analytics">
      <div class="panel-body">
        <p>Did you know that...</p>
      </div>
    </div>

  </div>
{% endhighlight %}
</div>
