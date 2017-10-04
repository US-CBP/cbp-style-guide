---
title: "Tables"
---

<div class="pl-pattern">
<h1>Tables</h1>

{::nomarkdown}
<div style="max-width: 550px;">        
    <div class="alert alert-warning" role="alert">      
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <strong>CBP theme version 1.6.0 update</strong> Class <strong>cbp-table</strong> is replaced by class <strong>table</strong>.
    </div>       
</div>
{:/nomarkdown}

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

A table's complexity and needs can vary greatly. This pattern provides many different features a table _may_ have. Features can be mixed and matched based on your needs. Don't include features unless they're actually needed.

#### Accessibility
- Simple tables can have two levels of headers. Each header cell should have scope="col" or scope="row".
- Complex tables are tables with more than two levels of headers. Each header should be given a unique id and each data cell should have a headers attribute with each related header cell’s id listed.
- When adding a title to a table, include it in a <caption> tag inside of the <table> element.
&nbsp;

</div>

<div class="pl-pattern">
### Styles

#### Standard
A standard table has subtle row borders.

<h4>Includes Hover stylings with MDL additions <small>Just by using the classnames: "table mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
  <table class="table mdl-js-data-table">
    <caption>Standard Table</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table mdl-js-data-table">
  <caption>Standard Table</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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

#### Comfortable Table 
A standard table with extra padding and has subtle row borders.

<h4>Includes Hover stylings with MDL additions <small>Just by using the classnames: "table table-comfortable mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
  <table class="table table-comfortable mdl-js-data-table">
    <caption>Comfortable Table - table with extra padding</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table table-comfortable mdl-js-data-table">
  <caption>Comfortable Table - table with extra padding</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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

#### Condensed Table 
A standard table with less padding and has subtle row borders.

<h4>Includes Hover stylings with MDL additions <small>Just by using the classnames: "table table-condensed mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
  <table class="table table-condensed mdl-js-data-table">
    <caption>Condensed Table - table with less padding</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table table-condensed mdl-js-data-table">
  <caption>Condensed Table - table with less padding</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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

#### Borderless Table 
A standard table no border.

<h4>Includes Hover stylings with MDL additions <small>Just by using the classnames: "table table-borderless mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
  <table class="table table-borderless mdl-js-data-table">
    <caption>Borderless Table - table with no border</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table table-borderless mdl-js-data-table">
  <caption>Borderless Table - table with no border</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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

#### Outline Table 
A standard table with outside border.

<h4>Includes Hover stylings with MDL additions <small>Just by using the classnames: "table table-outline mdl-js-data-table"</small></h4>

{::nomarkdown}
<div class="pl-preview">
  <table class="table table-outline mdl-js-data-table">
    <caption>Outline Table - table with outside border</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table table-outline mdl-js-data-table">
  <caption>Outline Table - table with outside border</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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
  <table class="table table-striped mdl-js-data-table">
    <caption>Striped Table</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table class="table table-striped mdl-js-data-table">
  <caption>Striped Table</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <th scope="row" class="non-numeric">Invoice</th>
    <td class="non-numeric">
      <span>Add invoice confirmation</span>
    </td>
    <td>
      <span>$4,500</span>
    </td>
  </tr>
  <tr>
    <th scope="row" class="non-numeric">Templates</th>
    <td class="non-numeric">
      <span>Refactor templates to use the new templating library</span>
    </td>
    <td>
      <span>$9,000</span>
    </td>
  </tr>
  <tr>
    <th scope="row" class="non-numeric">Payments</th>
    <td class="non-numeric">
      <span>Process payments using third party api</span>
    </td>
    <td>
      <span>$5,400</span>
    </td>
  </tr>
  <tr>
    <th scope="row" class="non-numeric">Account Management</th>
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
   
    <table aria-hidden="true" class="table mdl-js-data-table floating-table-header">
      <caption>Fixed Header Table</caption>
      <thead>
        <tr>
          <th scope="col" class="non-numeric" style="width: 25%">Project name</th>
          <th scope="col" class="non-numeric" style="width: 50%">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
    </table>
    <div class="floating-table-body" style="max-height: 200px;">
      <table class="table-selectable mdl-js-data-table" >
        <thead>
          <tr>
            <th scope="col" class="non-numeric" style="width: 25%;">Project name</th>
            <th scope="col" class="non-numeric" style="width: 50%;">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Add invoice confirmation</span>
            </td>
            <td >
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Improve account management workflow</span>
            </td>
            <td>
              <span>$6,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Add invoice confirmation</span>
            </td>
            <td>
              <span>$4,500</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Refactor templates to use the new templating library</span>
            </td>
            <td>
              <span>$9,000</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
            <td class="non-numeric" style="width: 50%;">
              <span>Process payments using third party api</span>
            </td>
            <td>
              <span>$5,400</span>
            </td>
          </tr>
          <tr>
            <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
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
{:/nomarkdown}

