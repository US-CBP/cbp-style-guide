---
title: "Help"
---

<div class="pl-pattern">
<h3>Help</h3>

Users need to understand the processes, forms, and data they're interacting with.

#### Description
Help can be provided in a lot of different ways. When and how you provide help depends on the amount of help needed, the type of process/interaction, and your target audience. Too much contextual help can actually make interfaces harder to understand, but insufficient help will frustrate new users.

Some of the ways help can be provided are:

- Dedicated help and FAQ page(s)
- Above and in forms ([See Forms page for examples](../components/forms.html#help-text))
- Below form input fields ([See Forms page for examples](../components/forms.html#help-text))
- Popovers when form input fields are focused ([See Forms page for examples](../components/forms.html#help-text))
- Popovers with definitions/descriptions when hovering over a label/term/word
- "Learn more" links and "Information" icons

&nbsp;

##### Dotted Underlines
Use this for term definitions when a term may not be obvious to your target audience.

{::nomarkdown}
<div class="pl-preview">
<abbr data-toggle="popover" data-placement="top" data-container="body" data-trigger="hover" data-content="The person, group of persons, or organization that received ownership rights of the patent application or patent.">Assignee</abbr>: Smith, John D.
</div>
{:/nomarkdown}

{% highlight html %}
<abbr data-toggle="popover" data-placement="top" data-container="body" data-trigger="hover" data-content="The person, group of persons, or organization that received ownership rights of the patent application or patent.">Assignee</abbr>: Smith, John D.
{% endhighlight %}

&nbsp;

##### Input Field Focus Popover
Use this when the information is only relevant once the user has focused the field.

{::nomarkdown}
<div class="pl-preview">
<form role="form" class="form" style="max-width: 450px;">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="password" id="sample1" 
            data-html="true" data-toggle="popover" data-container="body" 
            data-trigger="focus" 
            data-content="Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name. <a href=''>Why?</a>">
        <label class="mdl-textfield__label static-label" for="sample1">Password</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
    </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form" class="form" style="max-width: 450px;">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="password" id="sample1" 
            data-html="true" data-toggle="popover" data-container="body" 
            data-trigger="focus" 
            data-content="Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name. <a href=''>Why?</a>">
        <label class="mdl-textfield__label static-label" for="sample1">Password</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
    </div>
</form>
{% endhighlight %}

&nbsp;

##### "Learn more" Links
Use "Learn more" links to provide additional help text only when the user needs it. The links can reveal additional text in the form of a popover, a dedicated help page, or by expanding the text.

{::nomarkdown}
<div class="pl-preview">
<form style="max-width: 450px;" role="form">
    <div class="form-group">
        <div class="radio">
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            <span class="mdl-radio__label">Standard Characters
                <div class="text-muted">Use this option to do view all shipments. <a href="#">Learn more.</a></div>    
            </span>
          </label>
        </div>
    </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}
<form style="max-width: 450px;" role="form">
    <div class="form-group">
        <div class="radio">
          <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            <span class="mdl-radio__label">Standard Characters
                <div class="text-muted">Use this option to do view all shipments. <a href="#">Learn more.</a></div>    
            </span>
          </label>
        </div>
    </div>
</form>
{% endhighlight %}


##### "Information" Icons
Use "Information" icons to provide explanations and elaborations for titles and panels.

{::nomarkdown}
<div class="pl-preview">
<div class="panel panel-default margin-2" style="max-width: 450px;">
    <div class="panel-heading">
        <h3 class="panel-title">Related Shipments<i class="fa fa-info-circle fa-muted margin-left-1" data-toggle="popover" data-placement="top" data-container="body" data-trigger="hover" data-content="Only unique visits this week are counted. Repeat visitors during the same week are not counted."></i></h3>
    </div>
    <div class="panel-body">
        <p></p>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="panel panel-default margin-2" style="max-width: 450px;">
    <div class="panel-heading">
        <h3 class="panel-title">Related Shipments<i class="fa fa-info-circle fa-muted margin-left-1" data-toggle="popover" data-placement="top" data-container="body" data-trigger="hover" data-content="Only unique visits this week are counted. Repeat visitors during the same week are not counted."></i></h3>
    </div>
    <div class="panel-body">
        <p></p>
    </div>
</div>
{% endhighlight %}

</div>
