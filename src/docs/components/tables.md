---
title: "Tables"
---

<div class="pl-pattern">
<h3>Tables</h3>

#### Purpose
Users need to see structured data in a manner that makes the data readable, scannable, and comparable.

#### Description
Tables provide customizable views of tabular data with features including sorting and managing columns. Tables are useful when a collection of data requires vertical alignment through columns for quick scanning and discovery of information, as well as for data that with many attributes that requires sorting, grouping, and a user customizable display.

#### Basic functionality
Tables list a collection of items in rows that have similar attributes, usually with headers to label each attribute. 

The following functionality can be provided by tables:

- Sorting by columns
- Resizing columns
- Showing and hiding columns
- Reordering columns
- Row selection
- Performing actions on a row
- Grouping by attributes
- Expanding rows

A table's complexity and needs can vary greatly. This pattern provides many different features a table _may_ have. Features can be mixed and matched based on your needs. Don't include features unless they're actually needed.

&nbsp;

</div>

<div class="pl-pattern">
### Styles

#### Standard
A standard table has subtle row borders.

<h4>Includes Borderless, Comfortable, Hover stylings with MDL additions <small>Just by using the classnames: "cbp-table mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
      <table class="cbp-table mdl-js-data-table">
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
</div>
</div>
{:/nomarkdown}

{% highlight html %}
  <table class="cbp-table mdl-js-data-table">
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
{% endhighlight %}

#### Striped
A striped table adds an alternating row background color, increasing usability for wider tables.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
      <table class="cbp-table table-striped mdl-js-data-table">
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
</div>
</div>
{:/nomarkdown}

{% highlight html %}
  <table class="cbp-table table-striped mdl-js-data-table">
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
{% endhighlight %}

</div>

<div class="pl-pattern">
### Headers

#### Fixed

A fixed header remains visible as the table body is scrolled. This is useful for larger amounts of data.

{::nomarkdown}
<div class="pl-preview">
    <div style="padding: 40px; background: #fff;">
                  <table aria-hidden="true" class="cbp-table mdl-js-data-table floating-table-header">
                    <thead>
                      <tr>
                        <th  class="non-numeric" style="width: 25%">Project name</th>
                        <th  class="non-numeric" style="width: 50%">Description</th>
                        <th >Price</th>
                      </tr>
                    </thead>
                  </table>
                  <div class="floating-table-body" style="max-height: 200px;">
                    <table class="cbp-table-selectable mdl-js-data-table" >
                      <thead>
                        <tr>
                          <th  class="non-numeric" style="width: 25%;">Project name</th>
                          <th  class="non-numeric" style="width: 50%;">Description</th>
                          <th >Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Invoice</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Add invoice confirmation</span>
                          </td>
                          <td >
                            <span>$4,500</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Templates</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Refactor templates to use the new templating library</span>
                          </td>
                          <td>
                            <span>$9,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Payments</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Process payments using third party api</span>
                          </td>
                          <td>
                            <span>$5,400</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Account Management</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Improve account management workflow</span>
                          </td>
                          <td>
                            <span>$6,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Invoice</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Add invoice confirmation</span>
                          </td>
                          <td>
                            <span>$4,500</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Templates</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Refactor templates to use the new templating library</span>
                          </td>
                          <td>
                            <span>$9,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Payments</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Process payments using third party api</span>
                          </td>
                          <td>
                            <span>$5,400</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Account Management</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Improve account management workflow</span>
                          </td>
                          <td>
                            <span>$6,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Invoice</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Add invoice confirmation</span>
                          </td>
                          <td>
                            <span>$4,500</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Templates</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Refactor templates to use the new templating library</span>
                          </td>
                          <td>
                            <span>$9,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Payments</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Process payments using third party api</span>
                          </td>
                          <td>
                            <span>$5,400</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Account Management</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Improve account management workflow</span>
                          </td>
                          <td>
                            <span>$6,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Invoice</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Add invoice confirmation</span>
                          </td>
                          <td>
                            <span>$4,500</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Templates</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Refactor templates to use the new templating library</span>
                          </td>
                          <td>
                            <span>$9,000</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Payments</td>
                          <td class="non-numeric" style="width: 50%;">
                            <span>Process payments using third party api</span>
                          </td>
                          <td>
                            <span>$5,400</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="non-numeric" style="width: 25%;">Account Management</td>
                          <td class="non-numeric" style="width: 50%;">
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
{:/nomarkdown}

