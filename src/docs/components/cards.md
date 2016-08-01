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
    <div class="panel bs-example">
      <div class="container">
        <div class="cbp-card-container">
          <div class="cbp-card cbp-card-shadow col-sm-2">
            <div class="cbp-card__media">
              <img src="../../generated/images/cbp_super_bowl.jpg" width="330" height="157" border="0" alt="" >
            </div>
            <div class="cbp-card__menu">
                <i class="fa fa-share-square fa-inverse" aria-hidden="true"></i>
            </div>
             <div class="cbp-card__title">
                <h3 class="cbp-card__title-text">CBP Super Bowl 50 Air and Marine Operations Security</h3>
              </div>
            <div class="cbp-card__supporting-text">
              Personnel with U.S. Customs and Border Protection conduct operations in advance of Super Bowl 50 in Santa Clara, Calif., 2016. (U.S. Customs and Border Protection Photo by Glenn Fawcett) 
            </div>
            <div class="cbp-card__actions cbp-card--border">
              <button class="btn btn-default pull-right">
                Read More...
              </button>
            </div>
          </div>
          
          <div class="cbp-card cbp-card-shadow col-sm-2">
            <div class="cbp-card__title cbp-card--expand">
              <h2 class="cbp-card__title-text">Update</h2>
            </div>
            <div class="cbp-card__menu">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
            <div class="cbp-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
            </div>
            <div class="cbp-card__actions cbp-card--border">
              <button class="btn btn-default">
                View Updates
              </button>
            </div>
          </div>
          
          <div class="cbp-card cbp-card-shadow col-sm-2">
            <div class="cbp-card__title cbp-card--expand">
              <h4>
                Featured event:<br>
                May 24, 2016<br>
                7-11pm
              </h4>
            </div>
            <div class="cbp-card__menu">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="cbp-card__actions cbp-card--border">
              <button class="btn btn-default">
                <i class="fa fa-calendar fa-fw"></i>
                &nbsp;Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="panel">
  <div class="container">
    <div class="cbp-card-container">
      <div class="cbp-card cbp-card-shadow col-sm-2">
        <div class="cbp-card__media">
          <img src="../../generated/images/cbp_super_bowl.jpg" width="330" height="157" border="0" alt="" >
        </div>
        <div class="cbp-card__menu">
            <i class="fa fa-share-square fa-inverse" aria-hidden="true"></i>
        </div>
         <div class="cbp-card__title">
            <h3 class="cbp-card__title-text">CBP Super Bowl 50 Air and Marine Operations Security</h3>
          </div>
        <div class="cbp-card__supporting-text">
          Personnel with U.S. Customs and Border Protection conduct operations in advance of Super Bowl 50 in Santa Clara, Calif., 2016. (U.S. Customs and Border Protection Photo by Glenn Fawcett) 
        </div>
        <div class="cbp-card__actions cbp-card--border">
          <button class="btn btn-default pull-right">
            Read More...
          </button>
        </div>
      </div>
      
      <div class="cbp-card cbp-card-shadow col-sm-2">
        <div class="cbp-card__title cbp-card--expand">
          <h2 class="cbp-card__title-text">Update</h2>
        </div>
        <div class="cbp-card__menu">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </div>
        <div class="cbp-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        </div>
        <div class="cbp-card__actions cbp-card--border">
          <button class="btn btn-default">
            View Updates
          </button>
        </div>
      </div>
      
      <div class="cbp-card cbp-card-shadow col-sm-2">
        <div class="cbp-card__title cbp-card--expand">
          <h4>
            Featured event:<br>
            May 24, 2016<br>
            7-11pm
          </h4>
        </div>
        <div class="cbp-card__menu">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <div class="cbp-card__actions cbp-card--border">
          <button class="btn btn-default">
            <i class="fa fa-calendar fa-fw"></i>
            &nbsp;Add to Calendar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}
</div>
