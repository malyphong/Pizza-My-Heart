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

    var name = $("input.name");
    var address = $("input.address");
    var newPurchaser = new Purchaser(name, address);

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
      var newOrder = new Order(size, protein, toppings);

      console.log(newOrder);
})
  });
});
