var $listForm = document.querySelector('.list-maker-form');

<<<<<<< HEAD
// use strict - consider implementing this later when code is done




document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');

  var $homepageSubmit = $('#homepageSubmit');

  // $homepageSubmit.click(storeInfo(event));

  //this option works for text only
  var name = window.location.search.split('=')[1];

  function storeInfo() {
    return name;
  }

  //this option works for the image click
  var first = large = window.location.search.split('=')[1].split('+')[0]
  "large";
  var second = large = window.location.search.split('=')[1].split('+')[1].split('&')[0];

  var image = first + " " + second;
=======
// store image selection via get
var image = window.location.search.split('=')[1].match(/[a-zA-Z]+/)[0];
function storeImageInfo() {
  return image;
}
>>>>>>> 87e6eb5506d6f637c18da84f66338745c4cfeaa5

function whatSize() {
  if (storeImageInfo() === 'small') {
    $('#size select [value=small]').attr('selected', 'selected');
  } else if (storeImageInfo() === 'medium') {
    $('#size select [value=medium]').attr('selected', 'selected');
  } else {
    $('#size select [value=large]').attr('selected', 'selected');
  }
<<<<<<< HEAD

  $('#formPizzaSize').val('Medium');

  $('#checkoutFirstName').attr('value', storeInfo());


function sumbitForms() {
    $('form').eq(0).submit();
    $('form').eq(1).submit();
=======
>>>>>>> 87e6eb5506d6f637c18da84f66338745c4cfeaa5
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  whatSize();
})

console.log('this is before the dom loaded');
