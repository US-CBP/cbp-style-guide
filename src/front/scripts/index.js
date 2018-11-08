/* global $ */
'use strict';

$(document).ready(function () {
  window.cbpThemeInputMask.setupInputMasks();
  window.cbpTheme.applyDatePicker();
  window.cbpTheme.applyCharLimit();
  window.cbpTheme.applyTags();
  window.cbpTheme.applyThirdPartySelect();

  $('.dropdown-toggle').dropdown();

  // enable tooltips
  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    delay: {show: 200, hide: 0}
  });

  // enable popover
  $('[data-toggle="popover"]').popover();

  // enable masks
  $('[data-inputmask]').inputmask();

  // TOC
  $('.toc a').on('click', function () {
    $('.toc a.active').removeClass('active');
    $(this).addClass('active');
  });

  // progress bar
  $('#exampleProgressBar').each(function () {
    var barEl = $(this);
    var valueEl = $('#exampleProgressBarValue');
    var progress = parseInt(this.style.width, 10);
    setInterval(function () {
      barEl.css('width', ((progress += 19) % 100) + '%');
      valueEl.text(progress % 100 + '%');
    }, 1000);
  });

  // Init datepicker
  // enable datepickers (NOTE the 'not' method to avoid double init of range examples!)
  $('.datepicker').not('#startRange').not('#endRange').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onClose: function () {
      // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty();
      }
    }
  });

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

  //brand card interaction
  $('.btn-circle').on('click', function() {
    if ($(this).parents('.mdl-card').hasClass('brand-card-expand')) {
      $(this).parents('.mdl-card').removeClass('brand-card-expand');
    } else {
      $('.mdl-card').removeClass('brand-card-expand');
      $(this).parents('.mdl-card').addClass('brand-card-expand');
    }
  });

   // specific to our date range example
  $('#startRange.datepicker').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onSelect: function (dateStr) {
      $('#endRange.datepicker').datepicker('option', 'minDate', dateStr);
    },
    onClose: function () {
      // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty();
      }
    }
  });

  $('#endRange.datepicker').datepicker({
    autoSize: true,
    showButtonPanel: true,
    numberOfMonths: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    onSelect: function (dateStr) {
      $('#startRange.datepicker').datepicker('option', 'maxDate', dateStr);
    },
    onClose: function () {
      // needed for mdl textfield floading labels!
      if ($(this).parent().get(0).MaterialTextfield) {
        $(this).parent().get(0).MaterialTextfield.checkDirty();
      }
    }
  });

  // make modal draggable!
  $('.modal-dialog').each(function () {
    $(this).draggable({
      handle: '.modal-header'
    });
  });

  // init select components
  $('.select2').select2({ allowEmptyOption: true });
  $('.select2-multiple').select2({ allowEmptyOption: true });
  $('.selectize').selectize({ allowClear: true });
  $('.selectize-multiple').selectize({ allowClear: true });

  // Security Footers
  var hulkIt = function (className) {
    $('footer.cbp-banner').removeClass().addClass('cbp-banner ' + className);
  };

  $('#unofficial').on('click', function () {
    hulkIt('');
  });
  $('#confidential').on('click', function () {
    hulkIt('confidential');
  });
  $('#lawSensitive').on('click', function () {
    hulkIt('law-enforcement');
  });
  $('#secret').on('click', function () {
    hulkIt('secret');
  });
  $('#topSecret').on('click', function () {
    hulkIt('top-secret');
  });
});
