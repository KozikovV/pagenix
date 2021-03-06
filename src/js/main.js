
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "card-active");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "card-active");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("selection-btn");
var btns = btnContainer.getElementsByClassName("selection-btn__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selection-btn__item--active");
    current[0].className = current[0].className.replace(" selection-btn__item--active", "");
    this.className += " selection-btn__item--active";
  });
}


$(function(){
  $('.dropdown__btn').on('click',function(){
      $('.dropdown__btn').toggleClass('dropdown__btn--active');
      $('.dropdown__menu').toggleClass('dropdown__menu--open');	
});
  $('.dropdown__categories .oval-label').on('click',function(this){
    $('.dropdown__categories .oval-label').toggleClass('oval-label--reverse');	
  });
});