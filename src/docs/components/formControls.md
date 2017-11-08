---
title: "Form controls"
---


<div class="pl-pattern">
### Text box

#### Purpose
Users need to input a simple text value.

#### Description
Text boxes allow the user to input a simple text value. A text box only allows for a single line of input. 


{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="form">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="tb12" class="mdl-textfield__label">Normal</label>
            <input type="text" class="mdl-textfield__input" id="tb12">
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="tb13" class="mdl-textfield__label">Disabled</label>
            <input type="text" class="mdl-textfield__input" id="tb13" disabled>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-readonly">
            <label for="tb14" class="mdl-textfield__label">Readonly</label>
            <input type="text" class="mdl-textfield__input" id="tb14" readonly>
          </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
<form role="form" class="form">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="tb12" class="mdl-textfield__label">Normal</label>
    <input type="text" class="mdl-textfield__input" id="tb12">
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="tb13" class="mdl-textfield__label">Disabled</label>
    <input type="text" class="mdl-textfield__input" id="tb13" disabled>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-readonly">
    <label for="tb14" class="mdl-textfield__label">Readonly</label>
    <input type="text" class="mdl-textfield__input" id="tb14" Readonly>
  </div>
</form>
{% endhighlight %}

#### Input masks

Input masks ensure that the user understands the input format required, in addition to making input less error-prone by potentially restricting the number or types of characters that can be entered.

<span class="text-muted">Example uses https://github.com/RobinHerbots/jquery.inputmask for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
<h4>With Floating Label</h4>
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form class="form" role="form">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="im1" class="mdl-textfield__label">SSN</label>
            <input type="text" class="mdl-textfield__input" id="im1" data-inputmask=" 'mask': '999-99-9999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default' ">
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="im2" class="mdl-textfield__label">Routing #</label>
            <input type="text" class="mdl-textfield__input" id="im2" data-inputmask=" 'mask': 'PCT/99,999,999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default' ">
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="im3" class="mdl-textfield__label">Start date</label>
            <input type="text" class="mdl-textfield__input" id="im3" data-inputmask=" 'mask': 'd/m/y', 'placeholder': 'dd/mm/yyyy', 'alias' : 'mdl-mask-datepicker' ">
          </div>
        </form>
    </div>
</div>
<h4>With Placeholder Label</h4>
<div class="container-fluid" style="max-width: 400px; margin: 0;">
  <div class="row">
    <form class="form" role="form">
      <div class="mdl-textfield mdl-js-textfield">
        <label for="im1" class="mdl-textfield__label">SSN</label>
        <input type="text" class="mdl-textfield__input" id="im1" data-inputmask=" 'mask': '999-99-9999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default-placeholder' ">
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <label for="im2" class="mdl-textfield__label">Routing #</label>
        <input type="text" class="mdl-textfield__input" id="im2" data-inputmask=" 'mask': 'PCT/99,999,999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default-placeholder' ">
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <label for="im3" class="mdl-textfield__label">Start date</label>
        <input type="text" class="mdl-textfield__input" id="im3" data-inputmask=" 'mask': 'd/m/y', 'placeholder': 'dd/mm/yyyy', 'alias' : 'mdl-mask-datepicker-placeholder' ">
      </div>
    </form>
  </div>
</div>
</div>
{:/nomarkdown}

{% highlight html %}
// With Floating Label
<form class="form" role="form">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="im1" class="mdl-textfield__label">SSN</label>
    <input type="text" class="mdl-textfield__input" id="im1" data-inputmask=" 'mask': '999-99-9999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default' ">
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="im2" class="mdl-textfield__label">Routing #</label>
    <input type="text" class="mdl-textfield__input" id="im2" data-inputmask=" 'mask': 'PCT/99,999,999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default' ">
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="im3" class="mdl-textfield__label">Start date</label>
    <input type="text" class="mdl-textfield__input" id="im3" data-inputmask=" 'mask': 'd/m/y', 'placeholder': 'dd/mm/yyyy', 'alias' : 'mdl-mask-datepicker' ">
  </div>
</form>

// With Placeholder Label
<form class="form" role="form">
  <div class="mdl-textfield mdl-js-textfield">
    <label for="im1" class="mdl-textfield__label">SSN</label>
    <input type="text" class="mdl-textfield__input" id="im1" data-inputmask=" 'mask': '999-99-9999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default-placeholder' ">
  </div>
  <div class="mdl-textfield mdl-js-textfield">
    <label for="im2" class="mdl-textfield__label">Routing #</label>
    <input type="text" class="mdl-textfield__input" id="im2" data-inputmask=" 'mask': 'PCT/99,999,999', 'placeholder': 'ˍ', 'alias' : 'mdl-textfield-default-placeholder' ">
  </div>
  <div class="mdl-textfield mdl-js-textfield">
    <label for="im3" class="mdl-textfield__label">Start date</label>
    <input type="text" class="mdl-textfield__input" id="im3" data-inputmask=" 'mask': 'd/m/y', 'placeholder': 'dd/mm/yyyy', 'alias' : 'mdl-mask-datepicker-placeholder' ">
  </div>
</form>
{% endhighlight %}


</div>

<div class="pl-pattern">
### Text area

#### Purpose
Users need to input an extended, potentially multi-line text value.

#### Description
Text areas allow the user to input extended, multi-line text values.

#### Sizing and resizing

Text areas can either

- have a fixed, static height
- automatically grow/shrink based on the input, from a minimum number of lines (e.g., 3) to a maxmimum number of lines (e.g., 10) to ensure that space is optimally used
- have a resize handle, allowing for manual vertical and/or horizontal resizing


{::nomarkdown}
<div class="pl-preview">
<div class="container-fluid" style="max-width: 400px; margin: 0;">
    <div class="row">
        <form role="form" class="form">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="ta12" class="mdl-textfield__label">Normal</label>
            <textarea class="mdl-textfield__input" id="ta12" rows="2"></textarea>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="ta13" class="mdl-textfield__label">Disabled</label>
            <textarea class="mdl-textfield__input" id="ta13" rows="2" disabled></textarea>
          </div>
        </form>
    </div>
</div>
</div>
{:/nomarkdown}


{% highlight html %}
<form role="form" class="form">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="ta12" class="mdl-textfield__label">Normal</label>
    <textarea class="mdl-textfield__input" id="ta12" rows="2"></textarea>
  </div>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <label for="ta13" class="mdl-textfield__label">Disabled</label>
    <textarea class="mdl-textfield__input" id="ta13" rows="2" disabled></textarea>
  </div>  
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Select

#### Purpose
Example of Selectize, Select2, and plain Select.

#### Description


{::nomarkdown}
<div class="pl-preview">
<h3>Select</h3>
<div class="container-fluid" style="max-width: 400px; margin: 0;">
  <div class="row">
    <form role="form" class="col-sm-12">
      <h4>Plain Ol' Select <small>Without third party select JS libraries</small></h4>
      <div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
        <select id="se17" class="mdl-selectfield__select" aria-expanded="false">
          <option value=""></option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
        </select>
        <label for="se17" class="mdl-selectfield__label">With floating label</label>
      </div>
      <div class="mdl-selectfield mdl-js-selectfield">
        <select id="se18" class="mdl-selectfield__select" aria-expanded="false">
          <option value=""></option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
        </select>
        <label for="se18" class="mdl-selectfield__label">With placeholder label</label>
      </div>
      <div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
        <select id="se19" class="mdl-selectfield__select" aria-expanded="false" disabled>
          <option value=""></option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
        </select>
        <label for="se19" class="mdl-selectfield__label">Disabled with floating label</label>
      </div>
      <div class="mdl-selectfield mdl-js-selectfield">
        <select id="se20" class="mdl-selectfield__select" aria-expanded="false" disabled>
          <option value=""></option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
        </select>
        <label for="se20" class="mdl-selectfield__label">Disabled with placeholder label</label>
      </div>
      <h4>Plain Ol' Multiple Select</h4>
      <div class="container-fluid" style="max-width: 400px; margin: 0;">
        <div class="row">
          <form role="form" class="col-sm-12 form">
            <div class="mdl-selectfield mdl-selectfield--floating-label mdl-selectfield--multiple mdl-js-selectfield ">
              <select id="se21" class="mdl-selectfield__select" aria-expanded="false" multiple>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
              <label for="se21" class="mdl-selectfield__label">With floating label</label>
            </div>
            <div class="mdl-selectfield mdl-selectfield--floating-label mdl-selectfield--multiple mdl-js-selectfield ">
              <select id="se22" class="mdl-selectfield__select" aria-expanded="false" multiple disabled>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
              <label for="se22" class="mdl-selectfield__label">With floating label</label>
            </div>
          </form>
        </div>
      </div>
      
      <h4>Selectize</h4>
      <h5>Selectize Standard Select</h5>
      <div class="selectize-field selectize-field--floating-label">
        <select id="selectize" class="selectize" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="selectize">Floating Label</label>
      </div>
      <div class="selectize-field">
        <select id="selectize" class="selectize">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="selectize">Placeholder Label</label>
      </div>
      <h5>Selectize Multiple Select</h5>
      <div class="selectize-field selectize-field--floating-label">
        <select id="selectize2" class="selectize-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="selectize2">Floating Label</label>
      </div>
      <div class="selectize-field">
        <select id="selectize2" class="selectize-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="selectize2">Placeholder Label</label>
      </div>
      
      <h4>Select2</h4>
      <h5>Select2 Standard Select</h5>
      <div class="select2-field select2-field--floating-label">
        <select id="select2" class="select2" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="select2">Floating Label</label>
      </div>
      <div class="select2-field">
        <select id="select2" class="select2" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="select2">Placeholder Label</label>
      </div>
      <h5>Select2 Multiple Select</h5>
      <div class="select2-field select2-field--floating-label">
        <select id="select22" class="select2-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="select22">Floating Label</label>
      </div>
      <div class="select2-field">
        <select id="select22" class="select2-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="select22">Placeholder Label</label>
      </div>
    </form>
  </div>
</div>

</div>
{:/nomarkdown}


{% highlight html %}
// Select
<form role="form" class="col-sm-12">
    <div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
        <select id="se17" class="mdl-selectfield__select" aria-expanded="false">
        <option value=""></option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        </select>
        <label for="se17" class="mdl-selectfield__label">With floating label</label>
    </div>
    <div class="mdl-selectfield mdl-js-selectfield">
        <select id="se18" class="mdl-selectfield__select" aria-expanded="false">
        <option value=""></option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        </select>
        <label for="se18" class="mdl-selectfield__label">With placeholder label</label>
    </div>
    <div class="mdl-selectfield mdl-selectfield--floating-label mdl-js-selectfield">
        <select id="se19" class="mdl-selectfield__select" aria-expanded="false" disabled>
        <option value=""></option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        </select>
        <label for="se19" class="mdl-selectfield__label">Disabled with floating label</label>
    </div>
    <div class="mdl-selectfield mdl-js-selectfield">
        <select id="se20" class="mdl-selectfield__select" aria-expanded="false" disabled>
        <option value=""></option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        </select>
        <label for="se20" class="mdl-selectfield__label">Disabled with placeholder label</label>
    </div>
</form>

// Multiple Select
<form role="form" class="col-sm-12 form">
    <div class="mdl-selectfield mdl-selectfield--floating-label mdl-selectfield--multiple mdl-js-selectfield ">
      <select id="se21" class="mdl-selectfield__select" aria-expanded="false" multiple>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        <option value="D">Option D</option>
      </select>
      <label for="se21" class="mdl-selectfield__label">With floating label</label>
    </div>
    <div class="mdl-selectfield mdl-selectfield--floating-label mdl-selectfield--multiple mdl-js-selectfield ">
      <select id="se22" class="mdl-selectfield__select" aria-expanded="false" multiple disabled>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        <option value="D">Option D</option>
      </select>
      <label for="se22" class="mdl-selectfield__label">With floating label</label>
    </div>
</form>

//Selectize - Select
<form role="form" class="col-sm-12">
    <div class="selectize-field selectize-field--floating-label">
        <select id="selectize" class="selectize" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="selectize">Floating Label</label>
    </div>
    
    <div class="selectize-field">
        <select id="selectize" class="selectize">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="selectize">Placeholder Label</label>
    </div>
    
//Selectize Multpile Select
    <div class="selectize-field selectize-field--floating-label">
        <select id="selectize2" class="selectize-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="selectize2">Floating Label</label>
    </div>
    <div class="selectize-field">
    <select id="selectize2" class="selectize-multiple" aria-expanded="false" multiple>
      <option value="A">Option A</option>
      <option value="B">Option B</option>
      <option value="C">Option C</option>
      <option value="D">Option D</option>
      <option value="E">Option E</option>
      <option value="F">Option F</option>
      <option value="G">Option G</option>
      <option value="H">Option H</option>
      <option value="I">Option I</option>
    </select>
    <label for="selectize2">Placeholder Label</label>
    </div>
</form>      

//Select2 - Select
<form role="form" class="col-sm-12">
    <div class="select2-field select2-field--floating-label">
        <select id="select2" class="select2" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="select2">Floating Label</label>
    </div>
    <div class="select2-field">
        <select id="select2" class="select2" aria-expanded="false">
          <option value=""></option> 
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
        </select>
        <label for="select2">Placeholder Label</label>
    </div>

//Select2 - Multiple Select 
    <div class="select2-field select2-field--floating-label">
        <select id="select22" class="select2-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="select22">Floating Label</label>
    </div>
    <div class="select2-field">
        <select id="select22" class="select2-multiple" aria-expanded="false" multiple>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
          <option value="E">Option E</option>
          <option value="F">Option F</option>
          <option value="G">Option G</option>
          <option value="H">Option H</option>
          <option value="I">Option I</option>
        </select>
        <label for="select22">Placeholder Label</label>
    </div>
</form>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Radio buttons

#### Purpose
Users must choose between two or more mutually exclusive options.

#### Description
- Radio buttons come in a group of two or more mutually exclusive options
- A radio button is either checked or unchecked
- There can only be one radio button checked in a group
- Radio button labels should use sentence casing
- Use concise labels
- Provide an initially checked option when the field is not required and/or there is a sane default
- Align vertically when possible
- Align in shorter columns if there are many options
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Vertical

{::nomarkdown}
<div class="pl-preview">
    <div class="radio">
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        <span class="mdl-radio__label">Checked</span>
      </label>
    </div>
    <div class="radio">
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios2" value="option2">
        <span class="mdl-radio__label">Normal</span>
      </label>
    </div>
    <div class="radio">
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        <span class="mdl-radio__label">Disabled</span>
      </label>
    </div>
    <div class="radio">
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios4" value="option4">
        <span class="mdl-radio__label">Extended</span>
        <div class="text-muted">
          This option has some useful help text associated with it that elaborates on the state or purpose.
        </div>
      </label>
    </div>
</div>
{:/nomarkdown}

{% highlight html %}
<div class="radio">
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    <span class="mdl-radio__label">Checked</span>
  </label>
</div>
<div class="radio">
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios2" value="option2">
    <span class="mdl-radio__label">Normal</span>
  </label>
</div>
<div class="radio">
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
    <span class="mdl-radio__label">Disabled</span>
  </label>
</div>
<div class="radio">
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="optionsRadios" id="optionsRadios4" value="option4">
    <span class="mdl-radio__label">Extended</span>
    <div class="text-muted">
      This option has some useful help text associated with it that elaborates on the state or purpose.
    </div>
  </label>
</div>
{% endhighlight %}

#### Inline

{::nomarkdown}
<div class="pl-preview">
    <div class="radio-inline">
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
        <span class="mdl-radio__label">Checked</span>
      </label>
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <span class="mdl-radio__label">Normal</span>
      </label>
      <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
        <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
        <span class="mdl-radio__label">Disabled</span>
      </label>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="radio-inline">
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
    <span class="mdl-radio__label">Checked</span>
  </label>
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio2" value="option2">
    <span class="mdl-radio__label">Normal</span>
  </label>
  <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect">
    <input type="radio" class="mdl-radio__button" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
    <span class="mdl-radio__label">Disabled</span>
  </label>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Checkboxes

#### Purpose
Users need to specify which option(s) from a set are applicable/valid/true based on a label. 

#### Description
- A set of checkboxes are used when a user is able to select none, one, or multiple options
- A single checkbox is used when a user is able to select or not select an option
- When clicked, a checkbox's state toggles between unchecked and checked
- Checkboxes can have an indeterminate state that is set based on external interactions (e.g., indicating that some but not all items in a collection are selected)
- Checkbox labels should use sentence casing
- Use concise labels
- Align vertically when possible
- Align in shorter columns if there are many options
- The selected state of a checkbox should ideally indicate something 'positive' and may require the rephrasing of the label (e.g., `Send me weekly reminders`, vs. `Do not send me weekly reminders`)
- Ensure there is adequate spacing between adjacent fields and radio/checkbox groups

#### Vertical

{::nomarkdown}
<div class="pl-preview">
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>
    <span class="mdl-checkbox__label">Checked</span>
  </label>
</div>
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">
    <span class="mdl-checkbox__label">Normal</span>
  </label>
</div>
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" disabled>
    <span class="mdl-checkbox__label">Disabled</span>
  </label>
</div>
<div class="checkbox padding-bottom-2">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes4" value="option4">
    <span class="mdl-checkbox__label">Extended</span>
    <div class="text-muted">
      This option has some useful help text associated with it that elaborates on the state or purpose.
    </div>
  </label>
</div>

</div>
{:/nomarkdown}

{% highlight html %}
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes1" value="option1" checked>
    <span class="mdl-checkbox__label">Checked</span>
  </label>
</div>
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes2" value="option2">
    <span class="mdl-checkbox__label">Normal</span>
  </label>
</div>
<div class="checkbox">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes3" value="option3" disabled>
    <span class="mdl-checkbox__label">Disabled</span>
  </label>
</div>
<div class="checkbox padding-bottom-2">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" name="optionsCheckboxes" id="optionsCheckboxes4" value="option4">
    <span class="mdl-checkbox__label">Extended</span>
    <div class="text-muted">
      This option has some useful help text associated with it that elaborates on the state or purpose.
    </div>
  </label>
</div>
{% endhighlight %}

#### Inline

{::nomarkdown}
<div class="pl-preview">
    <div class="checkbox-inline">
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox1" value="option1" checked>
        <span class="mdl-checkbox__label">Checked</span>
      </label>
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox2" value="option2">
        <span class="mdl-checkbox__label">Normal</span>
      </label>
      <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
        <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox3" value="option3" disabled>
        <span class="mdl-checkbox__label">Disabled</span>
      </label>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="checkbox-inline">
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox1" value="option1" checked>
    <span class="mdl-checkbox__label">Checked</span>
  </label>
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox2" value="option2">
    <span class="mdl-checkbox__label">Normal</span>
  </label>
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
    <input type="checkbox" class="mdl-checkbox__input" id="inlineCheckbox3" value="option3" disabled>
    <span class="mdl-checkbox__label">Disabled</span>
  </label>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Toggle on/off switches

#### Purpose
Users need to toggle an option between on/off or yes/no. 

#### Description
Use a toggle switch for a binary option where the change occurs _immediately_. Use a checkbox instead if the user has to perform other actions for the change to be effective (e.g., pressing Save or Submit).


{::nomarkdown}
<div class="pl-preview">
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t1">
        <label for="t1" data-on="ON" data-off="OFF">Access</label>
      </div>
    </div>
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t2" checked>
        <label for="t2" data-on="ON" data-off="OFF">Access</label>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t4">
        <label for="t4" data-on="YES" data-off="NO">Send alerts</label>
      </div>
    </div>
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t5" checked>
        <label for="t5" data-on="YES" data-off="NO">Send alerts</label>
      </div>
    </div>
    <hr>
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t6" checked disabled>
        <label for="t6" data-on="ON" data-off="OFF">Disabled on</label>
      </div>
    </div>
    <div class="form-group">
      <div class="switch">
        <input type="checkbox" id="t7" disabled>
        <label for="t7" data-on="ON" data-off="OFF">Disabled off</label>
      </div>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t1">
    <label for="t1" data-on="ON" data-off="OFF">Access</label>
  </div>
</div>
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t2" checked>
    <label for="t2" data-on="ON" data-off="OFF">Access</label>
  </div>
</div>
<hr>
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t4">
    <label for="t4" data-on="YES" data-off="NO">Send alerts</label>
  </div>
</div>
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t5" checked>
    <label for="t5" data-on="YES" data-off="NO">Send alerts</label>
  </div>
</div>
<hr>
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t6" checked disabled>
    <label for="t6" data-on="ON" data-off="OFF">Disabled on</label>
  </div>
</div>
<div class="form-group">
  <div class="switch">
    <input type="checkbox" id="t7" disabled>
    <label for="t7" data-on="ON" data-off="OFF">Disabled off</label>
  </div>
</div>
{% endhighlight %}

</div>

<div class="pl-pattern">
### Toggle options switches

#### Purpose
Users need to toggle an option between multiple choice. 

#### Description
Use the toggle switches, instead of radio buttons, for two or more specific options.


{::nomarkdown}
<div class="pl-preview">
  <div class="row">
    <div class="col-sm-6">
      <fieldset class="margin-bottom-2">
        <legend class="sr-only">Select one out of three options</legend>
        <div class="switch-toggle">
          <input id="option1" name="selectOption" type="radio" checked>
          <label for="option1" onclick="">Option 1</label>
          <input id="option2" name="selectOption" type="radio">
          <label for="option2" onclick="">Option 2</label>
          <input id="option3" name="selectOption" type="radio">
          <label for="option3" onclick="">Option 3</label>
          <a class=""></a>
        </div>
      </fieldset>
      <fieldset >
        <legend class="sr-only">Select one out of four options</legend>
        <div class="switch-toggle">
          <input id="option1-1" name="selectOption1" type="radio" checked>
          <label for="option1-1" onclick="">Option 1</label>
          <input id="option1-2" name="selectOption1" type="radio">
          <label for="option1-2" onclick="">Option 2</label>
          <input id="option1-3" name="selectOption1" type="radio">
          <label for="option1-3" onclick="">Option 3</label>
          <input id="option1-4" name="selectOption1" type="radio">
          <label for="option1-4" onclick="">Option 4</label>
          <a class=""></a>
        </div>
      </fieldset>
    </div>
  </div>
</div>
{:/nomarkdown}


{% highlight html %}
<fieldset >
  <legend class="sr-only">Select one out of three options</legend>
  <div class="switch-toggle">
    <input id="option1" name="selectOption" type="radio" checked>
    <label for="option1" onclick="">Option 1</label>
    <input id="option2" name="selectOption" type="radio">
    <label for="option2" onclick="">Option 2</label>
    <input id="option3" name="selectOption" type="radio">
    <label for="option3" onclick="">Option 3</label>
    <a class=""></a>
  </div>
</fieldset>
<fieldset >
  <legend class="sr-only">Select one out of four options</legend>
  <div class="switch-toggle">
    <input id="option1-1" name="selectOption1" type="radio" checked>
    <label for="option1-1" onclick="">Option 1</label>
    <input id="option1-2" name="selectOption1" type="radio">
    <label for="option1-2" onclick="">Option 2</label>
    <input id="option1-3" name="selectOption1" type="radio">
    <label for="option1-3" onclick="">Option 3</label>
    <input id="option1-4" name="selectOption1" type="radio">
    <label for="option1-4" onclick="">Option 4</label>
    <a class=""></a>
  </div>
</fieldset>
{% endhighlight %}

</div>


<div class="pl-pattern">
### Date picker

Depending on the JS library used for the date picker, functionality may vary.

Date pickers can provide:

- Navigating years and months via previous/next arrows and/or other dropdowns
- Multi-calendar views
- Range highlighting
- Min and max allowable dates
- Highlighting/disabling of days/rows/columns (e.g., disable weekends or highlight bi-week)
- Ability to type date as well as use a calendar dropdown

<span class="text-muted">Example uses jQuery UI for demo purposes.</span>

{::nomarkdown}
<div class="pl-preview">
    <h4>With Floating Label</h4>
    <div class="container-fluid" style="max-width: 400px; margin: 0;">
      <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="dp1" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;Date</label>
            <input id="dp1" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <label for="dp2" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;To</label>
                <input id="dp2" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <label for="dp3" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;From</label>
                <input id="dp3" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <h4>With Placeholder Label</h4>
    <div class="container-fluid" style="max-width: 400px; margin: 0;">
      <div class="row">
        <form role="form" class="col-sm-12 form-horizontal">
          <div class="mdl-textfield mdl-js-textfield">
            <label for="dp4" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;Date</label>
            <input id="dp4" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="mdl-textfield mdl-js-textfield">
                <label for="dp5" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;To</label>
                <input id="dp5" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="mdl-textfield mdl-js-textfield">
                <label for="dp6" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;From</label>
                <input id="dp6" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>
{:/nomarkdown}


{% highlight html %}
<h4>With Floating Label</h4>
<div class="container-fluid" style="max-width: 400px; margin: 0;">
  <div class="row">
    <form role="form" class="col-sm-12 form-horizontal">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <label for="dp1" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;Date</label>
        <input id="dp1" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="dp2" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;To</label>
            <input id="dp2" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="dp3" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;From</label>
            <input id="dp3" data-inputmask=" 'alias' : 'mdl-mask-datepicker' " type="text" class="datepicker mdl-textfield__input">
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
<h4>With Placeholder Label</h4>
<div class="container-fluid" style="max-width: 400px; margin: 0;">
  <div class="row">
    <form role="form" class="col-sm-12 form-horizontal">
      <div class="mdl-textfield mdl-js-textfield">
        <label for="dp4" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;Date</label>
        <input id="dp4" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="mdl-textfield mdl-js-textfield">
            <label for="dp5" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;To</label>
            <input id="dp5" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
          </div>
        </div>
        <div class="col-sm-6">
          <div class="mdl-textfield mdl-js-textfield">
            <label for="dp6" class="mdl-textfield__label"><span class="fa fa-calendar-o fa-fw"></span>&nbsp;From</label>
            <input id="dp6" data-inputmask=" 'alias' : 'mdl-mask-datepicker-placeholder' " type="text" class="datepicker mdl-textfield__input">
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
{% endhighlight %}
</div>
