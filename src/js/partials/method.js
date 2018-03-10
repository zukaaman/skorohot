$(document).ready(function(){
  var methodDelivery1 = document.querySelector(".delivery-1"),
      methodDelivery2 = document.querySelector(".delivery-2"),
      methodDelivery3 = document.querySelector(".delivery-3");

  methodDelivery1.addEventListener("click", function () {
    methodDelivery1.classList.add("active");
    methodDelivery2.classList.add("disabled");
    methodDelivery3.classList.add("disabled");
    $(".delivery-2-input").prop("disabled", true);
    $(".delivery-3-input").prop("disabled", true);

    if (methodDelivery1.classList.contains("disabled")) {
      methodDelivery1.classList.remove("disabled");
      methodDelivery2.classList.remove("active");
      methodDelivery3.classList.remove("active");
      $(".delivery-1-input").prop("disabled", false);
    }
  })

  methodDelivery2.addEventListener("click", function () {
    methodDelivery1.classList.add("disabled");
    methodDelivery2.classList.add("active");
    methodDelivery3.classList.add("disabled");
    $(".delivery-1-input").prop("disabled", true);
    $(".delivery-3-input").prop("disabled", true);

    if (methodDelivery2.classList.contains("disabled")) {
      methodDelivery1.classList.remove("active");
      methodDelivery2.classList.remove("disabled");
      methodDelivery3.classList.remove("active");
      $(".delivery-2-input").prop("disabled", false);
    }
  })

  methodDelivery3.addEventListener("click", function () {
    methodDelivery1.classList.add("disabled");
    methodDelivery2.classList.add("disabled");
    methodDelivery3.classList.add("active");
    $(".delivery-2-input").prop("disabled", true);
    $(".delivery-3-input").prop("disabled", true);

    if (methodDelivery2.classList.contains("disabled")) {
      methodDelivery1.classList.remove("active");
      methodDelivery2.classList.remove("active");
      methodDelivery3.classList.remove("disabled");
      $(".delivery-3-input").prop("disabled", false);
    }
  })
});
