---
title: "Data Formats"
---

<div class="pl-pattern">
<h3>Date Formats</h3>

To maintain consistency across applications, use the following formats and guidelines.

<br/>

</div>

<div class="pl-pattern">
### Date and Time

#### Formats
{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px;">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td><code>time</code></td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td><code>military time</code></td>
            <td>22:00:15</td>
        </tr>
        <tr>
            <td><code>short date</code></td>
            <td>Jan 11</td>
        </tr>
        <tr>
            <td><code>long date</code></td>
            <td>Apr 23, 2010</td>
        </tr>
        <tr>
            <td><code>condensed long date</code></td>
            <td>MM/DD/YYYY, DD/MM/YYYY, or YYYY/MM/DD</td>
        </tr>
        <tr>
            <td><code>short date and time</code></td>
            <td>Feb 5, 8:00 AM</td>
        </tr>
        <tr>
            <td><code>long date and time</code></td>
            <td>Feb 8, 2014, 1:00 PM</td>
        </tr>
        <tr>
            <td><code>day of week and time</code></td>
            <td>Mon, 7:30 AM</td>
        </tr>
        <tr>
            <td><code>day of week, short date and time</code></td>
            <td>Mon, Mar 15, 3:25 PM</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}


#### Condensed long date usage

The condensed version of the long date format has 3 variations:

- `MM/DD/YYYY` (05/12/2015)
- `DD/MM/YYYY` (12/05/2015)
- `YYYY/MM/DD` (2015/12/05)

`MM/DD/YYYY` is the format most used in the US, whereas `DD/MM/YYYY` is used most outside the US. Depending on the date, the format, and the geographical location or customs of the user, a date has the potential for being misinterpreted if the format is not what the user is expecting. The only non-ambiguous format is `YYYY/MM/DD`.

Depending on your target audience, determine which format makes the most sense for your application.


#### Smart format

For dates/times associated with user generated data (e.g., notes, documents), use the `smart format`, which changes relative to the current date.

{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px;">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td>If the date is in the past or future on the current day, format as <code>time</code> only</td>
            <td>10:00 AM</td>
        </tr>
        <tr>
            <td>If the date is in the past or future within the current calendar year, format as <code>short date</code></td>
            <td>Jan 11</td>
        </tr>
        <tr>
            <td>If the date is in the past or future outside the current calendar year, format as <code>long date</code></td>
            <td>Apr 23, 2010</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}

#### Other

{::nomarkdown}
<table class="table table-bordered" style="max-width: 700px">
    <colgroup>
        <col style="width: 50%">
        <col style="width: 50%;">
    </colgroup>
    <tbody>
        <tr>
            <td>For reminders or appointments, show both time and date</td>
            <td>Jun 8, 8:00 AM <br>Today, 8:00 AM</td>
        </tr>
        <tr>
            <td>Separate ranges with an en-dash without a space</td>
            <td>Jun 15–Jun 16 <br> Dec 20, 2014–Jan 2, 2015</td>
        </tr>
        <tr>
            <td>If a time range shares a common AM/PM, append only on the end of the range</td>
            <td>10:00–11:00 AM <br>10:00 AM–12:30 PM</td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}

</div>

<div class="pl-pattern">
### Lists

#### Unordered
{::nomarkdown}
<div class="pl-preview">
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ul>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ul>
    </li>
</ul>
</div>
{:/nomarkdown}

{% highlight html %}
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ul>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ul>
    </li>
</ul>
{% endhighlight %}

#### Ordered
{::nomarkdown}
<div class="pl-preview">
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ol>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ol>
    </li>
</ol>
</div>
{:/nomarkdown}

{% highlight html %}
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3
        <ol>
            <li>Nested list item 1 </li>
            <li>Nested list item 2 </li>
        </ol>
    </li>
</ol>
{% endhighlight %}
</div>


<div class="pl-pattern">
### Metadata

The metadata pattern can be used for showing label/value pairs.

__Do__

- Consistently use `#` or `number` in labels
- Indicate empty/blank values with an em-dash (&mdash;)
- Reflow columns based on available screen real estate
- Sentence case labels


#### Horizontal
Useful for shorter labels/values.

