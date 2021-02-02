// declare variable

var btnDropMenu = $("#button--drop-menu"),
	menuToggle = $("#menu-toggle"),
	content = $("#content"),
	backgroundGray = $(".background--gray").first(),
	intention = $(".intention").first(),
	actionList = $(".list-action");

// declare constant

const C_SHOW_BACK_GROUND = "show-background--gray";
const RETURN_RIGHT = "return-right";
// const OFFSET_RIGHT = "offset-2 content--transform";
const OFFSET_RIGHT = "offset-2 content--transform";
const TRANSFROM_INTENTION = "intention--transform";



$(function () {
	btnDropMenu.click(function(event) {
		displayMenu();
	});

	backgroundGray.click(function(event) {
		notDisplayMeny();
	});

	actionList.click(function(event) {
	});
})

function actionChangeColor(argument) {
	$("#menu-toggle>ul>li").removeClass('active').filter(argument).toggleClass('active');
	notDisplayMeny();
}

const displayMenu  = () =>  {
	backgroundGray.addClass(C_SHOW_BACK_GROUND);
	menuToggle.addClass(RETURN_RIGHT);
	content.addClass(OFFSET_RIGHT);
	intention.addClass(TRANSFROM_INTENTION);
	btnDropMenu.addClass('d-none');
}

const notDisplayMeny = () => {
	backgroundGray.removeClass(C_SHOW_BACK_GROUND);
	menuToggle.removeClass(RETURN_RIGHT);
	content.removeClass(OFFSET_RIGHT);
	intention.removeClass(TRANSFROM_INTENTION);
	btnDropMenu.removeClass('d-none');
}
