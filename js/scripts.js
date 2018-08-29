// Business Logic
function Order(size, protein, toppings, price) {
  this.size = size;
  this.protein = protein;
  this.toppings = toppings;
  this.price = 3;
}

Order.prototype.sizePrice = function() {
  if (this.size === "small") {
    return this.price += 5;
  } else if (this.size === "medium") {
    return this.price += 10;
  } else if (this.size === "large") {
    return this.price += 13;
  }
}

Order.prototype.orderList = function() {
  return "Selection of protein is " + this.protein + " and toppings selection is/are " + this.toppings;
}


// User Interface Logic
$(document).ready(function() {
  $(".inputInformation").submit(function(event) {
    event.preventDefault();
    $(".inputInformation").hide();
    $(".form-group").show();

    var name = $("input#name").val();
    var address = $("input#address").val();
    console.log(name);

    $("#purchaserName").text(name);
    $("#purchaserAddress").text(address);

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
      var newOrder = new Order(size, protein, toppings);

      var pizzaOrdered = newOrder.sizePrice();
      console.log(pizzaOrdered);

      var toppingsList = newOrder.orderList();

      $("#sizingprice").text(pizzaOrdered);
      $("p#ingredients").text(toppingsList);


    })
  });
});
