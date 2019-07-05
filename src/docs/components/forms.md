---
title: "Forms"
---

<div class="pl-pattern">

<h3>Forms</h3>

Forms are a grouping of input controls that allow a user to submit information to your application.

__Do__

- Properly mark fields as required
- Add help blocks with inputs when necessary, especially when users may not fully understand the purpose of the input
- Place constructive action buttons on the right, and deconstructive action buttons on the left of the form
- If necessary, place short, related inputs on the same line (e.g., `City` and `State`, `Start` and `End`, `Min` and `Max`)
- Ensure that unsaved changes are not easily lost

__Don't__

- Use placeholders as the only label
- Place unrelated inputs on the same line

</div>

<div class="pl-pattern">

### Form Field Labels

__Do__

- Ensure that clicking on a label focuses the corresponding input
- Use sentence capitalization for labels
- Use concise label names
- Be consistent with label positioning (above/beside)
- Be consistent with questions or statements labels

__Don't__

- Use colons after labels

{::nomarkdown}
<h4>Example</h4>
<div class="pl-preview">
    <form role="form" class="form" style="padding: 0 15px;">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1">
        <label class="mdl-textfield__label static-label" for="sample1">static-label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1">
        <label class="mdl-textfield__label" for="sample1">placeholder label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample3">
        <label class="mdl-textfield__label" for="sample3">floating-label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
      </div>
    </form>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form" class="form" style="padding: 0 15px;">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1">
        <label class="mdl-textfield__label static-label" for="sample1">static-label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1">
        <label class="mdl-textfield__label" for="sample1">placeholder label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample3">
        <label class="mdl-textfield__label" for="sample3">floating-label</label>
        <span class="mdl-textfield__error">Only alphabet and no spaces</span>
    </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Required Fields
Required fields should be marked as required.

{::nomarkdown}
<h4>Example</h4>
<div class="pl-preview">
    <form role="form" class="form">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width is-required">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1" aria-required="true" />
        <label class="mdl-textfield__label static-label" for="sample1">static-label <span class="required-field"></span></label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width is-required">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample2" aria-required="true" />
        <label class="mdl-textfield__label" for="sample2">placeholder label <span class="required-field"></span></label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width is-required">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample3" aria-required="true">
        <label class="mdl-textfield__label" for="sample3">floating-label <span class="required-field"></span></label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
      </div>
    </form>
</div>
{:/nomarkdown}


{% highlight html %}
<form role="form" class="form">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width is-required">
    <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample1" aria-required="true" />
    <label class="mdl-textfield__label static-label" for="sample1">static-label <span class="required-field"></span></label>
    <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--full-width is-required">
    <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample2" aria-required="true" />
    <label class="mdl-textfield__label" for="sample2">placeholder label <span class="required-field"></span></label>
    <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width is-required">
    <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample3" aria-required="true">
    <label class="mdl-textfield__label" for="sample3">floating-label <span class="required-field"></span></label>
    <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
  </div>
</form>
{% endhighlight %}
</div>

<div class="pl-pattern">

### Form Validation

There are two main types of form validation, often used together.

- __Field level__: Validation errors appear directly below the field with errors (e.g., `This field is required.`)
- __Form level__: Validation errors appear at the top or bottom of the form (e.g., `The email or password you entered is incorrect.`, and `Please fix the 3 errors.`)

For input fields that are cramped, you may need to resort to using a popover error message.

__Do__

- Scroll to and focus the first field with an error when the submit button is pressed.
- Provide validation feedback as soon as possible, either 500ms after a key is pressed, when the field loses focus, or (if all else fails) when the form is submitted.
- Provide field level validation for fields that are known to be invalid
- Provide form level validation for large forms, or when the system doesn't know exactly which field is invalid
- Describe _why_ an error occurred (e.g., `Email is already in use` rather than `There was an error`)
- Describe/imply what the user should do to fix the error

__Don't__

- Cause the form to 'bounce' as validation errors show/hide while the user is typing
- Include technical jargon in errors


{::nomarkdown}
 <h4>Alphabet Validation (no space)</h4>