{% highlight html %}
<table aria-hidden="true" class="table mdl-js-data-table floating-table-header">
  <caption>Fixed Header Table</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric" style="width: 25%">Project name</th>
      <th scope="col" class="non-numeric" style="width: 50%">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
</table>
<div class="floating-table-body" style="max-height: 200px;">
  <table class="table-selectable mdl-js-data-table">
    <thead>
      <tr>
        <th scope="col" class="non-numeric" style="width: 25%;">Project name</th>
        <th scope="col" class="non-numeric" style="width: 50%;">Description</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
     <tbody>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td >
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Improve account management workflow</span>
      </td>
      <td>
        <span>$6,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Invoice</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Templates</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Payments</th>
      <td class="non-numeric" style="width: 50%;">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric" style="width: 25%;">Account Management</th>
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

  <table role="grid" class="table table-sortable table-striped mdl-js-data-table">
    <caption>Single Sorting</caption>
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
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td>
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td>
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td>
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
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
{:/nomarkdown}
{% highlight html %}
<table role="grid" class="table table-sortable table-striped mdl-js-data-table">
  <caption>Single Sorting</caption>
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
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td>
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td>
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td>
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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


{::nomarkdown}
<div class="pl-preview">
  <table role="grid" class="table table-sortable table-striped mdl-js-data-table">
    <caption>Multi Sorting</caption>
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
        <th scope="col" class="non-numeric">Module</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">user.create</th>
        <td>
          <span>10/21/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">user.create</th>
        <td>
          <span>10/19/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">user.register</th>
        <td>
          <span>10/21/14</span>
        </td>
        <td class="non-numeric">
          <span>Users</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">user.register</th>
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
{:/nomarkdown}
{% highlight html %}
<table role="grid" class="table table-sortable table-striped mdl-js-data-table">
  <caption>Multi Sorting</caption>
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
      <th scope="col" class="non-numeric">Module</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">user.create</th>
      <td>
        <span>10/21/14</span>
      </td>
      <td class="non-numeric">
        <span>Users</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">user.create</th>
      <td>
        <span>10/19/14</span>
      </td>
      <td class="non-numeric">
        <span>Users</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">user.register</th>
      <td>
        <span>10/21/14</span>
      </td>
      <td class="non-numeric">
        <span>Users</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">user.register</th>
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

