$(document).ready(function () {
	
	$("a.page-scroll").on("click", function (event) {
		event.preventDefault();
		var $ancla = $(this)
		$("html, body").animate({
			scrollTop: ($($ancla.attr("href")).offset().top)
		}, 1300, "easeInOutExpo");

	});

	 $('body').scrollspy({
        target: '.navbar-fixed-top'
    });


	 $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })



});