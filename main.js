/*---------------------------------------*\
	ScrollMagic scroll interactions library
\*---------------------------------------*/

var controller = new ScrollMagic.Controller();

// anchor link scrolling
controller.scrollTo(function (pos) {
	TweenMax.to(window, 1, {scrollTo: { y: pos }, ease: Power2.easeOut});
});

$(document).on("click", "a[href^='#']", function (e) {
	var id = $(this).attr("href");

	if ($(id).length > 0) {
		e.preventDefault();
		controller.scrollTo(id);
	}
});



/*-------------------------------------*\
	ScrollReveal scroll animations plugin
\*-------------------------------------*/

window.sr = ScrollReveal();
sr.reveal("[data-scroll-reveal]", {
	distance: "20vh",
	opacity: 1,
	scale: 1,
	easing: "ease-out",
	reset: true,
	viewOffset: { top: -1000, right: 0, bottom: 0, left: 0 },
});

