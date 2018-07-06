$('.navbar-toggler').click(hamburgerToggle);

function hamburgerToggle(){
	$('.navbar-collapse').toggleClass('show');
	$('.dropdown-menu').toggleClass('hidden');
}

$('.nav-item').click(activeLink);

function activeLink(){
	$('.nav-item').removeClass('active');
	$(this).addClass('active');
}