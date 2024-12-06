$(document).ready(function () {
  
    var modal = $("#myModal");

   
    var btn = $(".svg-button");
    var span = $(".close");

    // Open modal on button click
    btn.on("click", function () {
        modal.show();
    });

    
    span.on("click", function () {
        modal.hide();
    });

    
    $(window).on("click", function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});