//Listen for when the user clicks on the hamburger icon. 


$('.hamburger').on('click', function(){
	    
//If menu is closed slide down, if menu is open slide up.
	// $('.menu').slideToggle();
    if($('.menu').hasClass('open'))
    {
	$('.menu').removeClass('open');
    }
    else {
    	$('.menu').addClass('open');
/* $('.menu').toggleClass('open')   */
}});