{% highlight html %}
<table aria-hidden="true" class="cbp-table mdl-js-data-table floating-table-header">
<thead>
  <tr>
    <th  class="non-numeric" style="width: 25%">Project name</th>
    <th  class="non-numeric" style="width: 50%">Description</th>
    <th >Price</th>
  </tr>
</thead>
</table>
<div class="floating-table-body" style="max-height: 200px;">
<table class="cbp-table-selectable mdl-js-data-table" >
  <thead>
    <tr>
      <th  class="non-numeric" style="width: 25%;">Project name</th>
      <th  class="non-numeric" style="width: 50%;">Description</th>
      <th >Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="non-numeric" style="width: 25%;">Invoice</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td >
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Templates</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Payments</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Account Management</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Invoice</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Templates</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Payments</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Account Management</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Invoice</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Templates</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Payments</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Account Management</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Invoice</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Templates</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Payments</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <td class="non-numeric" style="width: 25%;">Account Management</td>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
  </tbody>
</table>
{% endhighlight %}


</div>

<div class="pl-pattern">
### Sorting

#### Single sorting
Clicking a header cell sets that column as the currently sorted column. The first click should sort `descending`, the second click should sort `ascending`. 


{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
                  <table role="grid" class="cbp-table table-sortable table-striped mdl-js-data-table">
                    <thead>
                      <tr role="row">
                        <th scope="col" role="columnheader" aria-sort="ascending" class="non-numeric sortable active">
                          Project name
                          <i class="fa fa-caret-down"></i>
                        </th>
                        <th scope="col" role="columnheader" aria-sort="none" class="non-numeric sortable">Description</th>
                        <th scope="col" role="columnheader" aria-sort="none" class="sortable">Price</th>
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
</div>
</div>
{:/nomarkdown}
{% highlight html %}
      <table role="grid" class="cbp-table table-sortable table-striped mdl-js-data-table">
        <thead>
          <tr role="row">
            <th scope="col" role="columnheader" aria-sort="ascending" class="non-numeric sortable active">
              Project name
              <i class="fa fa-caret-down"></i>
            </th>
            <th scope="col" role="columnheader" aria-sort="none" class="non-numeric sortable">Description</th>
            <th scope="col" role="columnheader" aria-sort="none" class="sortable">Price</th>
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
{% endhighlight %}

#### Multi sorting
When a table is sorted by multiple columns, the sort order is indicated by the superscript numbers.

Performing a `shift+click` on a header cell should add that column to the sorted list. A second `shift+click` on the same header cell should toggle the sort direction. A third `shift+click` on the same header cell should remove that column from the sort list. A left click should clear the sort list and then behave as a single sort.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
                  <table role="grid" class="cbp-table table-sortable table-striped mdl-js-data-table">
                    <thead>
                      <tr role="row">
                        <th scope="col" role="columnheader" aria-sort="other" class="sortable active non-numeric">
                          Event
                          <i class="fa fa-caret-down text-muted"></i> <sup>1</sup>
                        </th>
                        <th scope="col" role="columnheader" aria-sort="none" class="sortable active">
                          Date
                          <i class="fa fa-caret-up text-muted non-numeric"></i> <sup>2</sup>
                        </th>
                        <th class="non-numeric">Module</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="non-numeric">user.create</td>
                        <td>
                          <span>10/21/14</span>
                        </td>
                        <td class="non-numeric">
                          <span>Users</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">user.create</td>
                        <td>
                          <span>10/19/14</span>
                        </td>
                        <td class="non-numeric">
                          <span>Users</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">user.register</td>
                        <td>
                          <span>10/21/14</span>
                        </td>
                        <td class="non-numeric">
                          <span>Users</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">user.register</td>
                        <td>
                          <span>10/18/14</span>
                        </td>
                        <td class="non-numeric">
                          <span>Users</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
  <table role="grid" class="cbp-table table-sortable table-striped mdl-js-data-table">
    <thead>
      <tr role="row">
        <th scope="col" role="columnheader" aria-sort="other" class="sortable active non-numeric">
          Event
          <i class="fa fa-caret-down text-muted"></i> <sup>1</sup>
        </th>
        <th scope="col" role="columnheader" aria-sort="none" class="sortable active">
          Date
          <i class="fa fa-caret-up text-muted non-numeric"></i> <sup>2</sup>
        </th>
        <th class="non-numeric">Module</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="non-numeric">user.create</td>
        <td>
          <span>10/21/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">user.create</td>
        <td>
          <span>10/19/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">user.register</td>
        <td>
          <span>10/21/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">user.register</td>
        <td>
          <span>10/18/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
    </tbody>
  </table>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Selection

Checkboxes are generally the best way to facilitate multi-row selection, especially if clicking a row already has a different action (e.g., opening an email).

- Checking a checkbox should highlight the corresponding row.
- If there's a control for selecting all/none, it should represent the current state of the row selection, including an indeterminate state.
- `shift+click` should select all items between the previoulsy clicked checkbox and the currently clicked checkbox.


{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
  <table class="cbp-table-selectable mdl-js-data-table">
    <thead>
      <tr>
        <th>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header">
            <input type="checkbox" id="table-header" class="mdl-checkbox__input" />
          </label>
        </th>
        <th class="non-numeric">Material</th>
        <th>Quantity</th>
        <th>Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[1]">
            <input type="checkbox" id="row[1]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">Acrylic (Transparent)</td>
        <td>25</td>
        <td>$2.90</td>
      </tr>
      <tr class="is-selected">
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[2]">
            <input type="checkbox" id="row[2]" class="mdl-checkbox__input" checked />
          </label>
        </td>
        <td class="non-numeric">Plywood (Birch)</td>
        <td>50</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[3]">
            <input type="checkbox" id="row[3]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">Laminate (Gold on Blue)</td>
        <td>10</td>
        <td>$2.35</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
  <table class="cbp-table-selectable mdl-js-data-table">
    <thead>
      <tr>
        <th>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header">
            <input type="checkbox" id="table-header" class="mdl-checkbox__input" />
          </label>
        </th>
        <th class="non-numeric">Material</th>
        <th>Quantity</th>
        <th>Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[1]">
            <input type="checkbox" id="row[1]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">Acrylic (Transparent)</td>
        <td>25</td>
        <td>$2.90</td>
      </tr>
      <tr class="is-selected">
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[2]">
            <input type="checkbox" id="row[2]" class="mdl-checkbox__input" checked />
          </label>
        </td>
        <td class="non-numeric">Plywood (Birch)</td>
        <td>50</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[3]">
            <input type="checkbox" id="row[3]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">Laminate (Gold on Blue)</td>
        <td>10</td>
        <td>$2.35</td>
      </tr>
    </tbody>
  </table>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Row action buttons
Buttons with the `btn-hover` and `btn-icon-only` classes.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
                  <table class="cbp-table table-outline table-striped mdl-js-data-table">
                    <tbody>
                      <tr>
                        <td class="non-numeric">
                          <strong>IMG_234.jpg</strong>
                          <br>
                          <span>2 days ago</span>
                        </td>
                        <td>
                          <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
                          <i class="fa text-muted fa-close"></i>
                          <span class="sr-only">Delete</span>
                          </button>
                          <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
                          <i class="fa text-muted fa-ellipsis-v"></i>
                          <span class="sr-only">More</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">
                          <strong>IMG_235.jpg</strong>
                          <br>
                          <span>2 days ago</span>
                        </td>
                        <td>
                          <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
                          <i class="fa text-muted fa-close"></i>
                          <span class="sr-only">Delete</span>
                          </button>
                          <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
                          <i class="fa text-muted fa-ellipsis-v"></i>
                          <span class="sr-only">More</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">
                          <strong>IMG_236.jpg</strong>
                          <br>
                          <span>2 days ago</span>
                        </td>
                        <td>
                          <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
                          <i class="fa text-muted fa-close"></i>
                          <span class="sr-only">Delete</span>
                          </button>
                          <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
                          <i class="fa text-muted fa-ellipsis-v"></i>
                          <span class="sr-only">More</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">
                          <strong>IMG_237.jpg</strong>
                          <br>
                          <span>2 days ago</span>
                        </td>
                        <td>
                          <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
                          <i class="fa text-muted fa-close"></i>
                          <span class="sr-only">Delete</span>
                          </button>
                          <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
                          <i class="fa text-muted fa-ellipsis-v"></i>
                          <span class="sr-only">More</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
<table class="cbp-table table-outline table-striped mdl-js-data-table">
<tbody>
  <tr>
    <td class="non-numeric">
      <strong>IMG_234.jpg</strong>
      <br>
      <span>2 days ago</span>
    </td>
    <td>
      <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
      <i class="fa text-muted fa-close"></i>
      <span class="sr-only">Delete</span>
      </button>
      <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
      <i class="fa text-muted fa-ellipsis-v"></i>
      <span class="sr-only">More</span>
      </button>
    </td>
  </tr>
  <tr>
    <td class="non-numeric">
      <strong>IMG_235.jpg</strong>
      <br>
      <span>2 days ago</span>
    </td>
    <td>
      <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
      <i class="fa text-muted fa-close"></i>
      <span class="sr-only">Delete</span>
      </button>
      <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
      <i class="fa text-muted fa-ellipsis-v"></i>
      <span class="sr-only">More</span>
      </button>
    </td>
  </tr>
  <tr>
    <td class="non-numeric">
      <strong>IMG_236.jpg</strong>
      <br>
      <span>2 days ago</span>
    </td>
    <td>
      <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
      <i class="fa text-muted fa-close"></i>
      <span class="sr-only">Delete</span>
      </button>
      <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
      <i class="fa text-muted fa-ellipsis-v"></i>
      <span class="sr-only">More</span>
      </button>
    </td>
  </tr>
  <tr>
    <td class="non-numeric">
      <strong>IMG_237.jpg</strong>
      <br>
      <span>2 days ago</span>
    </td>
    <td>
      <button class="btn btn-hover btn-icon-only" title="Delete" data-toggle="tooltip">
      <i class="fa text-muted fa-close"></i>
      <span class="sr-only">Delete</span>
      </button>
      <button class="btn btn-hover btn-icon-only" title="More options" data-toggle="tooltip">
      <i class="fa text-muted fa-ellipsis-v"></i>
      <span class="sr-only">More</span>
      </button>
    </td>
  </tr>
</tbody>
</table>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Column customization
To provide column customization, add an icon to the top right corner of the table. Clicking on the icon will show the `Show and hide columns` dialog.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
                  <table class="cbp-table mdl-js-data-table">
                    <thead>
                      <tr>
                        <th class="non-numeric">Project name</th>
                        <th class="non-numeric">Description</th>
                        <th>Price</th>
                        <th class="table-config-column" title="Show and hide columns" data-toggle="tooltip">
                          <button type="button" data-container="body" data-target="#example_table_modal" data-toggle="modal" >
                          <i class="fa fa-ellipsis-h" ></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="non-numeric">Invoice</td>
                        <td class="non-numeric">
                          <span>Add invoice confirmation</span>
                        </td>
                        <td colspan="2">
                          <span>$4,500</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">Templates</td>
                        <td class="non-numeric">
                          <span>Refactor templates to use the new templating library</span>
                        </td>
                        <td colspan="2">
                          <span>$9,000</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">Payments</td>
                        <td class="non-numeric">
                          <span>Process payments using third party api</span>
                        </td>
                        <td colspan="2">
                          <span>$5,400</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="non-numeric">Account Management</td>
                        <td class="non-numeric">
                          <span>Improve account management workflow</span>
                        </td>
                        <td colspan="2">
                          <span>$6,000</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- Show and hide columns popup for table above -->
                <div class="modal fade in" id="example_table_modal">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">Show and hide columns</h4>
                      </div>
                      <div class="modal-body">
                        <form role="form">
                          <div class="form-group">
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes0" class="mdl-checkbox__input" value="option0" />
                                <span for="optionsCheckboxes0" class="mdl-checkbox__label">Select all</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes1" class="mdl-checkbox__input" value="option1" checked />
                                <span for="optionsCheckboxes1" class="mdl-checkbox__label">Thumbnail</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes2" class="mdl-checkbox__input" value="option2" checked />
                                <span for="optionsCheckboxes2" class="mdl-checkbox__label">Word mark</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes3" class="mdl-checkbox__input" value="option3" />
                                <span for="optionsCheckboxes3" class="mdl-checkbox__label">Review source</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes4" class="mdl-checkbox__input" value="option4" checked />
                                <span for="optionsCheckboxes4" class="mdl-checkbox__label">Review type</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                                <span for="optionsCheckboxes5" class="mdl-checkbox__label">Review revision</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                                <span for="optionsCheckboxes6" class="mdl-checkbox__label">Mentor</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                                <span for="optionsCheckboxes7" class="mdl-checkbox__label">Advisor</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                                <span for="optionsCheckboxes8" class="mdl-checkbox__label">Owner</span>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Done</button>
                      </div>
                    </div>
                  </div>
                </div>
</div>
{:/nomarkdown}
{% highlight html %}
<div>
  <table class="cbp-table mdl-js-data-table">
    <thead>
      <tr>
        <th class="non-numeric">Project name</th>
        <th class="non-numeric">Description</th>
        <th>Price</th>
        <th class="table-config-column" title="Show and hide columns" data-toggle="tooltip">
          <button type="button" data-container="body" data-target="#example_table_modal" data-toggle="modal" >
          <i class="fa fa-ellipsis-h" ></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="non-numeric">Invoice</td>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td colspan="2">
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Templates</td>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td colspan="2">
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Payments</td>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td colspan="2">
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <td class="non-numeric">Account Management</td>
        <td class="non-numeric">
          <span>Improve account management workflow</span>
        </td>
        <td colspan="2">
          <span>$6,000</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!-- Show and hide columns popup for table above -->
<div class="modal fade in" id="example_table_modal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
        </button>
        <h4 class="modal-title">Show and hide columns</h4>
      </div>
      <div class="modal-body">
        <form role="form">
          <div class="form-group">
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes0" class="mdl-checkbox__input" value="option0" />
                <span for="optionsCheckboxes0" class="mdl-checkbox__label">Select all</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes1" class="mdl-checkbox__input" value="option1" checked />
                <span for="optionsCheckboxes1" class="mdl-checkbox__label">Thumbnail</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes2" class="mdl-checkbox__input" value="option2" checked />
                <span for="optionsCheckboxes2" class="mdl-checkbox__label">Word mark</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes3" class="mdl-checkbox__input" value="option3" />
                <span for="optionsCheckboxes3" class="mdl-checkbox__label">Review source</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes4" class="mdl-checkbox__input" value="option4" checked />
                <span for="optionsCheckboxes4" class="mdl-checkbox__label">Review type</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                <span for="optionsCheckboxes5" class="mdl-checkbox__label">Review revision</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                <span for="optionsCheckboxes6" class="mdl-checkbox__label">Mentor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                <span for="optionsCheckboxes7" class="mdl-checkbox__label">Advisor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                <span for="optionsCheckboxes8" class="mdl-checkbox__label">Owner</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

#### Show and hide columns dialog
This dialog provides the ability to show/hide columns as desired.


{::nomarkdown}
<div class="pl-preview">
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog modal-sm" style="width: 300px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title">Show and hide columns</h4>
                      </div>
                      <div class="modal-body">
                        <form role="form">
                          <div class="form-group">
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes0" class="mdl-checkbox__input" value="option0" />
                                <span for="optionsCheckboxes0" class="mdl-checkbox__label">Select all</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes1" class="mdl-checkbox__input" value="option1" checked />
                                <span for="optionsCheckboxes1" class="mdl-checkbox__label">Thumbnail</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes2" class="mdl-checkbox__input" value="option2" checked />
                                <span for="optionsCheckboxes2" class="mdl-checkbox__label">Word mark</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes3" class="mdl-checkbox__input" value="option3" />
                                <span for="optionsCheckboxes3" class="mdl-checkbox__label">Review source</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes4" class="mdl-checkbox__input" value="option4" checked />
                                <span for="optionsCheckboxes4" class="mdl-checkbox__label">Review type</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                                <span for="optionsCheckboxes5" class="mdl-checkbox__label">Review revision</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                                <span for="optionsCheckboxes6" class="mdl-checkbox__label">Mentor</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                                <span for="optionsCheckboxes7" class="mdl-checkbox__label">Advisor</span>
                              </label>
                            </div>
                            <div class="checkbox">
                              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                                <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                                <span for="optionsCheckboxes8" class="mdl-checkbox__label">Owner</span>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Done</button>
                      </div>
                    </div>
                  </div>
                </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog modal-sm" style="width: 300px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
        </button>
        <h4 class="modal-title">Show and hide columns</h4>
      </div>
      <div class="modal-body">
        <form role="form">
          <div class="form-group">
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes0" class="mdl-checkbox__input" value="option0" />
                <span for="optionsCheckboxes0" class="mdl-checkbox__label">Select all</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes1" class="mdl-checkbox__input" value="option1" checked />
                <span for="optionsCheckboxes1" class="mdl-checkbox__label">Thumbnail</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes2" class="mdl-checkbox__input" value="option2" checked />
                <span for="optionsCheckboxes2" class="mdl-checkbox__label">Word mark</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes3" class="mdl-checkbox__input" value="option3" />
                <span for="optionsCheckboxes3" class="mdl-checkbox__label">Review source</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes4" class="mdl-checkbox__input" value="option4" checked />
                <span for="optionsCheckboxes4" class="mdl-checkbox__label">Review type</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                <span for="optionsCheckboxes5" class="mdl-checkbox__label">Review revision</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                <span for="optionsCheckboxes6" class="mdl-checkbox__label">Mentor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                <span for="optionsCheckboxes7" class="mdl-checkbox__label">Advisor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                <span for="optionsCheckboxes8" class="mdl-checkbox__label">Owner</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}
</div>


<div class="pl-pattern">
### Grouping

Row grouping allows users to show and hide sets of rows that share a similar attribute. 

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
      <table class="cbp-table mdl-js-data-table table-sortable">
        <thead>
          <tr>
            <th style="width: 200px;" class="sortable active">
              Module
              <i class="fa fa-caret-down text-muted"></i>
              <sup>1</sup>
            </th>
            <th class="sortable active">
              Event
              <i class="fa fa-caret-down text-muted"></i>
              <sup>2</sup>
            </th>
            <th class="sortable active">
              Date
              <i class="fa fa-caret-up text-muted"></i>
              <sup>3</sup>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-group">
            <td class="non-numeric" colspan="3">
              <i class="fa text-muted fa-angle-down" style="margin-right: 6px;"></i>
              <strong>Module:</strong> User
              <span style="color: #aaa;">(2)</span>
            </td>
          </tr>
          <tr class="table-group">
            <td class="non-numeric" style="padding-left: 20px;" colspan="3">
              <i class="fa text-muted fa-angle-down" style="margin-right: 6px;"></i>
              <strong>Event:</strong> Create
              <span style="color: #aaa;">(2)</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Users</span>
            </td>
            <td>Create</td>
            <td>
              <span>10/21/14</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Users</span>
            </td>
            <td>Create</td>
            <td>
              <span>10/19/14</span>
            </td>
          </tr>
          <tr class="table-group">
            <td class="non-numeric" style="padding-left: 20px;" colspan="4">
              <i class="fa text-muted fa-angle-right" style="margin-right: 6px;"></i>
              <strong>Event:</strong> Register
              <span style="color: #aaa;">(2)</span>
            </td>
          </tr>
        </tbody>
      </table>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<table class="cbp-table mdl-js-data-table table-sortable">
<thead>
  <tr>
    <th style="width: 200px;" class="sortable active">
      Module
      <i class="fa fa-caret-down text-muted"></i>
      <sup>1</sup>
    </th>
    <th class="sortable active">
      Event
      <i class="fa fa-caret-down text-muted"></i>
      <sup>2</sup>
    </th>
    <th class="sortable active">
      Date
      <i class="fa fa-caret-up text-muted"></i>
      <sup>3</sup>
    </th>
  </tr>
</thead>
<tbody>
  <tr class="table-group">
    <td class="non-numeric" colspan="3">
      <i class="fa text-muted fa-angle-down" style="margin-right: 6px;"></i>
      <strong>Module:</strong> User
      <span style="color: #aaa;">(2)</span>
    </td>
  </tr>
  <tr class="table-group">
    <td class="non-numeric" style="padding-left: 20px;" colspan="3">
      <i class="fa text-muted fa-angle-down" style="margin-right: 6px;"></i>
      <strong>Event:</strong> Create
      <span style="color: #aaa;">(2)</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Users</span>
    </td>
    <td>Create</td>
    <td>
      <span>10/21/14</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Users</span>
    </td>
    <td>Create</td>
    <td>
      <span>10/19/14</span>
    </td>
  </tr>
  <tr class="table-group">
    <td class="non-numeric" style="padding-left: 20px;" colspan="4">
      <i class="fa text-muted fa-angle-right" style="margin-right: 6px;"></i>
      <strong>Event:</strong> Register
      <span style="color: #aaa;">(2)</span>
    </td>
  </tr>
</tbody>
</table>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Expandable rows

Expandable rows provide additional information about a row on demand.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
                  <table data-pl-expandable-rows role="grid" class="cbp-table-selectable mdl-js-data-table">
                    <thead>
                      <tr role="row">
                        <th scope="col" role="columnheader" class="col-md-4">
                          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header-1">
                            <input type="checkbox" id="table-header-1" class="mdl-checkbox__input" />
                          </label>
                        </th>
                        <th scope="col"  class="mdl-data-table__cell--non-numeric" role="columnheader" aria-sort="none">Project name</th>
                        <th scope="col"  class="mdl-data-table__cell--non-numeric" role="columnheader" aria-sort="none">Description</th>
                        <th scope="col" role="columnheader" aria-sort="none">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="col-md-4">
                          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[11]">
                            <input type="checkbox" id="row[11]" class="mdl-checkbox__input" />
                          </label>
                        </td>
                        <td class="non-numeric">
                          <i class="fa fa-angle-right"></i> &nbsp;Invoice
                        </td>
                        <td class="non-numeric">
                          <span>Add invoice confirmation</span>
                        </td>
                        <td>
                          <span>$4,500</span>
                        </td>
                      </tr>
                      <tr data-pl-detail-row style="display: none;">
                        <td colspan="4">
                          <dl class="dl-horizontal" style="margin-bottom: 0;">
                            <dt>Examiner</dt>
                            <dd>IP, Sikyin / 69776 / 1742</dd>
                            <dt>SPE (multiple)</dt>
                            <dd>John Olaskey</dd>
                            <dt>Applicants</dt>
                            <dd>Roman Amirpur</dd>
                            <dt>Inventors</dt>
                            <dd>Disney Dale</dd>
                            <dt>Law firm</dt>
                            <dd>Clayton & Clayton Associates</dd>
                          </dl>
                        </td>
                      </tr>
                      <tr aria-expanded="true">
                        <td class="col-md-4">
                          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[12]">
                            <input type="checkbox" id="row[12]" class="mdl-checkbox__input" />
                          </label>
                        </td>
                        <td class="non-numeric">
                          <i class="fa fa-angle-right"></i> &nbsp;Payments
                        </td>
                        <td class="non-numeric">
                          <span>Process payments using third party api</span>
                        </td>
                        <td>
                          <span>$5,400</span>
                        </td>
                      </tr>
                      <tr data-pl-detail-row style="display: table-row;">
                        <td colspan="4">
                          <dl class="dl-horizontal" style="margin-bottom: 0;">
                            <dt>BOL Type</dt>
                            <dd>B - Booking</dd>
                            <dt>MOT</dt>
                            <dd>11 - Vessel(Containerized)</dd>
                            <dt>Carrier</dt>
                            <dd>JONN</dd>
                            <dt>Conveyance</dt>
                            <dd>REG O BOL B2</dd>
                            <dt>Voyage/Trip/Flight</dt>
                            <dd>0512A000001</dd>
                          </dl>
                        </td>
                      </tr>
                    </tbody>
                  </table>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
  <table data-pl-expandable-rows role="grid" class="cbp-table-selectable mdl-js-data-table">
    <thead>
      <tr role="row">
        <th scope="col" role="columnheader" class="col-md-4">
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header-1">
            <input type="checkbox" id="table-header-1" class="mdl-checkbox__input" />
          </label>
        </th>
        <th scope="col"  class="mdl-data-table__cell--non-numeric" role="columnheader" aria-sort="none">Project name</th>
        <th scope="col"  class="mdl-data-table__cell--non-numeric" role="columnheader" aria-sort="none">Description</th>
        <th scope="col" role="columnheader" aria-sort="none">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-md-4">
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[11]">
            <input type="checkbox" id="row[11]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">
          <i class="fa fa-angle-right"></i> &nbsp;Invoice
        </td>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr data-pl-detail-row style="display: none;">
        <td colspan="4">
          <dl class="dl-horizontal" style="margin-bottom: 0;">
            <dt>Examiner</dt>
            <dd>IP, Sikyin / 69776 / 1742</dd>
            <dt>SPE (multiple)</dt>
            <dd>John Olaskey</dd>
            <dt>Applicants</dt>
            <dd>Roman Amirpur</dd>
            <dt>Inventors</dt>
            <dd>Disney Dale</dd>
            <dt>Law firm</dt>
            <dd>Clayton & Clayton Associates</dd>
          </dl>
        </td>
      </tr>
      <tr aria-expanded="true">
        <td class="col-md-4">
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[12]">
            <input type="checkbox" id="row[12]" class="mdl-checkbox__input" />
          </label>
        </td>
        <td class="non-numeric">
          <i class="fa fa-angle-right"></i> &nbsp;Payments
        </td>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr data-pl-detail-row style="display: table-row;">
        <td colspan="4">
          <dl class="dl-horizontal" style="margin-bottom: 0;">
            <dt>BOL Type</dt>
            <dd>B - Booking</dd>
            <dt>MOT</dt>
            <dd>11 - Vessel(Containerized)</dd>
            <dt>Carrier</dt>
            <dd>JONN</dd>
            <dt>Conveyance</dt>
            <dd>REG O BOL B2</dd>
            <dt>Voyage/Trip/Flight</dt>
            <dd>0512A000001</dd>
          </dl>
        </td>
      </tr>
    </tbody>
  </table>
{% endhighlight %}

</div>
