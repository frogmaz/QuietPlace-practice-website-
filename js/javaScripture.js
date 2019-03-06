// toggle dropDown menu
var nav = document.querySelector("#navBar ul");
var toggle = document.querySelector("#navToggle");
var hamburger = document.querySelector("#navToggle #hamburger");

function toggleClass(el){
  console.log("opalio");
  if(el.className == 'on'){
    el.className = 'off';
  }else{
    el.className = 'on';
  }
}

toggle.addEventListener('click', function(){toggleClass(nav); toggleClass(hamburger)});
