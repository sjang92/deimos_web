function Deimos_Scroll() {
	this.animate_speed = 800;
	this.elemNames = ["Intro1", "Intro2", "Device", "App", "Video"];
	this.elemOffsets = [0, 1000, 2000, 3000, 4000];
	this.isScrolling = false;
}

Deimos_Scroll.prototype.scrollTo = function(position) {
	// $("#scroll-arrows").removeClass("last");
	return $("html, body").animate({scrollTop: position}, this.animate_speed);
}

Deimos_Scroll.prototype.scrollTo_Element = function(elementName) {
	return this.scrollTo(elemOffsets[$.inArray(elementName, this.elemNames)]);
}

Deimos_Scroll.prototype.setOnScrollListener = function() {
	this.previous_scroll = $(window).scrollTop();
	var obj = this;
	
	
	$(window).on('scroll', function() {
		if (obj.isScrolling == false) {
			obj.scroll = $(window).scrollTop(),
				scroll_change = obj.scroll - this.previous_scroll;
			this.previous_scroll = obj.scroll;
			$(window).trigger('custom_scroll', [scroll_change]);
		}
	});

	$(window).on('custom_scroll', function pos(e, scroll_change) {
		console.log(scroll_change);
		if (scroll_change ) 
		//obj.getScrollDest(scroll_change);
	});
	
	$(window).scroll($.debounce( 250, function(){
		console.log("Done Scrolling!");
	}));
}

Deimos_Scroll.prototype.getScrollDest = function(scroll_change) {
	if (this.previous_scroll <= 1000) {
		if (scroll_change > 0) {
			this.scrollTo(1000);
		} else {
			this.scrollTo(0);
		}
	} else if (this.previous_scroll <= 2000 && this.previous_scroll >= 1000) {
		if (scroll_change > 0) {
			this.scrollTo(2000);
		} else {
			this.scrollTo(1000);
		}

	} else if (this.previous_scroll <= 3000 && this.previous_scroll >= 2000) {
		if (scroll_change > 0) {
			this.scrollTo(3000);
		} else {
			this.scrollTo(2000);
		}
	}
	this.isScrolling = true;
}

/* THIS APPROACH WON"T WORK
	CHANGE IT SO THAT AFTER YOU FINISH SCROLLING, GET curr offset and compare, calling scrollTo*/
