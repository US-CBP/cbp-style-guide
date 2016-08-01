---
title: "Metadata"
---

<div class="pl-pattern">
<h3>Metadata</h3>
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

