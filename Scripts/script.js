

$(document).ready(function(){




$('.carousel').carousel({
    pause: "false"
});
$('.search').click(function(){
	$('.searchIcon').toggleClass('show');
})


$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

}); 



