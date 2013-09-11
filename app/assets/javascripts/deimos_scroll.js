function Deimos_Scroll() {
	this.animate_speed = 800;
	this.elemNames = ["Intro1", "Intro2", "Device", "App", "Video"];
	this.elemOffsets = ["0", "1000", "2000", "3000", "4000"];

}

Deimos_Scroll.prototype.scrollTo = function(position) {
	// $("#scroll-arrows").removeClass("last");
	return $("html, body").animate({scrollTop: position}, this.animate_speed);
}

Deimos_Scroll.prototype.scrollTo_Element = function(elementName) {
	return this.scrollTo(elemOffsets[$.inArray(elementName, elemNames)]);
}