$(document).ready(function(){
  var methodDelivery1 = document.querySelector(".delivery-1"),
      methodDelivery2 = document.querySelector(".delivery-2"),
      methodDelivery3 = document.querySelector(".delivery-3");

  methodDelivery1.addEventListener("click", function () {
    methodDelivery1.classList.toggle("active");
    methodDelivery2.classList.toggle("disabled");
    methodDelivery3.classList.toggle("disabled");
  })

  methodDelivery2.addEventListener("click", function () {
    methodDelivery1.classList.toggle("disabled");
    methodDelivery2.classList.toggle("active");
    methodDelivery3.classList.toggle("disabled");
  })

  methodDelivery3.addEventListener("click", function () {
    methodDelivery1.classList.toggle("disabled");
    methodDelivery2.classList.toggle("disabled");
    methodDelivery3.classList.toggle("active");
  })
});
