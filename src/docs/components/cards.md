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
 
  //adding ellipsis to the large text
    var ellipsisText = function(e) {
        //complete text stored in a variable
        var completeText = e.innerHTML.split(' ');
        //wordArray will be the text displayed
        var wordArray = e.innerHTML.split(' ');
        var lineNumMax = e.className.match(/\d/g);
        var finalHeight = lineNumMax * 18; //18 is the  line height

        while (e.scrollHeight > finalHeight) {
            wordArray.pop();

            e.innerHTML = wordArray.join(' ') + '<span class="ellipsis">... </span>';


        }

        //save the additional text in the span
        e.innerHTML = e.innerHTML + ' <span class="additional-text">' + completeText.splice(wordArray.length).join(' ') + '</span>';
    };
    // this should be a function which you will call on load
    function addEllipsis(el) {
        [].forEach.call(el, function(elem) {
            ellipsisText(elem);
        });
    }

    //add ellipsis to all p using the class
    var addEllipsisSelector = document.querySelectorAll('.text-ellipsis-4line');
    addEllipsis(addEllipsisSelector);
    var removeEllipsisSelector = document.querySelectorAll('.mdl-card-expand');
    //expand the text when this function is called    
    for (var i = 0; i < removeEllipsisSelector.length; i++) {
        //add mouse enter or hover event listener on the div
        removeEllipsisSelector[i].addEventListener('mouseenter', function() {
            var paraText = this.querySelectorAll('p[class*="text-ellipsis-"]')[0];
            var listText = this.querySelectorAll('ul[class*="show-list-"]')[0];
            if (typeof(paraText) !== 'undefined' && paraText !== null) {
            paraText.classList.add('expanded-view');
            }
            if (typeof(listText) !== 'undefined' && listText !== null) {
            listText.classList.add('expanded-view');
            }

        });
        //add key enter or focus event listener on the div
        removeEllipsisSelector[i].addEventListener('focus', function() {
            var paraText = this.querySelectorAll('p[class*="text-ellipsis-"]')[0];
            var listText = this.querySelectorAll('ul[class*="show-list-"]')[0];
            if (typeof(paraText) !== 'undefined' && paraText !== null) {
            paraText.classList.add('expanded-view');
            }
            if (typeof(listText) !== 'undefined' && listText !== null) {
            listText.classList.add('expanded-view');
            }
        });
    }
{% endhighlight %}

#### Brand Cards

{::nomarkdown}
<div class="pl-preview">
  <div class="brand-card-container">
    <div class="mdl-card mdl-card-border" tabindex="0">
      <div class="image-container"><img src="../../generated/images/toolbox_icon.svg"></div>
      <div class="mdl-card__title">
        <h3 class="mdl-card__title-text text-center">Card with svg image</h3>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <ul class="list-inline text-italic">
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
          <li>Sample</li>
        </ul>
        <p><a href="#">Watch Tool Tour Video</a></p>
        <p><a href="#">Access info</a> | <i class="fa fa-warning text-warning"></i> <span class="text-warning">Sample warning text</span></p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-circle">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <button class="btn btn-default pull-right">
        <i class="fa fa-share-square-o"></i> Launch Tool
        </button>
      </div>
    </div>   
    <div class="mdl-card mdl-card-border" tabindex="0">
      <div class="image-container bg-info">
        <span class="icon-span"> <i class="fa fa-star fa-5x fa-inverse"></i>
        </span>
      </div>
      <div class="mdl-card__title">
        <h3 class="mdl-card__title-text text-center">Heading text</h3>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-circle">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <button class="btn btn-default pull-right">
        <i class="fa fa-share-square-o"></i> Launch Tool
        </button>
      </div>
    </div>
    <div class="mdl-card mdl-card-border" tabindex="0">
      <div class="image-container bg-warning">
        <span class="icon-span"> <i class="fa fa-cog fa-5x fa-inverse"></i>
        </span>
      </div>
      <div class="mdl-card__title">
        <h3 class="mdl-card__title-text text-center">Very very long heading text</h3>
      </div>
      <div class="mdl-card__supporting-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button class="btn btn-circle">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
        <button class="btn btn-default pull-right">
        <i class="fa fa-share-square-o"></i> Launch Tool
        </button>
      </div>
    </div>
  </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="brand-card-container">
  <div class="mdl-card mdl-card-border" tabindex="0">
    <div class="image-container"><img src="../../generated/images/toolbox_icon.svg"></div>
    <div class="mdl-card__title">
      <h3 class="mdl-card__title-text text-center">Card with svg image</h3>
    </div>
    <div class="mdl-card__supporting-text">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <ul class="list-inline text-italic">
        <li>Sample</li>
        <li>Sample</li>
        <li>Sample</li>
        <li>Sample</li>
      </ul>
      <p><a href="#">Watch Tool Tour Video</a></p>
      <p><a href="#">Access info</a> | <i class="fa fa-warning text-warning"></i> <span class="text-warning">Sample warning text</span></p>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="btn btn-circle">
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
      <button class="btn btn-default pull-right">
      <i class="fa fa-share-square-o"></i> Launch Tool
      </button>
    </div>
  </div> 
  <div class="mdl-card mdl-card-border" tabindex="0">
    <div class="image-container bg-info">
      <span class="icon-span"> <i class="fa fa-star fa-5x fa-inverse"></i>
      </span>
    </div>
    <div class="mdl-card__title">
      <h3 class="mdl-card__title-text text-center">Heading text</h3>
    </div>
    <div class="mdl-card__supporting-text">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="btn btn-circle">
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
      <button class="btn btn-default pull-right">
      <i class="fa fa-share-square-o"></i> Launch Tool
      </button>
    </div>
  </div>
  <div class="mdl-card mdl-card-border" tabindex="0">
    <div class="image-container bg-warning">
      <span class="icon-span"> <i class="fa fa-cog fa-5x fa-inverse"></i>
      </span>
    </div>
    <div class="mdl-card__title">
      <h3 class="mdl-card__title-text text-center">Very very long heading text</h3>
    </div>
    <div class="mdl-card__supporting-text">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="btn btn-circle">
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
      <button class="btn btn-default pull-right">
      <i class="fa fa-share-square-o"></i> Launch Tool
      </button>
    </div>
  </div>
</div>

//brand card interaction
$('.btn-circle').on('click', function(){
 
  if ($(this).parents('.mdl-card').hasClass('brand-card-expand')) {
    $(this).parents('.mdl-card').removeClass('brand-card-expand');
  } else {
    $('.mdl-card').removeClass('brand-card-expand');
    $(this).parents('.mdl-card').addClass('brand-card-expand');
  }

})
{% endhighlight %}
</div>
