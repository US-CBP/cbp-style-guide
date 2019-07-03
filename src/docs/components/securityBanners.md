---
title: "Security Banner"
---

<div class="pl-pattern">
<h3>Security Banner</h3>

This component offers a omnipresent banner that appears when a user is on a page in an application that contains classified content. This banner should contain the full security warning as dictated by Department of Homeland Security (DHS) directives. The top banner may dismissible but should be omnipresent in the footer area.
</div>


<div class="pl-pattern">

### Example

{::nomarkdown}
<div class="pl-preview">
<div class="btn-group">
  <button type="button" id="confidential" class="btn btn-default">Confidential</button>
  <button type="button" id="lawSensitive" class="btn btn-default">Law Enforcement Sensitive</button>
  <button type="button" id="secret" class="btn btn-default">Secret</button>
  <button type="button" id="topSecret" class="btn btn-default">Top Secret</button>
  <button type="button" id="unofficial" class="btn btn-default">Unofficial (No Banner)</button>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
//choose one or none
<footer role="banner" class="cbp-banner confidential"></footer>
<footer role="banner" class="cbp-banner law-enforcement"></footer>
<footer role="banner" class="cbp-banner secret"></footer>
<footer role="banner" class="cbp-banner top-secret"></footer>

{% endhighlight %}
</div>

