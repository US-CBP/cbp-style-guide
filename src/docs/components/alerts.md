---
title: "Alerts and notifications"
---

<div class="pl-pattern">
### Contextual Alerts

#### Purpose
Users need to be aware of important information related to their current activity.

#### Description

- Contextual alerts are positioned above the area or form they relate to
- They are often triggered by a user interaction
- They can be closable and can have other action buttons or links
- Alerts with low importance (info or success) can close automatically after 5 seconds (if desired).
- Alerts with high importance (warning or danger) should not close automatically, unless the situation has been resolved in some other way.


__Types:__

- __Info__ alerts should be used when there are tips or information that a user can benefit from.
- __Success__ alerts should be used when an action was performed successfully.
- __Warning__ alerts should be used when an action is out of the ordinary or might not be desired.
- __Danger__ alerts should be used when the system has failed to perform an action, or when the user has made an error.

{::nomarkdown}
<div class="pl-preview">
    <div style="max-width: 450px;">
        <div class="alert alert-info" role="alert">
          <button type="button" class="close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <i class="fa fa-info-circle" aria-hidden="true"></i> Press the <strong>'A'</strong> key to automatically assign a case.
        </div>
        <div class="alert alert-success" role="alert">
          <button type="button" class="close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <button class="btn btn-sm btn-link alert-link pull-right">Undo</button>
          <i class="fa fa-check" aria-hidden="true"></i> Case assigned to <strong>Jerry</strong> .
        </div>
        <div class="alert alert-success" role="alert">
          <button type="button" class="close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <i class="fa fa-check" aria-hidden="true"></i> Case assigned to
          <strong>Jerry</strong> .
        </div>
        <div class="alert alert-warning" role="alert">
          <button type="button" class="close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
          </button>
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There are more than <strong>10</strong> cases assigned to <strong>John</strong>.
        </div>
        <div class="alert alert-danger" role="alert">
          <button class="btn btn-sm btn-link alert-link pull-right">Retry</button>
          <i class="fa fa-times-circle" aria-hidden="true"></i> There was a network error assigning case
          <strong>90/934,382</strong> .
        </div>
        <div class="alert alert-danger" role="alert">
          <i class="fa fa-times-circle" aria-hidden="true"></i> Please fix the 3 errors.
        </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="alert alert-info" role="alert">
  <button type="button" class="close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
  </button>
  <i class="fa fa-info-circle" aria-hidden="true"></i> Press the <strong>'A'</strong> key to automatically assign a case.
</div>
<div class="alert alert-success" role="alert">
  <button type="button" class="close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
  </button>
  <button class="btn btn-sm btn-link alert-link pull-right">Undo</button>
  <i class="fa fa-check" aria-hidden="true"></i> Case assigned to <strong>Jerry</strong> .
</div>
<div class="alert alert-success" role="alert">
  <button type="button" class="close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
  </button>
  <i class="fa fa-check" aria-hidden="true"></i> Case assigned to
  <strong>Jerry</strong> .
</div>
<div class="alert alert-warning" role="alert">
  <button type="button" class="close">
  <span aria-hidden="true">&times;</span>
  <span class="sr-only">Close</span>
  </button>
  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There are more than <strong>10</strong> cases assigned to <strong>John</strong>.
</div>
<div class="alert alert-danger" role="alert">
  <button class="btn btn-sm btn-link alert-link pull-right">Retry</button>
  <i class="fa fa-times-circle" aria-hidden="true"></i> There was a network error assigning case
  <strong>90/934,382</strong> .
</div>
<div class="alert alert-danger" role="alert">
  <i class="fa fa-times-circle" aria-hidden="true"></i> Please fix the 3 errors.
</div>

{% endhighlight %}
</div>

<div class="pl-pattern">
### System Notifications

#### Purpose
Users need to be aware of important information related to the system.

#### Description

- System notifications appear in in the top right corner of the screen
- They are usually triggered by events _unrelated_ to the user's interactions
- They can be closable and can have other action buttons or links
- Notifications with low importance (info or success) can close automatically after 5 seconds (if desired)
- Notifications with high importance (warning or danger) should not close automatically, unless the situation has been resolved in some other way

__Types:__

- __Info__ notifications can be used for general messages that aren’t particularly critical.
- __Success__ notifications can be used for positive messages that don’t have a context to associate it with.
- __Warning__ notifications can be used for messages that likely require attention.
- __Danger__ notifications can be used for critical messages that require immediate attention.

{::nomarkdown}
<div class="pl-preview">

    <div class="toast-list" style="max-width: 400px;">
      <div class="toast toast-success">
        <div class="toast-content">
          <button class="close" data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Message sent to Jerry.</span>
        </div>
      </div>
      <div class="toast toast-info">
        <div class="toast-content">
          <button class="close" data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Jerry added a comment to one of your cases (90/098,881).</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">View comment</button>
        </div>
      </div>
      <div class="toast toast-warning">
        <div class="toast-content">
          <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">View case</button>
          <button type="button" class="btn btn-link">
          Snooze
          <span
          class="caret"></span>
          </button>
        </div>
      </div>
      <div class="toast toast-danger">
        <div class="toast-content">
          <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Connection has been lost. Retrying in 30 seconds.</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">Retry now</button>
        </div>
      </div>
    </div>
    <button type="button" data-toast-target="#example-toasts"
    class="btn btn-default show-toasts">Toggle notifications</button>
    <div class="toast-list pl-closable-toasts"
      style="display: none; width: 400px; padding: 9px;"
      id="example-toasts">
      <div class="toast toast-success">
        <div class="toast-content">
          <button class="close"  data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Message sent to Jerry.</span>
        </div>
      </div>
      <div class="toast toast-info">
        <div class="toast-content">
          <button class="close">
          <span>&times;</span>
          </button>
          <span>Jerry added a comment to one of your cases (90/098,881).</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">View comment</button>
        </div>
      </div>
      <div class="toast toast-warning">
        <div class="toast-content">
          <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">View case</button>
          <button type="button" class="btn btn-link">
          Snooze
          <span
          class="caret"></span>
          </button>
        </div>
      </div>
      <div class="toast toast-danger">
        <div class="toast-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span>&times;</span>
          </button>
          <span>Connection has been lost. Retrying in 30 seconds.</span>
        </div>
        <div class="toast-actions">
          <button type="button" class="btn btn-link">Retry now</button>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="toast-list">
    <div class="toast toast-warning">
        <div class="toast-content">
            <button type="button" class="close">
                <span>&times;</span>
            </button>
            <span>Case 90/842,381 is due tomorrow.</span>
        </div>
        <div class="toast-actions">
            <button type="button" class="btn btn-link">View case</button>
            <button type="button" class="btn btn-link">Snooze <span class="caret"></span></button>
        </div>
    </div>
</div>
{% endhighlight %}

</div>
