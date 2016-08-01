---
title: "Settings"
draft: true
---

<div class="pl-pattern">

<h3>Settings</h3>

#### Purpose

Some system behaviors and settings may need to change depending on the user.

#### Description

Settings should be implemented when there is functionality and behaviors that may need to be changed to meet a user's needs, such as notification settings, account settings, and other system behaviors. 

Avoid the urge to “just make it a setting”. Only add a setting if:

- More than 15% of your users will change the setting
- It's infrequently changed by users. If it's frequently changed, consider making it more available

#### Basic functionality

Depending on the application type, settings can appear as a dedicated page or as a modal dialog. The complexity of the settings panel can vary drastically between applications.

The settings panel can be composed of:

- Navigation
- Settings forms
- Search

&nbsp;

</div>

<div class="pl-pattern">
### Navigation

Use tabs if there are 5 or less sections of settings without nesting, otherwise use tree navigation. Hierarchical tree navigation is preferred over nested levels of tabs and improves discoverability.

#### Flat navigation

{::nomarkdown}
<div class="pl-preview">
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 750px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Settings</h4>
      </div>
      <div class="keyline-right" style="width: 200px; min-height: 400px; float: left;">
        <ul class="nav nav-stacked nav-tree" role="tab-list">
            <li role="presentation" class="category">General</li>
            <li class="active" role="presentation"><a role="tab" href="#">Profile</a></li>
            <li role="presentation"><a role="tab" href="#">Deployments</a></li>
            <li role="presentation"><a role="tab" href="#">Billing</a></li>
            <li role="presentation" class="category">System</li>
            <li role="presentation"><a role="tab" href="#">Notifications</a></li>
            <li role="presentation"><a role="tab" href="#">Emails</a></li>
            <li role="presentation"><a role="tab" href="#">SSH keys</a></li>
        </ul>
      </div>
      <div style="margin-left: 200px; max-height: 400px; overflow: auto;">
        <div style="opacity: 1; display: inline-block; width: 100%;">
          <div class="modal-body">
            <a class="pull-right"></a><h4 style="margin-top: 0px; margin-bottom: 16px;">Profile</h4> 
            <form class="" role="form">
                <div class="form-group">
                    <label class="control-label">Username</label>
                    <div class="">
                      <input disabled type="text" class="form-control" style="display: inline-block; max-width: 250px;" value="jsmith12">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">Name</label>
                    <div class="">
                      <input type="text" class="form-control" style="max-width: 250px;" value="John Smith">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">Email</label>
                    <div class="">
                      <input type="text" class="form-control" style="max-width: 250px;" value="john.smith@gmail.com">
                    </div>
                </div>
                <button class="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}

#### Tree navigation

{::nomarkdown}
<div class="pl-preview">
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 750px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Settings</h4>
      </div>
      <div style="width: 200px; min-height: 400px; border-right: 1px solid #ddd; float: left; padding-bottom: 14px;">
        <div style="padding: 8px 8px 8px 8px; border-bottom: 1px solid #ddd;" >
            <div class="input-icon icon icon-search" style="margin-top: 4px;"></div>
            <input type="text" class="form-control input-search input-sm" placeholder="">
        </div>
        <ul class="nav nav-stacked nav-tree" role="tab-list">
            <li role="presentation" class="category">General</li>
            <li role="presentation"><a role="tab" href="#">Profile</a></li>
            <li role="presentation"><button class="expander expanded"></button> <a role="tab" href="#">Account</a>
                <ul class="nav nav-stacked nav-tree">
                    <li role="presentation"><button class="expander expanded"></button> <a role="tab" href="#">General</a>
                        <ul class="nav nav-stacked nav-tree">
                            <li role="presentation"><a role="tab" href="#">Analytics</a></li>
                            <li role="presentation" class="active"><a role="tab" href="#" >Deployments</a></li>
                            <li role="presentation"><a role="tab" href="#">Automation</a></li>
                            <li role="presentation"><a role="tab" href="#">Continous integration for real</a></li>
                        </ul>
                    </li>
                    <li role="presentation"><a role="tab" href="#">Password</a></li>
                    <li role="presentation"><a role="tab" href="#">Advanced</a>
                    </li>
                </ul>
            </li>
            <li role="presentation"><a role="tab" href="#">Billing</a></li>
            <li role="presentation" class="category">System</li>
            <li role="presentation"><a role="tab" href="#">Notifications</a></li>
            <li role="presentation"><a role="tab" href="#">Emails</a></li>
            <li role="presentation"><a role="tab" href="#">SSH keys</a></li>
        </ul>
      </div>
      <div style="margin-left: 200px; max-height: 400px; overflow: auto;">
        <div style="opacity: 1; display: inline-block; width: 100%;">
          <div class="modal-body">
            <h4 style="margin-top: 0px; margin-bottom: 16px;">Deployments</h4>
            <p>Modify deployment scheduling to minimize impact. For certain traffic patterns, time scheduled deployments may be more appropriate.</p>
            <form class="" role="form">
                <div class="form-group">
                    <label class="control-label">Deploy during</label>
                    <div class="">
                      <div class="radio">
                        <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>Low traffic</label>
                      </div>
                      <div style="padding-left: 45px;">
                        <span>Less than <input type="text" class="form-control" style="display: inline-block; max-width: 75px" value="100"> RPM</span>
                      </div>
                      <div class="radio">
                        <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Time</label>
                      </div>
                    </div>
                </div>
                <button class="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}

#### Tab navigation

{::nomarkdown}
<div class="pl-preview">
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 600px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Settings</h4>
      </div>
      <div style="max-height: 400px; overflow: auto;">
        <div style="opacity: 1; display: inline-block; width: 100%;">
            <ul class="nav nav-tabs nav-tabs-light" role="tablist">
              <li><a href="#" role="tab" data-toggle="tab">Profile</a></li>
              <li><a href="#" role="tab" data-toggle="tab">Deployments</a></li>
              <li><a href="#" role="tab" data-toggle="tab">Billing</a></li>
              <li class="active"><a href="#" role="tab" data-toggle="tab">Notifications</a></li>
              <li><a href="#" role="tab" data-toggle="tab">SSH Keys</a></li>
            </ul>
            <div class="modal-body" >
                <form class="" role="form">
                    <div class="form-group">
                      <label>Receive email notifications when</label>
                      <div class="checkbox">
                        <label><input type="checkbox" id="optionsRadios1" value="option1" checked>My case is transferred to another examining attorney</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" id="optionsRadios2" value="option2" checked>New classes added</label>
                      </div>
                      <div class="checkbox">
                        <label><input type="checkbox" id="optionsRadios3" value="option3" checked>Classes originally paid for are deleted</label>
                      </div>
                    </div>
                </form>
                <button class="btn btn-primary">Save changes</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}
</div>


<div class="pl-pattern">

### Saving changes

There should be a `Save changes` button on every panel with savable changes. The buttons should be disabled if there have not yet been any changes. If the user attempts to navigate away with unsaved changes, the application or browser should ask them to confirm. 


{::nomarkdown}
<div class="pl-preview">
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4>Abandon changes?</h4>
        <p>You have unsaved changes. Your changes will be lost.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default">Leave this page</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Stay on this page</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade in" style="display: block; position: relative; z-index: inherit;">
  <div class="modal-dialog" style="width: 400px; max-width: 100%; padding: 20px;">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4>Abandon changes?</h4>
        <p>You have unsaved changes. Your changes will be lost.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default">Close settings</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Keep settings open</button>
      </div>
    </div>
  </div>
</div>
</div>
{:/nomarkdown}
</div>
