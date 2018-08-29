// Business Logic
function Purchaser(name, address) {
  this.name = name;
  this.address = address;

}
function Order(size, protein, toppings, price) {
  this.size = size;
  this.protein = protein;
  this.toppings = toppings;
  this.price = price;
}

Order.prototype.sizePrice = function(size) {
  var pizzaPrice = 3;
  if (this.size === "small") {
    this.price = pizzaPrice += 5;
  } else if (this.size === "medium") {
    this.price = pizzaPrice += 10;
  } else if (this.size === "large") {
    this.price = pizzaPrice += 13;
  }
  return this.price;
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

    var size = $("input[name=size]:checked").val();
    var protein = $("input[name=protein]:checked").val();
    var toppings = [];
    $("input[name=toppings]:checked").map(function() {
      toppings.push($(this).val());
      var newOrder = new Order (size, protein, toppings);
      console.log(newOrder);

    })
  });
});
