$(document).ready(function () {
  var mixer = mixitup('.item-list');

  let navigation = document.querySelector('.navigation');
  let mobile_nav = document.querySelector('.mobile_nav');
  let toggle = document.querySelector('.toggle');
  
  toggle.onclick = function(){
    mobile_nav.classList.toggle('active')
    navigation.classList.toggle('active')
  }
});