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