<div class="pl-preview">
    <form class="form" style="max-width: 450px;" role="form">
      <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample11" />
        <label class="mdl-textfield__label" for="sample11">Type any number(s) here...</label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
      </div>
    </form>
    </div>
 {:/nomarkdown}

 {% highlight html %}

   <form class="form" style="max-width: 450px;" role="form">
      <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*" id="sample11" />
        <label class="mdl-textfield__label" for="sample11">Type any number(s) here...</label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only alphabet and no spaces</span>
      </div>
   </form>

 {% endhighlight %}

  <h4>Numeric Validation</h4>
 <div class="pl-preview">
 {::nomarkdown}
   <form>
     <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield  mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample12" />
        <label class="mdl-textfield__label" for="sample12">Type any alphabet(s) here...</label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only numbers</span>
      </div>
    </form>
    </div>
{:/nomarkdown}

{% highlight html %}
 <form>
     <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield  mdl-textfield--full-width">
        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample12" />
        <label class="mdl-textfield__label" for="sample12">Type any alphabet(s) here...</label>
        <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Only numbers</span>
      </div>
  </form>
{% endhighlight %}
</div>

<div class="pl-pattern">

### Help Text

Help text can be placed at the top of the form, under the heading of a form group, under an individual form field, or as a popover when the field is focused.

- Place help text at the top of the form to give information that relates to the entire form
- Place help text under the heading of a form group to give information that relates to that form group alone
- Place help text beside or under an individual form field that relates to that field alone
- Use a popover on an input field (text box, text area, or select) for help text that is lengthy, complex, non-critical, or when screen real estate is limited. Too much help text can make a form look and feel busy and difficult. 


{::nomarkdown}
<h4>Example</h4>
<div class="pl-preview">
<form class="form" style="max-width: 450px;" role="form">
  <div class="form-group">
    <div class="form-group-heading">
      <h4>Public profile</h4>
      <p class="help-block">This information will appear on your public profile.</p>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ht3" class="mdl-textfield__label">Full name</label>
      <input class="mdl-textfield__input" type="text" pattern="([a-zA-Z]{3,30}\s*)+[a-zA-Z]{3,30}" id="ht3">
      <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid full name</span>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ht4" class="mdl-textfield__label">Email</label>
      <input class="mdl-textfield__input" type="text" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="ht4">
      <p class="mdl-textfield__help">This is how people will contact you.</p>
      <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid email address</span>
    </div>
  </div>
</form>
</div>
{:/nomarkdown}


{% highlight html %}
<form class="form" style="max-width: 450px;" role="form">
  <div class="form-group">
    <div class="form-group-heading">
      <h4>Public profile</h4>
      <p class="help-block">This information will appear on your public profile.</p>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ht3" class="mdl-textfield__label">Full name</label>
      <input class="mdl-textfield__input" type="text" pattern="([a-zA-Z]{3,30}\s*)+[a-zA-Z]{3,30}" id="ht3">
      <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid full name</span>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ht4" class="mdl-textfield__label">Email</label>
      <input class="mdl-textfield__input" type="text" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="ht4">
      <p class="mdl-textfield__help">This is how people will contact you.</p>
      <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid email address</span>
    </div>
  </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">

### Input Character Limits

Most input fields have technical character limits. The system should handle this gracefully in all scenarios. 

__Text box__

- In most cases, simply ignore key presses that exceed the limit

__Text area__

- If the limit is low or the expected input size is unknown, include a limit indicator
- Update the limit indicator on each key press
- Allow the user to keep typing past the indicator, but provide obvious indications that the limit has been exceeded.

 <h4>Textfield</h4>
{::nomarkdown}
<div class="pl-preview">
<form class="form" style="max-width: 450px;" role="form">
  <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
    <label for="ht4" class="mdl-textfield__label">Email</label>
    <input class="mdl-textfield__input" type="text" maxlength="25" data-charlimit=" 'target' : '.mdl-textfield__counter', 'limit' : 25 " pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="ht4">
    <p class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid email address</p>
    <p class="mdl-textfield__help">This is how people will contact you.</p>
    <p class="mdl-textfield__counter"></p>
  </div>
</form>
</div>
{:/nomarkdown}

{% highlight html %}

<form class="form" style="max-width: 450px;" role="form">
  <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
    <label for="ht4" class="mdl-textfield__label">Email</label>
    <input class="mdl-textfield__input" type="text" maxlength="25" data-charlimit=" 'target' : '.mdl-textfield__counter', 'limit' : 25 " pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="ht4">
    <p class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid email address</p>
    <p class="mdl-textfield__help">This is how people will contact you.</p>
    <p class="mdl-textfield__counter"></p>
  </div>
</form>

{% endhighlight %}

<h4>Textarea</h4>

