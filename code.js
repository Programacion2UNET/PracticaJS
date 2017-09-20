var logo = document.getElementById('logo');
var left = 10;

function moveRight() {
	left += 10;
	logo.style.left = left + "px";
	setTimeout(moveRight, 500);
}

moveRight();