{::nomarkdown}
<div class="pl-preview">
    <div class="row">
      <div class="col-sm-4">
        <dl>
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
      </div>
      <div class="col-sm-4">
        <dt>Entry Number (Type)</dt>
        <dd>BVA-01070040 (01)</dd>
        <dt>Bill Number (Type)</dt>
        <dd>JONN-150512MC0202 (B)</dd>
        <dt>Entry Type/dt>
        <dd>01 - Consumption: Free and Dutiable</dd>
        <dt>Port of Entry</dt>
        <dd>
        <a href="">
          5206 <i class="fa fa-external-link"></i>
        </a>
        </dd>
        <dt>Importer</dt>
        <dd>--</dd>
      </div>
      <div class="col-sm-4">
        <dl>
          <dt>Bond Type</dt>
          <dd>9 - Single Transaction</dd>
          <dt>Entry Filing Date</dt>
          <dd>07/17/2015 13:40:22</dd>
          <dt>Status</dt>
          <dd>1</dd>
          <dt>Shipment</dt>
          <dd>
          <a href="">
            5004672569 <i class="fa fa-external-link"></i>
          </a>
          </dd>
        </dl>
      </div>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="row">
  <div class="col-sm-4">
    <dl>
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
  </div>
  <div class="col-sm-4">
    <dt>Entry Number (Type)</dt>
    <dd>BVA-01070040 (01)</dd>
    <dt>Bill Number (Type)</dt>
    <dd>JONN-150512MC0202 (B)</dd>
    <dt>Entry Type/dt>
    <dd>01 - Consumption: Free and Dutiable</dd>
    <dt>Port of Entry</dt>
    <dd>
    <a href="">
      5206 <i class="fa fa-external-link"></i>
    </a>
    </dd>
    <dt>Importer</dt>
    <dd>--</dd>
  </div>
  <div class="col-sm-4">
    <dl>
      <dt>Bond Type</dt>
      <dd>9 - Single Transaction</dd>
      <dt>Entry Filing Date</dt>
      <dd>07/17/2015 13:40:22</dd>
      <dt>Status</dt>
      <dd>1</dd>
      <dt>Shipment</dt>
      <dd>
      <a href="">
        5004672569 <i class="fa fa-external-link"></i>
      </a>
      </dd>
    </dl>
  </div>
</div>
{% endhighlight %}

#### Vertical
Useful for longer labels/values.

{::nomarkdown}
<div class="pl-preview">
    <div class="row">
      <div class="col-md-4">
        <dl class="dl-horizontal">
          <dt>BOL Type</dt>
          <dd>B - Booking</dd>
          <dt>MOT</dt>
          <dd>11 - Vessel(Containerized)</dd>
          <dt>Carrier</dt>
          <dd>JONN</dd>
        </dl>
      </div>
      <div class="col-md-4">
        <dl class="dl-horizontal">
          <dt>Entry Type (Type)</dt>
          <dd>01 - Consumption: Free and Dutiable</dd>
          <dt>Port of Entry</dt>
          <dd>
          <a href="">
            5206
            <i class="fa fa-external-link"></i>
          </a>
          </dd>
          <dt>Importer</dt>
          <dd>--</dd>
        </dl>
      </div>
      <div class="col-md-4">
        <dl class="dl-horizontal">
          <dt>Bond Type</dt>
          <dd>9 - Single Transaction</dd>
          <dt>Entry Filing Date</dt>
          <dd>07/17/2015 13:40:22</dd>
          <dt>Conveyance</dt>
          <dd>REG O BOL B2</dd>
          <dt>Voyage/Trip/Flight</dt>
          <dd>0512A000001</dd>
        </dl>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="row">
  <div class="col-md-4">
    <dl class="dl-horizontal">
      <dt>BOL Type</dt>
      <dd>B - Booking</dd>
      <dt>MOT</dt>
      <dd>11 - Vessel(Containerized)</dd>
      <dt>Carrier</dt>
      <dd>JONN</dd>
    </dl>
  </div>
  <div class="col-md-4">
    <dl class="dl-horizontal">
      <dt>Entry Type (Type)</dt>
      <dd>01 - Consumption: Free and Dutiable</dd>
      <dt>Port of Entry</dt>
      <dd>
      <a href="">
        5206
        <i class="fa fa-external-link"></i>
      </a>
      </dd>
      <dt>Importer</dt>
      <dd>--</dd>
    </dl>
  </div>
  <div class="col-md-4">
    <dl class="dl-horizontal">
      <dt>Bond Type</dt>
      <dd>9 - Single Transaction</dd>
      <dt>Entry Filing Date</dt>
      <dd>07/17/2015 13:40:22</dd>
      <dt>Conveyance</dt>
      <dd>REG O BOL B2</dd>
      <dt>Voyage/Trip/Flight</dt>
      <dd>0512A000001</dd>
    </dl>
  </div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### File Sizes

- 340 KB (round to nearest KB)
- 4.13 MB (two decimal max)
- 3.22 GB (two decimal max)
- 1.13 TB (two decimal max)

&nbsp;

</div>
