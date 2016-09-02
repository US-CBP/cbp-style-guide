---
title: "Typography"
---

<div class="pl-pattern">
### Fonts

Typography is an essential component of the Common Framework Theme. We've selected two san-serif fonts for primary use across all mobile and desktop patterns. Roboto and Calibri provide a wide range of characters and are designed to maintain optimal legibility across platforms, sizes and pixel densities. Both fonts offer a clean, light, and open aesthetic that compliments the content and hierarchy.



Font load and fallback order: __Roboto, Calibri, Tahoma, Arial, sans-serif__



{::nomarkdown}
<dl>
    <dt style="font:Roboto;">Roboto</dt>
    <dd style="font:Roboto;">Ships with OSX.</dd>
    <dt>Calibri</dt>
    <dd>Ships with Windows Vista and newer and Microsoft Office.</dd>
    <dt style="font:Tahoma, Arial;">Tahoma, Arial</dt>
    <dd style="font:Tahoma, Arial;">Ships with most operating systems.</dd>
</dl>
{:/nomarkdown}

&nbsp;

</div>

<div class="pl-pattern">
### Weights

{::nomarkdown}
<div class="pl-preview">
<div style="font-size: 15px">
    <p style="font-weight: 600">600 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 200">200 - Light: The quick brown fox jumps over the lazy dog</p>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
    <p style="font-weight: 600">600 - Bold: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 400">400 - Regular: The quick brown fox jumps over the lazy dog</p>
    <p style="font-weight: 200">200 - Light: The quick brown fox jumps over the lazy dog</p>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Styles

#### Calibri
{::nomarkdown}
<div class="pl-preview">
<table class="table table-borderless table-valign" style="width: 550px;">
    <tbody>
        <tr>
            <td>Display 3</td>
            <td><h1 class="display3">Regular 56px</h1></td>
        </tr>
        <tr>
            <td>h1. Display 2</td>
            <td><h1>Regular 40px</h1></td>
        </tr>
        <tr>
            <td>h2. Display 1</td>
            <td><h2>Bold 25px</h2></td>
        </tr>
        <tr>
            <td>h3. Headline</td>
            <td><h3 class="headline">Bold 20px</h3></td>
        </tr>
        <tr>
            <td>h4. Title</td>
            <td><h4>Bold 18px</h4></td>
        </tr>
        <tr>
            <td>h5. Subhead</td>
            <td><h5>Bold 16px</h5></td>
        </tr>
        <tr>
            <td>h6.</td>
            <td><h6>Bold 14px</h6></td>
        </tr>
        <tr>
            <td>Body</td>
            <td><div class="body">Regular 13px/14px</div></td>
        </tr>
        <tr>
            <td>Caption</td>
            <td><div class="caption">Regular 12px/13px</div></td>
        </tr>
    </tbody>
</table>
</div>
{:/nomarkdown}

{% highlight html %}
<h1 class="display3">Regular 56px</h1>
<h1>Regular 40px</h1>
<h2>Regular 25px</h2>
<h3>Bold 20px</h3>
<h4>Bold 18px</h4>
<h5>Bold 16px</h5>
<h6>Bold 14px</h6>
<p>Regular 13px/14px</p>
<div class="caption">Regular 12px/13px</div>
{% endhighlight %}

&nbsp;
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
