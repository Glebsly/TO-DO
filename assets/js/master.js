$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click and delete
$("ul").on("click", "span", function(event) {
  // <li> will fade out, while deleting in half sec
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  //stop alert popping.
  event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event) {
  //act only on enter
  if (event.which === 13) {
    //get the value from input
    var todoText = $(this).val();
    //make new <li>
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    //clear text input
    $(this).val("");
  }
})

// add new todo toggler
$("#add").click(function() {
  $("input[type = 'text']").fadeToggle();
})