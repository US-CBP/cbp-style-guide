---
title: "Tables"
---

<div class="pl-pattern">
<h1>Tables</h1>

Users need to see structured data in a manner that makes the data readable, scannable, and comparable.

{::nomarkdown}
<div style="max-width: 550px;">        
    <div class="alert alert-warning" role="alert">      
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> <strong>CBP theme version 1.6.0 update</strong> Class <strong>cbp-table</strong> is replaced by class <strong>table</strong>.
    </div>       
</div>
{:/nomarkdown}

#### Description
Tables provide customizable views of tabular data with features including sorting and managing columns. Tables are useful when a collection of data requires vertical alignment through columns for quick scanning and discovery of information, as well as for data that with many attributes that requires sorting, grouping, and a user customizable display.

#### Basic Functionality
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
<br/>
<br/>

</div>

<div class="pl-pattern">
### Examples

#### Standard Table
A standard table has subtle row borders.

<h4>Includes hover stylings with MDL additions <small>Just by using the classnames: "table mdl-js-data-table"</small></h4>

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

<h4>Includes hover stylings with MDL additions <small>Just by using the classnames: "table table-comfortable mdl-js-data-table"</small></h4>

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

<h4>Includes hover stylings with MDL additions <small>Just by using the classnames: "table table-condensed mdl-js-data-table"</small></h4>

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

<h4>Includes hover stylings with MDL additions <small>Just by using the classnames: "table table-borderless mdl-js-data-table"</small></h4>

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

<h4>Includes hover stylings with MDL additions <small>Just by using the classnames: "table table-outline mdl-js-data-table"</small></h4>

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
### Table Headers

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
### Row Action Buttons
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

