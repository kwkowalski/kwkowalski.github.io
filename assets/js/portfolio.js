$('.navbar-toggler').click(hamburgerToggle);

function hamburgerToggle(){
	$('.navbar-collapse').toggleClass('show');
	$('.dropdown-menu').toggleClass('hidden');
}