{::nomarkdown}
<div class="pl-preview">
  <table class="table-selectable mdl-js-data-table">
    <caption>Selection</caption>
    <thead>
      <tr>
        <th scope="col">
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header">
            <input type="checkbox" id="table-header" class="mdl-checkbox__input" />
          </label>
        </th>
        <th scope="col" class="non-numeric">Material</th>
        <th scope="col">Quantity</th>
        <th scope="col">Unit price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[1]">
            <input type="checkbox" id="row[1]" class="mdl-checkbox__input" />
          </label>
        </td>
        <th scope="row" class="non-numeric">Acrylic (Transparent)</th>
        <td>25</td>
        <td>$2.90</td>
      </tr>
      <tr class="is-selected">
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[2]">
            <input type="checkbox" id="row[2]" class="mdl-checkbox__input" checked />
          </label>
        </td>
        <th scope="row" class="non-numeric">Acrylic (Transparent)</th>
        <td>50</td>
        <td>$1.25</td>
      </tr>
      <tr>
        <td>
          <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[3]">
            <input type="checkbox" id="row[3]" class="mdl-checkbox__input" />
          </label>
        </td>
        <th scope="row" class="non-numeric">Laminate (Gold on Blue)</th>
        <td>10</td>
        <td>$2.35</td>
      </tr>
    </tbody>
  </table>
