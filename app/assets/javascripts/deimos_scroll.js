function Deimos_Scroll() {
	this.animate_speed = 800;
	this.elemNames = ["Intro1", "Intro2", "Device", "App", "Video"];
	this.elemOffsets = [0, 1000, 2000, 3000, 4000];

}

Deimos_Scroll.prototype.scrollTo = function(position) {
	// $("#scroll-arrows").removeClass("last");
	return $("html, body").animate({scrollTop: position}, this.animate_speed);
}

Deimos_Scroll.prototype.scrollTo_Element = function(elementName) {
	return this.scrollTo(elemOffsets[$.inArray(elementName, elemNames)]);
}

Deimos_Scroll.prototype.setOnScrollListener = function() {
	var previous_scroll = $(window).scrollTop();

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop(),
			scroll_change = scroll - previous_scroll;
		previous_scroll = scroll;
		$(window).trigger('custom_scroll', [scroll_change]);
	});

	$(window).on('custom_scroll', function pos(e, scroll_change) {
		console.log(scroll_change);
	});
}
