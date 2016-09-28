
document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');

  var $homepageSubmit = $('#homepageSubmit');
  
  // $homepageSubmit.click(storeInfo(event));


  var name = window.location.search.split('=')[1];
  

  function storeInfo() {
    return name;
  }

  storeInfo();

  $('#checkoutFirstName').attr('value', storeInfo());
  
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



