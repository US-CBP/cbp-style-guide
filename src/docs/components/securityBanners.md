---
title: "Security Banner"
---

<div class="pl-pattern">
<h3>Security Banner</h3>

#### Purpose
TODO

#### Description
TODO

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