</div>
{:/nomarkdown}
{% highlight html %}
<table class="table-selectable mdl-js-data-table">
  <caption>Selection</caption>
  <thead>
    <tr>
      <th scope="col">
        <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="table-header">
          <input type="checkbox" id="table-header" class="mdl-checkbox__input" />
        </label>
      </th>
      <th scope="col" class="non-numeric">Material</th>
      <th scope="col">Quantity</th>
      <th scope="col">Unit price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[1]">
          <input type="checkbox" id="row[1]" class="mdl-checkbox__input" />
        </label>
      </td>
      <th scope="row" class="non-numeric">Acrylic (Transparent)</th>
      <td>25</td>
      <td>$2.90</td>
    </tr>
    <tr class="is-selected">
      <td>
        <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[2]">
          <input type="checkbox" id="row[2]" class="mdl-checkbox__input" checked />
        </label>
      </td>
      <th scope="row" class="non-numeric">Acrylic (Transparent)</th>
      <td>50</td>
      <td>$1.25</td>
    </tr>
    <tr>
      <td>
        <label class="cbp-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="row[3]">
          <input type="checkbox" id="row[3]" class="mdl-checkbox__input" />
        </label>
      </td>
      <th scope="row" class="non-numeric">Laminate (Gold on Blue)</th>
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
  <table class="table table-outline table-striped mdl-js-data-table">
    <caption>Row Action Buttons</caption>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">
          <strong>IMG_234.jpg</strong>
          <br>
          <span>2 days ago</span>
        </th>
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
        <th scope="row" class="non-numeric">
          <strong>IMG_235.jpg</strong>
          <br>
          <span>2 days ago</span>
        </th>
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
        <th scope="row" class="non-numeric">
          <strong>IMG_236.jpg</strong>
          <br>
          <span>2 days ago</span>
        </th>
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
        <th scope="row" class="non-numeric">
          <strong>IMG_237.jpg</strong>
          <br>
          <span>2 days ago</span>
        </th>
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
{:/nomarkdown}
{% highlight html %}
<table class="table table-outline table-striped mdl-js-data-table">
  <caption>Row Action Buttons</caption>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">
        <strong>IMG_234.jpg</strong>
        <br>
        <span>2 days ago</span>
      </th>
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
      <th scope="row" class="non-numeric">
        <strong>IMG_235.jpg</strong>
        <br>
        <span>2 days ago</span>
      </th>
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
       <th scope="row" class="non-numeric">
        <strong>IMG_236.jpg</strong>
        <br>
        <span>2 days ago</span>
      </th>
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
      <th scope="row" class="non-numeric">
        <strong>IMG_237.jpg</strong>
        <br>
        <span>2 days ago</span>
      </th>
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
  <table class="table mdl-js-data-table">
    <caption>Column Customization</caption>
    <thead>
      <tr>
        <th scope="col" class="non-numeric">Project name</th>
        <th scope="col" class="non-numeric">Description</th>
        <th scope="col" >Price</th>
        <th scope="col" class="table-config-column" title="Show and hide columns" data-toggle="tooltip">
          <button type="button" data-container="body" data-target="#example_table_modal" data-toggle="modal" >
          <i class="fa fa-ellipsis-h" ></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="non-numeric">Invoice</th>
        <td class="non-numeric">
          <span>Add invoice confirmation</span>
        </td>
        <td colspan="2">
          <span>$4,500</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Templates</th>
        <td class="non-numeric">
          <span>Refactor templates to use the new templating library</span>
        </td>
        <td colspan="2">
          <span>$9,000</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Payments</th>
        <td class="non-numeric">
          <span>Process payments using third party api</span>
        </td>
        <td colspan="2">
          <span>$5,400</span>
        </td>
      </tr>
      <tr>
        <th scope="row" class="non-numeric">Account Management</th>
        <td class="non-numeric">
          <span>Improve account management workflow</span>
        </td>
        <td colspan="2">
          <span>$6,000</span>
        </td>
      </tr>
    </tbody>
  </table>
  
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
                  <input type="checkbox" id="optionsCheckboxes1" class="mdl-checkbox__input" value="option1" />
                  <span for="optionsCheckboxes1" class="mdl-checkbox__label">Thumbnail</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes2" class="mdl-checkbox__input" value="option2" checked />
                  <span for="optionsCheckboxes2" class="mdl-checkbox__label">Project name</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes3" class="mdl-checkbox__input" value="option3" />
                  <span for="optionsCheckboxes3" class="mdl-checkbox__label">Project source</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes4" class="mdl-checkbox__input" value="option4" checked />
                  <span for="optionsCheckboxes4" class="mdl-checkbox__label">Description</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                  <span for="optionsCheckboxes5" class="mdl-checkbox__label">Project revision</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                  <span for="optionsCheckboxes6" class="mdl-checkbox__label">Price</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                  <span for="optionsCheckboxes7" class="mdl-checkbox__label">Project Advisor</span>
                </label>
              </div>
              <div class="checkbox">
                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                  <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                  <span for="optionsCheckboxes8" class="mdl-checkbox__label">Project Owner</span>
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
<table class="table mdl-js-data-table">
  <caption>Column Customization</caption>
  <thead>
    <tr>
      <th scope="col" class="non-numeric">Project name</th>
      <th scope="col" class="non-numeric">Description</th>
      <th scope="col" >Price</th>
      <th scope="col" class="table-config-column" title="Show and hide columns" data-toggle="tooltip">
        <button type="button" data-container="body" data-target="#example_table_modal" data-toggle="modal" >
        <i class="fa fa-ellipsis-h" ></i>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="non-numeric">Invoice</th>
      <td class="non-numeric">
        <span>Add invoice confirmation</span>
      </td>
      <td colspan="2">
        <span>$4,500</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Templates</th>
      <td class="non-numeric">
        <span>Refactor templates to use the new templating library</span>
      </td>
      <td colspan="2">
        <span>$9,000</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Payments</th>
      <td class="non-numeric">
        <span>Process payments using third party api</span>
      </td>
      <td colspan="2">
        <span>$5,400</span>
      </td>
    </tr>
    <tr>
      <th scope="row" class="non-numeric">Account Management</th>
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
                <input type="checkbox" id="optionsCheckboxes10" class="mdl-checkbox__input" value="option0" />
                <span for="optionsCheckboxes10" class="mdl-checkbox__label">Select all</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes11" class="mdl-checkbox__input" value="option1" />
                <span for="optionsCheckboxes11" class="mdl-checkbox__label">Thumbnail</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes12" class="mdl-checkbox__input" value="option2" checked />
                <span for="optionsCheckboxes12" class="mdl-checkbox__label">Project name</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes13" class="mdl-checkbox__input" value="option3" />
                <span for="optionsCheckboxes13" class="mdl-checkbox__label">Project source</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes14" class="mdl-checkbox__input" value="option4" checked />
                <span for="optionsCheckboxes14" class="mdl-checkbox__label">Description</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes5" class="mdl-checkbox__input" value="option5"  />
                <span for="optionsCheckboxes15" class="mdl-checkbox__label">Project revision</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes6" class="mdl-checkbox__input" value="option6" checked />
                <span for="optionsCheckboxes16" class="mdl-checkbox__label">Price</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes7" class="mdl-checkbox__input" value="option7"  />
                <span for="optionsCheckboxes17" class="mdl-checkbox__label">Project Advisor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes8" class="mdl-checkbox__input" value="option8"  />
                <span for="optionsCheckboxes18" class="mdl-checkbox__label">Project Owner</span>
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
                <input type="checkbox" id="optionsCheckboxes20" class="mdl-checkbox__input" value="option0" />
                <span for="optionsCheckboxes20" class="mdl-checkbox__label">Select all</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes21" class="mdl-checkbox__input" value="option1" />
                <span for="optionsCheckboxes21" class="mdl-checkbox__label">Thumbnail</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes22" class="mdl-checkbox__input" value="option2" checked />
                <span for="optionsCheckboxes22" class="mdl-checkbox__label">Project name</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes23" class="mdl-checkbox__input" value="option3" />
                <span for="optionsCheckboxes23" class="mdl-checkbox__label">Project source</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes24" class="mdl-checkbox__input" value="option4" checked />
                <span for="optionsCheckboxes24" class="mdl-checkbox__label">Description</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes25" class="mdl-checkbox__input" value="option5"  />
                <span for="optionsCheckboxes25" class="mdl-checkbox__label">Project revision</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes26" class="mdl-checkbox__input" value="option6" checked />
                <span for="optionsCheckboxes26" class="mdl-checkbox__label">Price</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes27" class="mdl-checkbox__input" value="option7"  />
                <span for="optionsCheckboxes27" class="mdl-checkbox__label">Project Advisor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes28" class="mdl-checkbox__input" value="option8"  />
                <span for="optionsCheckboxes28" class="mdl-checkbox__label">Project Owner</span>
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
                <input type="checkbox" id="optionsCheckboxes30" class="mdl-checkbox__input" value="option0" />
                <span for="optionsCheckboxes30" class="mdl-checkbox__label">Select all</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes31" class="mdl-checkbox__input" value="option1" />
                <span for="optionsCheckboxes31" class="mdl-checkbox__label">Thumbnail</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes32" class="mdl-checkbox__input" value="option2" checked />
                <span for="optionsCheckboxes32" class="mdl-checkbox__label">Project name</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes33" class="mdl-checkbox__input" value="option3" />
                <span for="optionsCheckboxes33" class="mdl-checkbox__label">Project source</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes34" class="mdl-checkbox__input" value="option4" checked />
                <span for="optionsCheckboxes34" class="mdl-checkbox__label">Description</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes35" class="mdl-checkbox__input" value="option5"  />
                <span for="optionsCheckboxes35" class="mdl-checkbox__label">Project revision</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes36" class="mdl-checkbox__input" value="option6" checked />
                <span for="optionsCheckboxes36" class="mdl-checkbox__label">Price</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes37" class="mdl-checkbox__input" value="option7"  />
                <span for="optionsCheckboxes37" class="mdl-checkbox__label">Project Advisor</span>
              </label>
            </div>
            <div class="checkbox">
              <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                <input type="checkbox" id="optionsCheckboxes38" class="mdl-checkbox__input" value="option8"  />
                <span for="optionsCheckboxes38" class="mdl-checkbox__label">Project Owner</span>
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


<!--
<div class="pl-pattern">
### Grouping

Row grouping allows users to show and hide sets of rows that share a similar attribute.

{::nomarkdown}
<div class="pl-preview">
<div style="padding: 40px; background: #fff;">
      <table class="table mdl-js-data-table table-sortable">
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
<table class="table mdl-js-data-table table-sortable">
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
                  <table data-pl-expandable-rows role="grid" class="table-selectable mdl-js-data-table">
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
  <table data-pl-expandable-rows role="grid" class="table-selectable mdl-js-data-table">
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

-->
