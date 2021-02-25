// Import module
import getList from "./get-list.js" // cach 1
import { removeNote } from "./get-list.js" // cach 1

import { addNote } from "./add-note.js" // cach 2

// declare variable

var btnDropMenu = $("#button--drop-menu"),
	menuToggle = $("#menu-toggle"),
	content = $("#content"),
	backgroundGray = $(".background--gray").first(),
	intention = $(".intention").first(),
	actionList = $(".list-action"),
	listAction = $("#menu-toggle>ul>li"),
	htmlListNotes = $("#list-notes>.row"),
	listNotes = [];

// declare constant

const C_SHOW_BACK_GROUND = "show-background--gray";
const RETURN_RIGHT = "return-right";
// const OFFSET_RIGHT = "offset-2 content--transform";
const OFFSET_RIGHT = "offset-2 content--transform";
const TRANSFROM_INTENTION = "intention--transform";



$(function () {
	displayListNotes();
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
				getList();
				displayListNotes();
			break;
			case "add-note":
			break;
		}
	});
})

$( window ).on( "load", function() {
    listNotes = getList();
});

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


const displayListNotes = () => {
	let str = [];
	listNotes.forEach((item, index) => {
		let code = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		str +=
			`<div class="col-3 pb-5">
				<div class='content'>
					<div class='card d-flex align-items-stretch'>
						<div class='card-body' style="background-color: ${code}"> 
							<h5 class='card-title'>${item.time}</h5>
							<small><i>${item.date}</i></small>
							<p class='card-text'>${item.content}</p>
						</div> </div>

					<div class="delete-card">
						<div class="pb-5">
							<i class="fas fa-2x fa-minus-circle" onclick="deleteNote(${index})"></i>
						</div>
						<div >
							<i class="fas fa-2x fa-pencil-alt"></i>
						</div>
					</div>
				</div>
			</div>`;
	});
	htmlListNotes.html(str);
}

window.deleteNote = (index) => {
	alertify.confirm("Chắc chắn muốn xóa ghi chú này?", function (e) {
	    if (e) {
	        listNotes = removeNote(index);
	        displayListNotes();
	        alertify.success("Xóa thành công");
	    }
	});
}