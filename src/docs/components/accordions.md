---
title: "Accordions"
---

<div class="pl-pattern">
<h3>Accordions</h3>

#### Purpose
Users need to see only relevant content.

#### Description
Accordions provide users with the ability to expand and collapse content as needed. Accordions can simplify the interface by hiding content until it is needed.

#### Expand/Collapse Behaviors

Accordions can operate as either single-select or multi-select.

- __Single-select__ allows only one panel to be expanded at any given time. Expanding a panel collapses the previously expanded panel.
- __Multi-select__ allows more than one panel to be expanded at any given time. Expanding a panel has no impact on the other panels.

&nbsp;

</div>

<div class="pl-pattern">
### Styles

#### Standard

The standard style provides more distinction between the panel and internal/surrounding content. This is useful for more complex layouts.

{::nomarkdown}
<div class="pl-preview">
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" data-toggle="collapse" aria-controls="collapseOne">
      <h4 class="panel-title">
        <i class="fa fa-angle-right fa-fw"></i>
          Goods/Services
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false" data-toggle="collapse" aria-controls="collapseTwo">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Mark info
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false" data-toggle="collapse" aria-controls="collapseThree">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Owner/Assignment
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Project name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <td>Templates</td>
            <td>
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <td>Payments</td>
            <td>
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <td>Account Management</td>
            <td>
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
{:/nomarkdown}

{% highlight html %}
// Accordion
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" data-toggle="collapse" aria-controls="collapseOne">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Goods/Services
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false" data-toggle="collapse" aria-controls="collapseTwo">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Mark info
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false" data-toggle="collapse" aria-controls="collapseThree">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Owner/Assignment
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Project name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <td>Templates</td>
            <td>
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <td>Payments</td>
            <td>
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <td>Account Management</td>
            <td>
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

{% endhighlight %}

#### Light

For simple content or layouts, the light style may work better.

{::nomarkdown}
<div class="pl-preview">
<div class="panel-group" id="2accordion" role="tablist" aria-multiselectable="true">
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingOne" data-parent="#2accordion" data-target="#2collapseOne" aria-expanded="false" data-toggle="collapse" aria-controls="2collapseOne">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Goods/Services
      </h4>
    </div>
    <div id="2collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="2headingOne">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingTwo" data-parent="#2accordion" data-target="#2collapseTwo" aria-expanded="true" data-toggle="collapse" aria-controls="2collapseTwo">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Mark info
      </h4>
    </div>
    <div id="2collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="2headingTwo">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingThree" data-parent="#2accordion" data-target="#2collapseThree" aria-expanded="false" data-toggle="collapse" aria-controls="2collapseThree">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Owner/Assignment
      </h4>
    </div>
    <div id="2collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="2headingThree">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Project name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <td>Templates</td>
            <td>
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <td>Payments</td>
            <td>
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <td>Account Management</td>
            <td>
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</div>
{:/nomarkdown}

{% highlight html %}
// Accordion Light
<div class="panel-group" id="2accordion" role="tablist" aria-multiselectable="true">
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingOne" data-parent="#2accordion" data-target="#2collapseOne" aria-expanded="false" data-toggle="collapse" aria-controls="2collapseOne">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Goods/Services
      </h4>
    </div>
    <div id="2collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="2headingOne">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingTwo" data-parent="#2accordion" data-target="#2collapseTwo" aria-expanded="true" data-toggle="collapse" aria-controls="2collapseTwo">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Mark info
      </h4>
    </div>
    <div id="2collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="2headingTwo">
      <div class="panel-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-heading" role="tab" id="2headingThree" data-parent="#2accordion" data-target="#2collapseThree" aria-expanded="false" data-toggle="collapse" aria-controls="2collapseThree">
      <h4 class="panel-title">
          <i class="fa fa-angle-right fa-fw"></i>
          Owner/Assignment
      </h4>
    </div>
    <div id="2collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="2headingThree">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Project name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <td>Templates</td>
            <td>
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <td>Payments</td>
            <td>
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <td>Account Management</td>
            <td>
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

{% endhighlight %}

</div>
