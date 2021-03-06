function Deimos_Scroll() {
	this.animate_speed = 1000;
	this.elemNames = ["Intro1", "Intro2", "Device", "App", "Support", "Preorder"];
	this.elemOffsets = [0, 2000, 4000, 6000, 8000, 10000];
	this.isScrolling = false;
}

Deimos_Scroll.prototype.scrollTo = function(position) {
	// $("#scroll-arrows").removeClass("last");
	return $("html, body").animate({scrollTop: position}, this.animate_speed);
}

Deimos_Scroll.prototype.scrollTo_Element = function(elementName) {
	
	console.log($.inArray(elementName, this.elemNames));
	console.log(this.elemOffsets[$.inArray(elementName,this.elemNames)]);
	return this.scrollTo(this.elemOffsets[$.inArray(elementName, this.elemNames)]);
}

Deimos_Scroll.prototype.setOnScrollListener = function() {
	this.previous_scroll = $(window).scrollTop();
	var obj = this;
		
	$(window).on('scroll', function() {
		if (obj.isScrolling == false) {
			obj.scroll = $(window).scrollTop();
			obj.scroll_change = obj.scroll - obj.previous_scroll;
			obj.previous_scroll = obj.scroll;
			$(window).trigger('custom_scroll', [obj.scroll_change]);
		}
	});

	$(window).on('custom_scroll', function pos(e, scroll_change) {
		console.log(obj.scroll_change);
	});
	
	$(window).scroll(function() {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			obj.getScrollDest();
			console.log("Haven't scrolled in 100ms!");
		}, 100));
	});
}

Deimos_Scroll.prototype.getScrollDest = function() {

	console.log(this.previous_scroll);

	if (this.previous_scroll < 2000) {
		if (this.scroll_change > 0) {
			this.scrollTo(2000);
		} else {
			this.scrollTo(0);
		}
	} else if (this.previous_scroll < 4000 && this.previous_scroll > 2000) {
		if (this.scroll_change > 0) {
			this.scrollTo(4000);
		} else {
			this.scrollTo(2000);
		}

	} else if (this.previous_scroll < 6000 && this.previous_scroll > 4000) {
		if (this.scroll_change > 0) {
			this.scrollTo(6000);
		} else {
			this.scrollTo(4000);
		}
	} else if (this.previous_scroll < 8000 && this.previous_scroll > 6000) {
		if (this.scroll_change > 0) {
			this.scrollTo(8000);
		} else {
			this.scrollTo(6000);
		}
	} else if (this.previous_scroll < 10000 && this.previous_scroll > 8000) {
		if (this.scroll_change > 0) {
			this.scrollTo(10000)
		} else {
			this.scrollTo(8000);
		}
	} 
}

