const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function(){
  $('#massage').fadePut('slow')
},3000);