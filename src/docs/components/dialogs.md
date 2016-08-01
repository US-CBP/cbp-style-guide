---
title: "Dialogs"
---

<div class="pl-pattern">
<h3>Dialogs</h3>

#### Purpose
Dialogs provide the user with a focused way of accomplishing, confirming, or viewing something without entirely leaving a screen or page.

#### Description
- Dialogs are useful for interactions that are relatively quick (less than a couple minutes)
- Dialogs float above the application until the user has taken a desired action or dismissed the dialog
- Dialogs can be used for managing settings, editing/creating simple objects, confirming an action, or any other set of information/actions that warrant not leaving the page
- Dialogs are usually opened from a click action
- Dialogs may or may not block interactions "behind" or "under" the dialog (see <a href="#modes">modes</a>)
- If there is a non-destructive dismiss/cancel, dialogs can be closed by clicking outside of the dialog

#### Components
__Header / title bar__

- Short and concise title
- Sentence case title
- Dismiss (X) icon if a non-destructive 'cancel/done' is applicable

__Content__

- Can contain text or UI controls focused on a particular task, process, or entitiy
- Can scroll independently depending on the content, creating a pinned header/footer

__Footer__

- Contains action buttons
- Primary action buttons are right aligned
- Cancel/previous buttons are left aligned
- Use button styles that match the actions/priority, but if there more than two buttons with similar actions/priority, use the default button style for them all
- Buttons should use action verbs that describe by themselves what will happen on click (e.g., 'Delete user' instead of 'Ok')

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title">Rename file</h4>
        </div>
        <div class="modal-body">
          <form role="form" class="form">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb12" class="mdl-textfield__label">Enter a new file name</label>
              <input type="text" class="mdl-textfield__input" id="tb12" value="dialogs.md">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
      </button>
      <h4 class="modal-title">Rename file</h4>
    </div>
    <div class="modal-body">
      <form role="form" class="form">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
          <label for="tb12" class="mdl-textfield__label">Enter a new file name</label>
          <input type="text" class="mdl-textfield__input" id="tb12" value="dialogs.md">
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
</div>
{% endhighlight %}

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title">Find and replace</h4>
        </div>
        <div class="modal-body">
          <form role="form" class="form">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb14" class="mdl-textfield__label">Find</label>
              <input type="text" class="mdl-textfield__input" id="tb14">
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb13" class="mdl-textfield__label">Replace with</label>
              <input type="text" class="mdl-textfield__input" id="tb13">
            </div>
            <div class="checkbox col-sm-offset-2">
              <label class="mdl-checkbox mdl-js-checkbox">
                <input class="mdl-checkbox__input" type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked />
                <span class="mdl-checkbox__label">Match case</span>
              </label>
            </div>
            <div class="checkbox col-sm-offset-2">
              <label class="mdl-checkbox mdl-js-checkbox">
                <input class="mdl-checkbox__input" type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>
                <span class="mdl-checkbox__label">Whole word</span>
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Find</button>
          <button type="button" class="btn btn-default" data-dismiss="modal" disabled>Replace</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Replace all</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title">Find and replace</h4>
        </div>
        <div class="modal-body">
          <form role="form" class="form">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb14" class="mdl-textfield__label">Find</label>
              <input type="text" class="mdl-textfield__input" id="tb14">
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb13" class="mdl-textfield__label">Replace with</label>
              <input type="text" class="mdl-textfield__input" id="tb13">
            </div>
            <div class="checkbox col-sm-offset-2">
              <label class="mdl-checkbox mdl-js-checkbox">
                <input class="mdl-checkbox__input" type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked />
                <span class="mdl-checkbox__label">Match case</span>
              </label>
            </div>
            <div class="checkbox col-sm-offset-2">
              <label class="mdl-checkbox mdl-js-checkbox">
                <input class="mdl-checkbox__input" type="checkbox" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2" checked>
                <span class="mdl-checkbox__label">Whole word</span>
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Find</button>
          <button type="button" class="btn btn-default" data-dismiss="modal" disabled>Replace</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Replace all</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Done</button>
        </div>
      </div>
    </div>
</div>
{% endhighlight %}

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="text-success">Thank you!</h4>
          <p>Your request has been submitted.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default">Back</button>
          <button type="button" class="btn btn-success">View request</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-body">
      <button type="button" class="close" data-dismiss="modal">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
      </button>
      <h4 class="text-success">Thank you!</h4>
      <p>Your request has been submitted.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="pull-left btn btn-default">Back</button>
      <button type="button" class="btn btn-success">View request</button>
    </div>
  </div>
</div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Confirmation

A confirmation dialog is short, simple dialog that ensures the user is performing an action intentionally. This is especially useful for dangerous or irreversible operations.

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="text-danger">Delete this user?</h4>
          <p>All user information will be deleted.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger">Delete user</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-body">
      <button type="button" class="close" data-dismiss="modal">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
      </button>
      <h4 class="text-danger">Delete this user?</h4>
      <p>All user information will be deleted.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-danger">Delete user</button>
    </div>
  </div>
</div>
</div>
{% endhighlight %}

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4>Abandon changes?</h4>
          <p>You have unsaved changes. Your changes will be lost.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default">Leave this page</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Stay on this page</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <h4>Abandon changes?</h4>
          <p>You have unsaved changes. Your changes will be lost.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default">Leave this page</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Stay on this page</button>
        </div>
      </div>
    </div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Actionless

An actionless dialog may block user interaction for a period of time, usually until something finishes or some other event occurs.

{::nomarkdown}
<div class="pl-preview">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-center">
        <div class="modal-body">
          <div style="margin-bottom: 6px;" class="clearfix">
            <div class="pull-left">Uploading document...</div>
            <span class="pull-right text-muted">60%</span>
          </div>
          <div class="progress" style="margin-bottom: 0;">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
          </div>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="modal fade" tabindex="-1" id="myModal" role="dialog" aria-labelledby="myModalTitle">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-center">
        <div class="modal-body">
          <div style="margin-bottom: 6px;" class="clearfix">
            <div class="pull-left">Uploading document...</div>
            <span class="pull-right text-muted">60%</span>
          </div>
          <div class="progress" style="margin-bottom: 0;">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
          </div>
        </div>
      </div>
    </div>
</div>
{% endhighlight %}
</div>

<div class="pl-pattern">
### Modes
Dialogs can prevent the user from performing actions behind/around the dialog if desired. There are 3 general modes:

- __Modal__: A modal dialog __prevents__ the user from interacting with all other areas of the application until the dialog is dismissed.
- __Modeless__: A modeless dialog __allows__ the user interact with all other areas of the application without dismissing the dialog. 
- __Mixed-modal__: A mixed-modal dialog may block __some__ areas of the application, but not others. E.g., a dialog pertaining to one document, but not another visible document.

&nbsp;

</div>

<div class="pl-pattern">

### Live

{::nomarkdown}
<div class="pl-preview">

<button class="btn btn-default" data-toggle="modal" data-target="#myModalLive">
    Show modal
</button>

<div class="modal fade" tabindex="-1" id="myModalLive" role="dialog" aria-labelledby="myModalTitle">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
          </button>
          <h4 class="modal-title" id="myModalTitle">Rename file</h4>
        </div>
        <div class="modal-body">
          <form role="form" class="form">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
              <label for="tb122" class="mdl-textfield__label">Enter a new file name</label>
              <input type="text" class="mdl-textfield__input" id="tb122" value="dialogs.md">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="pull-left btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
</div>

{:/nomarkdown}

</div>
