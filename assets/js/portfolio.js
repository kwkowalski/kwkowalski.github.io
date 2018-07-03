$('.navbar-toggler').click(hamburgerToggle);

function hamburgerToggle(){
	$('.navbar-collapse').toggleClass('show');
	$('.dropdown-menu').toggleClass('hidden');
}

$('#colorGame').hover(function(){
	$(this).addClass("back-face");
	}, function(){
	$(this).removeClass("back-face");
});