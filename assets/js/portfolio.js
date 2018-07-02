$('.dropdown-toggle').click(changeClass);

function changeClass(){
	$('.dropdown-menu').toggleClass('dropdown-menu-show');
}


$('.navbar-toggler').click(hamburgerToggle);

function hamburgerToggle(){
	$('.navbar-collapse').toggleClass('show');
	$('.dropdown-menu').toggleClass('hidden');
}