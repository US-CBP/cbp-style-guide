---
title: "Wizards"
---

<div class="pl-pattern">
<h3>Wizards</h3>

Users need guidance filling out complex forms or processes.

#### Description
Splitting a complex form into multiple steps accomplishes a few things:

- Reduces cognitive overhead by organizing and presenting related input fields
- Facilitates a potentially linear or evolving process
- Can provide improved contextual or evolving help

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
- Show a check icon when valid (only if the user has left/submitted the form with valid input)
- Show a warning icon when invalid (only if the user has left/submitted the form with errors)

#### Navigation
- Allow navigation to previous steps and skipping ahead if applicable
- Navigation may evolve depending on previous steps

#### Vertical Steps
Use vertical steps when there are 5 or more steps, when there are nested steps, or when steps are categorized.

{::nomarkdown}
<div class="pl-preview">
<div class="">
    <div class="" style="max-width: 700px;">
        <div class="" style="display: inline-block; width: 100%;">
            <div style="width: 200px; min-height: 400px; float: left;">
                <div class="panel-body">
                    <h4>New alert</h4>
                    <p>Add and configure new alerts for an environment.</p>
                </div>
                <ul class="nav nav-stacked nav-tree" role="tab-list">
                    <li role="presentation"><a role="tab" href="#"><span style="margin-left: -10px;" class="fa fa-check"></span> Criteria</a></li>
                    <li class="active" role="presentation"><a role="tab" href="#"><i style="margin-left: -10px;" class="fa fa-times-circle"></i> Recipients</a>
                    </li>
                    <li class="disabled"><a style="style="margin-left: 20px;" role="tab">Configure</a>
                        <ul class="nav nav-stacked nav-tree" role="tab-list">
                            <li class="disabled" role="presentation"><a href=""><span style="margin-left: 10px; position: relative; top: 1px; width: 14px; display: inline-block;"></span>Instances</a></li>
                            <li class="disabled" role="presentation"><a href=""><span style="margin-left: 10px; position: relative; top: 1px; width: 14px; display: inline-block;"></span>Monitoring</a></li>
                        </ul>
                    </li>
                    <li class="disabled" role="presentation"><a role="tab"><span style="margin-left: -10px; position: relative; top: 1px; width: 14px; display: inline-block;"></span> Review</a></li>
                </ul>
            </div>
            <div class="panel panel-default" style="margin-left: 200px; height: 500px; max-height: 500px; overflow: auto; position: relative;">
                <div class="panel-body">

                    <form class="form" style="max-width: 450px;" role="form">
                      <div class="form-group">
                        <div class="form-group-heading">
                        <h4>Recipients <span class="pull-right" style="font-size: 13px;"><span class="text-primary">Step 2 of 6</span></span></h4>
                        <p>When the alert criteria is met, each recipient will receive an email notification.</p>
                        <hr>
                        <div class="alert alert-danger"><i class="fa fa-times-circle"></i>&nbsp;Fix the 1 error below.</div>
                        </div>
                        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
                          <label for="ht3" class="mdl-textfield__label">Full name</label>
                          <input class="mdl-textfield__input" type="text" pattern="([a-zA-Z]{3,30}\s*)+[a-zA-Z]{3,30}" id="ht3">
                          <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid full name</span>
                        </div>
                        <div class="mdl-textfield mdl-textfield--floating-label mdl-js-textfield mdl-textfield--full-width">
                          <label for="ht4" class="mdl-textfield__label">Email</label>
                          <input class="mdl-textfield__input" type="text" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" id="ht4">
                          <p class="mdl-textfield__help">Email address of alert recipient</p>
                          <span class="mdl-textfield__error"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp;Not a valid email address</span>
                        </div>
                      </div>
                      <button type="button" class="btn btn-default">Cancel</button>
                      <button type="submit" class="btn btn-primary pull-right">Continue</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
{:/nomarkdown}

&nbsp;

#### Horizontal Steps
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
            <h2 style="margin: 36px 0;" class="text-center">So far so good. Now, let's talk about your shipment exam.</h2>
            <div style="margin: 18px 0;">
                <form class="" role="form">
                    <div class="form-group">
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action One
                                    <div class="text-muted">Lorem Ipsum<a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action Two
                                    <div class="text-muted">Lorem Ipsum<a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action Three
                                    <div class="text-muted">Lorem Ipsum<a href="#">Learn more.</a></div>
                                </span>
                              </label>
                        </div>
                    </div>
                </form>
                <div class="text-right" style="margin-top: 24px;">
                    <button class="btn btn-default pull-left">Back</button>
                    <button class="btn btn-primary">Continue</button>
                </div>
                <hr/>
                <p>The primary actions on a step indicator should be on the right, the secondary actions should be on the left.</p>

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
            <h2 style="margin: 36px 0;" class="text-center">So far so good. Now, let's talk about your exam.</h2>
            <div style="margin: 18px 0;">
                <form class="" role="form">
                    <div class="form-group">
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action One
                                    <div class="text-muted">Lorem Ipsum. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action Two
                                    <div class="text-muted">Lorem Ipsum. <a href="#">Learn more.</a></div>                                
                                </span>
                              </label>
                        </div>
                         <div class="radio">
                              <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
                                <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                <span class="mdl-radio__label">Exam Action Three
                                    <div class="text-muted">Lorem Ipsum<a href="#">Learn more.</a></div>
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

</div>
