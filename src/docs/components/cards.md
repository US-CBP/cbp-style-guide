---
title: "Cards"
---

<div class="pl-pattern">
<h3>Cards</h3>

#### Purpose

Reference of Google Material Design Lite:

https://getmdl.io/components/#cards-section

#### Description

TODO

#### Behaviors

TODO

&nbsp;

</div>

<div class="pl-pattern">
### Styles

#### Standard


{::nomarkdown}
<div class="pl-preview">     
  <div class="mdl-card-container row"> 
    <div class="col-sm-3">
      <div class="mdl-card mdl-card-shadow">
        <div class="mdl-card__media">
          <img src="../../generated/images/cbp_super_bowl.jpg" width="330" height="157" border="0" alt="" >
        </div>
        <div class="mdl-card__menu">
            <i class="fa fa-share-square fa-inverse" aria-hidden="true"></i>
        </div>
         <div class="mdl-card__title">
            <h3 class="mdl-card__title-text">CBP Super Bowl 50 Air and Marine Operations Security</h3>
          </div>
        <div class="mdl-card__supporting-text">
          Personnel with U.S. Customs and Border Protection conduct operations in advance of Super Bowl 50 in Santa Clara, Calif., 2016. (U.S. Customs and Border Protection Photo by Glenn Fawcett) 
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-default pull-right">
            Read More...
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="mdl-card mdl-card-shadow">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Update</h2>
        </div>
        <div class="mdl-card__menu">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
        <div class="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-default">
            View Updates
          </button>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="mdl-card mdl-card-shadow">
        <div class="mdl-card__title mdl-card--expand">
          <h4>
            Featured event:<br>
            May 24, 2016<br>
            7-11pm
          </h4>
        </div>
        <div class="mdl-card__menu">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-default">
            <i class="fa fa-calendar fa-fw"></i>
            &nbsp;Add to Calendar
          </button>
        </div>
      </div>
    </div>
  </div>    
</div>
{:/nomarkdown}

{% highlight html %}
<div class="mdl-card-container row"> 
  <div class="col-sm-3">
    <div class="mdl-card mdl-card-shadow">
      <div class="mdl-card__media">
        <img src="../../generated/images/cbp_super_bowl.jpg" width="330" height="157" border="0" alt="" >
      </div>
      <div class="mdl-card__menu">
          <i class="fa fa-share-square fa-inverse" aria-hidden="true"></i>
      </div>
       <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">CBP Super Bowl 50 Air and Marine Operations Security</h3>
        </div>
      <div class="mdl-card__supporting-text">
        Personnel with U.S. Customs and Border Protection conduct operations in advance of Super Bowl 50 in Santa Clara, Calif., 2016. (U.S. Customs and Border Protection Photo by Glenn Fawcett) 
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-default pull-right">
          Read More...
        </button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="mdl-card mdl-card-shadow">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Update</h2>
      </div>
      <div class="mdl-card__menu">
          <i class="fa fa-trash" aria-hidden="true"></i>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-default">
          View Updates
        </button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="mdl-card mdl-card-shadow">
      <div class="mdl-card__title mdl-card--expand">
        <h4>
          Featured event:<br>
          May 24, 2016<br>
          7-11pm
        </h4>
      </div>
      <div class="mdl-card__menu">
          <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-default">
          <i class="fa fa-calendar fa-fw"></i>
          &nbsp;Add to Calendar
        </button>
      </div>
    </div>
  </div>
</div>

{% endhighlight %}

#### Equal height


{::nomarkdown}
<div class="pl-preview">
  <div class="row mdl-card-deck">
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p class="text-ellipsis-4line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Longer heading text for the card.... Longer heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /></p>
          <ul class="list-inline">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.<br /></p>
          <ul class="list-inline show-list-10items">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
          </ul>
          </div>
          <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-star"></i>
            <span class="sr-only">Favorite</span>
            </button>
            <button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-pencil-square-o"></i>
            <span class="sr-only">Edit</span>
            </button>
            <button class="btn btn-primary btn-xs pull-right">
            Go to App
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  

{:/nomarkdown}

{% highlight html %}
<div class="row mdl-card-deck">
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p class="text-ellipsis-4line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Longer heading text for the card.... Longer heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /></p>
          <ul class="list-inline">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-shadow " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.<br /></p>
          <ul class="list-inline show-list-10items">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
            </ul>
          </div>
          <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-star"></i>
            <span class="sr-only">Favorite</span>
            </button>
            <button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-pencil-square-o"></i>
            <span class="sr-only">Edit</span>
            </button>
            <button class="btn btn-primary btn-xs pull-right">
            Go to App
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

{% endhighlight %}

#### Equal height & Expand on focus


{::nomarkdown}
<div class="pl-preview">
  <div class="row mdl-card-deck">
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p class="text-ellipsis-4line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Longer heading text for the card.... Longer heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /></p>
          <ul class="list-inline">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.<br /></p>
          <ul class="list-inline show-list-10items">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
          </ul>
          </div>
          <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-star"></i>
            <span class="sr-only">Favorite</span>
            </button>
            <button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-pencil-square-o"></i>
            <span class="sr-only">Edit</span>
            </button>
            <button class="btn btn-primary btn-xs pull-right">
            Go to App
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  

{:/nomarkdown}

{% highlight html %}
<div class="row mdl-card-deck">
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p class="text-ellipsis-4line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Longer heading text for the card.... Longer heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /></p>
          <ul class="list-inline">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
          </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.</p>
        </div>
        <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-star"></i>
          <span class="sr-only">Favorite</span>
          </button>
          <button type="button" class="btn btn-icon-only btn-xs btn-hover">
          <i class="fa fa-pencil-square-o"></i>
          <span class="sr-only">Edit</span>
          </button>
          <button class="btn btn-primary btn-xs pull-right">
          Go to App
          </button>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 ">
      <div class="mdl-card mdl-card-border mdl-card-expand " tabindex="0">
        <div class="mdl-card__title">
          <h3 class="mdl-card__title-text">Heading text for the card</h3>
        </div>
        <div class="mdl-card__supporting-text with-footer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.<br /></p>
          <ul class="list-inline show-list-10items">
            <li><span class="text-bold">Sample</span></li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
            <li>Sample</li>
            <li>sample</li>
          </ul>
          </div>
          <div class="mdl-card__actions mdl-card--border"><button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-star"></i>
            <span class="sr-only">Favorite</span>
            </button>
            <button type="button" class="btn btn-icon-only btn-xs btn-hover">
            <i class="fa fa-pencil-square-o"></i>
            <span class="sr-only">Edit</span>
            </button>
            <button class="btn btn-primary btn-xs pull-right">
            Go to App
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

{% endhighlight %}
</div>