{::nomarkdown}
<div class="pl-preview">
  <form>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ta2" class="mdl-textfield__label">Description</label>
      <textarea class="mdl-textfield__input" id="ta2" rows="3" class="form-control form-control-width-fill"
      data-charlimit=" 'target' : '.mdl-textfield__counter', 'limit': 140 "></textarea>
      <p class="mdl-textfield__counter"></p>
    </div>
  </form>
</div>
{:/nomarkdown}


{% highlight html %}
<form>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
      <label for="ta2" class="mdl-textfield__label">Description</label>
      <textarea class="mdl-textfield__input" id="ta2" rows="3" class="form-control form-control-width-fill"
      data-charlimit=" 'target' : '.mdl-textfield__counter', 'limit': 140 "></textarea>
      <p class="mdl-textfield__counter"></p>
    </div>
</form>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Examples

These examples show various form configurations.


#### Various Form Elements


{::nomarkdown}
<div class="pl-preview">
    <div class="" style="max-width: 450px;">
      <form role="form" style="max-width: 350px;">
        <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
          <select class="mdl-selectfield__select" id="t12" required aria-required="true">
            <option value=""></option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
          </select>
          <label class="mdl-selectfield__label" for="t12">Title<span class="required-field"></span></label>
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="fn12">First name <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="fn12" value="John" required aria-required="true">
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="ln12">Last name <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="ln12" value="Smith" required aria-required="true">
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="phone12">Telephone number <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="phone12" required aria-required="true">
        </div>
        <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
          <select class="mdl-selectfield__select" id="t122" required aria-required="true">
            <option value=""></option>
            <option value="USA">United States</option>
            <option value="MEX">Mexico</option>
            <option value="CAN">Canada</option>
          </select>
          <label class="mdl-selectfield__label" for="t122">Country<span class="required-field"></span></label>
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="adline1">Address line 1 <span class="required-field"></span> </label>
          <input type="text" class="mdl-textfield__input" id="adline1" required aria-required="true">
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="adline2"> Address line 2 <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="adline2" required aria-required="true">
        </div>
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="city12">City <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="city12" required aria-required="true">
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
              <label class="mdl-textfield__label" for="state12">State <span class="required-field"></span></label>
              <input type="text" class="mdl-textfield__input" id="state12" required aria-required="true">
            </div>
          </div>
          <div class="col-sm-6">
            <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
              <label class="mdl-textfield__label" for="zipcode12">Zip code <span class="required-field"></span></label>
              <input type="text" class="mdl-textfield__input" id="zipcode12" required aria-required="true">
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-default">Cancel</button>
        <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
      </form>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="" style="max-width: 450px;">
  <form role="form" style="max-width: 350px;">
    <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
      <select class="mdl-selectfield__select" id="t12" required aria-required="true">
        <option value=""></option>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Miss">Miss</option>
      </select>
      <label class="mdl-selectfield__label" for="t12">Title<span class="required-field"></span></label>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="fn12">First name <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="fn12" value="John" required aria-required="true">
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="mn12">Middle name <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="mn12" required aria-required="true">
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="ln12">Last name <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="ln12" value="Smith" required aria-required="true">
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="phone12">Telephone number <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="phone12" required aria-required="true">
    </div>
    <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
      <select class="mdl-selectfield__select" id="t122" required aria-required="true">
        <option value=""></option>
        <option value="USA">United States</option>
        <option value="MEX">Mexico</option>
        <option value="CAN">Canada</option>
      </select>
      <label class="mdl-selectfield__label" for="t122">Country<span class="required-field"></span></label>
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="adline1">Address line 1 <span class="required-field"></span> </label>
      <input type="text" class="mdl-textfield__input" id="adline1" required aria-required="true">
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="adline2"> Address line 2 <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="adline2" required aria-required="true">
    </div>
    <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
      <label class="mdl-textfield__label" for="city12">City <span class="required-field"></span></label>
      <input type="text" class="mdl-textfield__input" id="city12" required aria-required="true">
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="state12">State <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="state12" required aria-required="true">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield is-required">
          <label class="mdl-textfield__label" for="zipcode12">Zip code <span class="required-field"></span></label>
          <input type="text" class="mdl-textfield__input" id="zipcode12" required aria-required="true">
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-default">Cancel</button>
    <button type="submit" disabled class="btn btn-primary pull-right">Next</button>
  </form>
</div>
{% endhighlight %}

</div>
