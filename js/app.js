var $listForm = document.querySelector('.list-maker-form');

// store image selection via get
var image = window.location.search.split('=')[1].match(/[a-zA-Z]+/)[0];
function storeImageInfo() {
  return image;
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

document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');
  whatSize();
})

console.log('this is before the dom loaded');
