var down = 20;

function moveDown() {
	down += 10;
	jQuery("#logo")
		.css("top", down)
		.fadeToggle();
	setTimeout(moveDown, 500);
}

moveDown();