// Business Logic
function Purchaser(name, address) {
  this.name = name;
  this.address = address;

}
function Order(size, protein, toppings) {
  this.size = size;
  this.protein = protein;
  this.toppings = toppings;
}

Order.prototype.Sizes = function() {
  if (this.size === "small") {
    this.pizza = 5
  } else if (this.size === "medium") {
    this.pizza = 10
  } else if (this.size === "large") {
    this.pizza = 13
  }
}

// User Interface Logic
$(document).ready(function() {
  $(".inputInformation").submit(function(event) {
    event.preventDefault();
    $(".inputInformation").hide();
    $(".form-group").show();
    var name = $("input.name");
    var address = $("input.address");
  });
  $(".form-group").submit(function(event) {
    event.preventDefault();
    $(".form-group").hide();
    $(".completedOrder").show();

    var size = $("input[name=size]").val();
    var protein = $("input[name=protein]").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").map(function() {
      toppings.push($(this).val());
      console.log(size, protein, toppings);
    })
  });
});
