// move global variables and functions outside the 'domcontentloaded' event listener

// use strict - consider implementing this later when code is done




document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');

  var $homepageSubmit = $('#homepageSubmit');

  // $homepageSubmit.click(storeInfo(event));


  var name = window.location.search.split('=')[1];

  function storeInfo() {
    return name;
  }


  var first = large = window.location.search.split('=')[1].split('+')[0]
  "large";
  var second = large = window.location.search.split('=')[1].split('+')[1].split('&')[0];

  var image = first + " " + second;

  function storeImageInfo() {
    return image;
  }

  $('#formPizzaSize').attr('value', storeImageInfo());

  $('#checkoutFirstName').attr('value', storeInfo());


//   submitForms = function(){
//     document.getElementById("form1").submit();
//     document.getElementById("form2").submit();
// }




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



