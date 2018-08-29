// Business Logic
function Order(size, protein, toppings, price) {
  this.size = size;
  this.protein = protein;
  this.toppings = toppings;
  this.price = 3;
}

Order.prototype.sizePrice = function(size) {
  if (this.size === "small" && this.toppings >= 2) {
    this.price += 5;
  } else if (this.size === "medium") {
    this.price += 10;
  } else if (this.size === "large") {
    this.price += 13;
  } else {
  return this.price;
  }
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
    var price = 3;
    var toppings = [];
    $("input[name=toppings]:checked").map(function() {
      toppings.push($(this).val());
      var newOrder = new Order(size, protein, toppings, price);
      console.log(newOrder);

      $(".finishOrder").append(newOrder)


    })
  });
});
