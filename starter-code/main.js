const hamburgerBtnOpen = document.querySelector(".hamburger-btn-open");
const hamburgerBtnClose = document.querySelector(".hamburger-btn-close");
const drawerMenu = document.querySelector(".nav-menu-drawer");

function openDrawerMenu(event){
	event.preventDefault();
	drawerMenu.classList.remove("h");
}

function closeDrawerMenu(event){
	event.preventDefault();
	drawerMenu.classList.toggle("h");
}

hamburgerBtnOpen.addEventListener('click', openDrawerMenu);
hamburgerBtnClose.addEventListener('click', closeDrawerMenu);

