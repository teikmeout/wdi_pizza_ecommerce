// move global variables and functions outside the 'domcontentloaded' event listener

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

  function storeImageInfo() {
    return image;
  }

  $('#formPizzaSize').val('Medium');

  $('#checkoutFirstName').attr('value', storeInfo());


function sumbitForms() {
    $('form').eq(0).submit();
    $('form').eq(1).submit();
}




});


console.log('this is before the dom loaded');













  // var $serial = $('form').serialize();
  // console.log($serial);


// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }



