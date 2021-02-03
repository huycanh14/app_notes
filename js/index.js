// Import module
import getList from "./get-list.js" // cach 1

import { addNote } from "./add-note.js" // cach 2

// declare variable

var btnDropMenu = $("#button--drop-menu"),
	menuToggle = $("#menu-toggle"),
	content = $("#content"),
	backgroundGray = $(".background--gray").first(),
	intention = $(".intention").first(),
	actionList = $(".list-action"),
	listAction = $("#menu-toggle>ul>li");

// declare constant

const C_SHOW_BACK_GROUND = "show-background--gray";
const RETURN_RIGHT = "return-right";
// const OFFSET_RIGHT = "offset-2 content--transform";
const OFFSET_RIGHT = "offset-2 content--transform";
const TRANSFROM_INTENTION = "intention--transform";



$(function () {
	getList();
	addNote();
	btnDropMenu.click(function(event) {
		displayMenu();
	});

	backgroundGray.click(function(event) {
		notDisplayMeny();
	});

	listAction.on('click', function(event) {
		let action = $(this).data('action');
		switch(action) {
			case "get-list":
			break;
			case "add-note":
			break;
		}
	});
	listAction.click(function(e) {
		console.log(222)
	})
})

window.actionChangeColor = (argument) => {
	listAction.removeClass('active').filter(argument).toggleClass('active');
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
