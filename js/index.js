// declare variable

var btnDropMenu = $("#button--drop-menu"),
	menuToggle = $("#menu-toggle"),
	content = $("#content"),
	backgroundGray = $(".background--gray").first(),
	intention = $(".intention").first();

// declare constant

const C_SHOW_BACK_GROUND = "show-background--gray";
const RETURN_RIGHT = "return-right";
const OFFSET_RIGHT = "offset-2 content--transform";
const TRANSFROM_INTENTION = "intention--transform";



$(function () {
	btnDropMenu.click(function(event) {
		backgroundGray.addClass(C_SHOW_BACK_GROUND);
		menuToggle.addClass(RETURN_RIGHT);
		content.addClass(OFFSET_RIGHT);
		intention.addClass(TRANSFROM_INTENTION);
	});

	backgroundGray.click(function(event) {
		backgroundGray.removeClass(C_SHOW_BACK_GROUND);
		menuToggle.removeClass(RETURN_RIGHT);
		content.removeClass(OFFSET_RIGHT);
		intention.removeClass(TRANSFROM_INTENTION);
		
	});
})