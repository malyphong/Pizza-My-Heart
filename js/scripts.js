// Business Logic
function Purchaser(name, address) {
  this.name = name;
  this.address = address;
}

function Order(size, protein, toppings) {
this.size = size;
this.protein = protein;
this.toppping = toppings;
}




// User Interface Logic
$(document).ready(function() {
  $(".inputInformation").submit(function(event) {
    event.preventDefault();
    $(".inputInformation").hide();
    $(".form-group").show();

  });
  $(".form-group").submit(function(event) {
    event.preventDefault();
    $(".form-group").hide();
    $(".completedOrder").show();


  });
});
