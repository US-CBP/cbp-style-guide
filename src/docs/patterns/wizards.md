---
title: "Wizards"
---

<div class="pl-pattern">
<h3>Wizards</h3>

#### Purpose
Users need guidance filling out a complex form.

#### Description
Splitting a complex form into multiple steps accomplishes a few things:

- Reduces cognitive overhead by organizing and presenting related input fields
- Facilitates a potentially linear or evolving process
- Can provide improved contextual or evolving help 

#### Basic functionality
A wizard is usually composed of:

- A list of steps, either horizontally or vertically
- A collection of form controls and help text organized into steps
- Buttons for navigation
- Validation

&nbsp;

</div>

<div class="pl-pattern">
### Steps

In many cases it's beneficial to show the list of steps a wizard will have. Depending on the number of steps and space available, steps can be listed vertically or horizontally.

#### Validation
- Indicate a step's validity
  - Show a check icon when valid (only if the user has left/submitted the form with valid input)
  - Show a warning icon when invalid (only if the user has left/submitted the form with errors)

#### Navigation
- Allow for navigating to previous steps when possible
- In some cases, skipping ahead is applicable
- Navigation may evolve depending on previous steps

#### Vertical steps (Removed)
Use vertical steps when there are 5 or more steps, when there are nested steps, or when steps are categorized.

#### Horizontal steps
Use horizontal steps when there are 4 or less steps.


{::nomarkdown}
<div class="pl-preview">
<div class="">
    <div class="" style="max-width: 700px; margin-auto;">
        <div style="padding: 50px; overflow: auto; position: relative;">
            <ol class="nav-steps">
                <li  style="width:33.3%">
                    <span>Shipment Information</span>
                </li>
                <li class="active" style="width:33.3%">
                    <span>Exams</span>
                </li>
                <li class="" style="width:33.3%">
                    <span>Holds</span>
                </li>
            </ol>
            <h2 style="margin: 36px 0;" class="text-center">So far so good. Now, let's talk about your mark.</h2>
            <h4>First, what type of mark is this?</h4>
            <div style="margin: 18px 0;">
                <form class="" role="form">
                    <div class="form-group">
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Standard Characters
                                    <div class="text-muted">Use this option to register a mark that is comprised of word(s), letter(s), number(s), or any combination thereof with no design element or stylization. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Special form
                                    <div class="text-muted">Use this option if you wish to register a mark that is comprised of stylized word(s), letter(s), and/or number(s), and/or a design element. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Sound mark 
                                    <div class="text-muted">A non-visual mark may be a sound, a scent, or otherwise non-visual mark. <a href="#">Learn more.</a></div>
                                </span>
                              </label>
                        </div>
                    </div>
                </form>
                <div class="text-right" style="margin-top: 24px;">
                    <button class="btn btn-default pull-left">Back</button>
                    <button class="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{:/nomarkdown}
{% highlight html %}
<div class="">
    <div class="" style="max-width: 700px; margin-auto;">
        <div style="padding: 50px; overflow: auto; position: relative;">
            <ol class="nav-steps">
                <li  style="width:33.3%">
                    <span>Shipment Information</span>
                </li>
                <li class="active" style="width:33.3%">
                    <span>Exams</span>
                </li>
                <li class="" style="width:33.3%">
                    <span>Holds</span>
                </li>
            </ol>
            <h2 style="margin: 36px 0;" class="text-center">So far so good. Now, let's talk about your mark.</h2>
            <h4>First, what type of mark is this?</h4>
            <div style="margin: 18px 0;">
                <form class="" role="form">
                    <div class="form-group">
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Standard Characters
                                    <div class="text-muted">Use this option to register a mark that is comprised of word(s), letter(s), number(s), or any combination thereof with no design element or stylization. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Special form
                                    <div class="text-muted">Use this option if you wish to register a mark that is comprised of stylized word(s), letter(s), and/or number(s), and/or a design element. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Sound mark 
                                    <div class="text-muted">A non-visual mark may be a sound, a scent, or otherwise non-visual mark. <a href="#">Learn more.</a></div>
                                </span>
                              </label>
                        </div>
                    </div>
                </form>
                <div class="text-right" style="margin-top: 24px;">
                    <button class="btn btn-default pull-left">Back</button>
                    <button class="btn btn-primary">Continue</button>
                </div>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Buttons
Buttons for a wizard can vary depending on the need. The primary actions should be on the right, the secondary actions should be on the left.

{::nomarkdown}
<div class="pl-preview">
<div style="max-width: 450px; display: inline-block; width: 100%;">
    <div class="btn-toolbar">
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
        <button class="btn btn-default pull-right">Save</button>
    </div>
    <p style="margin-top: 10px;" class="pull-right text-muted"> Last saved 09/19/14 10:45 AM</p>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<div style="max-width: 450px; display: inline-block; width: 100%;">
    <div class="btn-toolbar">
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
    </div>
    <hr>
    <div class="btn-toolbar">
        <button class="btn btn-default">Back</button><button class="btn btn-default">Cancel</button>
        <button class="btn btn-primary pull-right">Continue</button>
        <button class="btn btn-default pull-right">Save</button>
    </div>
    <p style="margin-top: 10px;" class="pull-right text-muted"> Last saved 09/19/14 10:45 AM</p>
</div>
{% endhighlight %}
</div>
