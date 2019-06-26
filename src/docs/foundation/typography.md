---
title: "Typography"
---

<div class="pl-pattern">

<h3>Typography</h3>

<p>CBP Theme uses the Roboto font family.</p>

<br/>

</div>

<div class="pl-pattern">
### Fonts

&nbsp;

{::nomarkdown}
<div>
    <span>
        <img align="right" src="../../generated/images/FALLBACK_FONT.png" style="padding-left: 20px;" width="500" height="400" alt="" >
    </span>
    <h4>Roboto</h4>
    <span>
        <p>Typography is an essential component of the Common Framework Theme. We’ve selected san-serif fonts for primary use across all mobile and desktop patterns. The Roboto font family provides a wide range of characters and weights that are designed to maintain optimal legibility across platforms, sizes and pixel densities. It offers a clean, light, and open aesthetic that compliments content and hierarchy. Roboto should be the only font-family in use throughout CBP applications built on the CBP theme.</p>
    </span>
</div>
{:/nomarkdown}

#### Implementation
All of the @font-face css properties and font files are loaded into the theme and ready for use. The .woff file is included to assist in IE 11+ compatibility. The majority of other modern browsers will accept the .woff2 file type natively. Note: Adding additional font files to your application can cause pages to load slowly or display inconsistently.

#### Fallback Order
In the theme you will notice that the font-family property is listed as ( font-family: roboto, calibri, tahoma, sans-serif; ). This is to maintain some semblance of compatibility should the Roboto font files fail unexpectedly. Since all of our font files are served from our servers and not remotely, this should be an incredibly rare occurrence. Basically, if the Roboto files are unavailable, the browser will look for the Calibri system font. If that fails (Note: Calibri is a proprietary font created by Microsoft – thus it can encounter issues when loaded in non-Microsoft environments). then it will move down the list to Tahoma, and then finally to the default sans-serif font on the system. This does not mean that applications may use Calibri or any other of the fallback fonts as the primary font. These fallback fonts are only to be used in the event of a system failure.

&nbsp;

</div>

<div class="pl-pattern">
### Weights

{::nomarkdown}
<div class="pl-preview">
<div>
  <p class="black">900 - Black: The quick brown fox jumps over the lazy dog</p>
  <p class="bold">700 - Bold: The quick brown fox jumps over the lazy dog</p>
  <p class="semibold">500 - Semi-Bold: The quick brown fox jumps over the lazy dog</p>
  <p class="normal">400 - Normal: The quick brown fox jumps over the lazy dog</p>
  <p class="light">300 - Light: The quick brown fox jumps over the lazy dog</p>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
    <p class="black">900 - Black: The quick brown fox jumps over the lazy dog</p>
    <p class="bold">700 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p class="semibold">500 - Semi-Bold: The quick brown fox jumps over the lazy dog</p>
    <p class="normal">400 - Normal: The quick brown fox jumps over the lazy dog</p>
    <p class="light">300 - Light: The quick brown fox jumps over the lazy dog</p>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Examples

#### Roboto
{::nomarkdown}
<div class="pl-preview">
<table class="table table-borderless table-valign">

    <tbody>
        <tr>
            <td>h1</td>
            <td><h1>Main Heading Regular 30px <small>Secondary text</small></h1></td>
        </tr>
        <tr>
            <td>h2</td>
            <td><h2>Sub Heading Semibold 24px <small>Secondary text</small></h2></td>
        </tr>
        <tr>
            <td>h3</td>
            <td><h3>Sub Sub Heading Semibold 22px <small>Secondary text</small></h3></td>
        </tr>
        <tr>
            <td>h4</td>
            <td><h4>Sub Sub Sub Heading Semibold 20px <small>Secondary text</small></h4></td>
        </tr>
        <tr>
            <td>h5</td>
            <td><h5>Sub Sub Sub Sub Heading Semibold 18px <small>Secondary text</small></h5></td>
        </tr>
        <tr>
            <td>h6</td>
            <td><h6>Sub Sub Sub Sub Sub Heading Semibold 16px <small>Secondary text</small></h6></td>
        </tr>
        <tr>
            <td>Body</td>
            <td><div class="body">Regular 13px</div></td>
        </tr>
        <tr>
            <td>Caption</td>
            <td><div class="caption">Regular 12px</div></td>
        </tr>
    </tbody>
</table>
</div>
{:/nomarkdown}

{% highlight html %}
<h1>Main Heading Regular 30px <small>Secondary text</small></h1>
<h2>Sub Heading Semibold 24px <small>Secondary text</small></h2>
<h3>Sub Sub Heading Semibold 22px <small>Secondary text</small></h3>
<h4>Sub Sub Sub Heading Semibold 20px <small>Secondary text</small></h4>
<h5>Sub Sub Sub Sub Heading Semibold 18px <small>Secondary text</small></h5>
<h6>Sub Sub Sub Sub Sub Heading Semibold 16px <small>Secondary text</small></h6>
<p>Regular 13px</p>
<div class="caption">Regular 12px</div>
{% endhighlight %}

&nbsp;
</div>

<div class="pl-pattern">
### Colors

{::nomarkdown}
<div class="pl-preview">
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
</div>
{:/nomarkdown}

{% highlight html %}
<p class="text-primary">This is text-primary</p>
<p class="text-warning">This is text-warning</p>
<p class="text-success">This is text-success</p>
<p class="text-danger">This is text-danger</p>
<p class="text-info">This is text-info</p>
<p class="text-muted">This is text-muted</p>
{% endhighlight %}

</div>
