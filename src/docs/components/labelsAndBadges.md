---
title: "Labels and Badges"
---

<div class="pl-pattern">

<h3>Labels and Badges</h3>

<p>Labels show concise metadata in a compact format.</p>

</div>

<div class="pl-pattern">
### Labels

Labels are generally used to provide emphasis on a characteristic of an object, e.g., the category of a document. They are generally actionless.

Avoid mixing standard and subtle labels.

#### Standard
Use standard labels by default unless there are going to be many on the screen at once.

{::nomarkdown}
<div class="pl-preview">
    <div class="panel">
      <div class="panel-body">
        <span class="label label-default">DEFAULT</span>
        <span class="label label-primary">PRIMARY</span>
        <span class="label label-success">SUCCESS</span>
        <span class="label label-info">INFO</span>
        <span class="label label-warning">WARNING</span>
        <span class="label label-danger">DANGER</span>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<span class="label label-default">DEFAULT</span>
<span class="label label-primary">PRIMARY</span>
<span class="label label-success">SUCCESS</span>
<span class="label label-info">INFO</span>
<span class="label label-warning">WARNING</span>
<span class="label label-danger">DANGER</span>
{% endhighlight %}

#### Subtle
Use subtle labels when labels are going to be repeated in a grid or list

{::nomarkdown}
<div class="pl-preview">
    <div class="panel">
      <div class="panel-body">
        <span class="label label-default subtle">DEFAULT</span>
        <span class="label label-primary subtle">PRIMARY</span>
        <span class="label label-success subtle">SUCCESS</span>
        <span class="label label-info subtle">INFO</span>
        <span class="label label-warning subtle">WARNING</span>
        <span class="label label-danger subtle">DANGER</span>
      </div>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<span class="label label-default subtle">DEFAULT</span>
<span class="label label-primary subtle">PRIMARY</span>
<span class="label label-success subtle">SUCCESS</span>
<span class="label label-info subtle">INFO</span>
<span class="label label-warning subtle">WARNING</span>
<span class="label label-danger subtle">DANGER</span>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Badges

Badges provide a method to highlight a count of an element either next to it or inside the element itself.

{::nomarkdown}
<div class="pl-preview">
    <div class="panel">
      <div class="panel-body">
        <span>People <span class="badge default">5</span>&nbsp;</span>
        <span>Cats <span class="badge">200</span>&nbsp;</span>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<span>People <span class="badge default">5</span>&nbsp;</span>
<span>Cats <span class="badge">200</span>&nbsp;</span>
{% endhighlight %}

</div>
