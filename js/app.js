document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  var $listForm = document.querySelector('.list-maker-form');

  var $homepageSubmit = $('#homepageSubmit');
  
  // $homepageSubmit.click(storeInfo(event));


  var name = window.location.search.split('=')[1];

  function storeInfo() {
    return name;
  }


  var image = window.location.search.split('=')[1].match(/[a-zA-Z]+/)[0];

  function storeImageInfo() {
    return image;
  }



  $('#checkoutFirstName').attr('value', storeInfo());  


  submitForms = function(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
  }


  function whatSize() {
    if (storeImageInfo() === 'small') {
      $('#size select [value=small]').attr('selected', 'selected');
    } else if (storeImageInfo() === 'medium') {
      $('#size select [value=medium]').attr('selected', 'selected');
    } else {
      $('#size select [value=large]').attr('selected', 'selected');
    }
  }

  whatSize();

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



