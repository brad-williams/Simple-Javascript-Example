// Define the function called when box one is clicked
function boxOneClick() {
	var elBox = document.getElementById('box1');
	elBox.className = "green box";
}
// Define the function called when box two is clicked
function boxTwoClick() {
	var elBox = document.getElementById('box2');
	elBox.className = "invisible box";
}
// Define the function called when box three is clicked
function boxThreeClick() {
	var elBox = document.getElementById('box2');
	elBox.className = "visible box";
}
// Define the function called when box four is clicked
function boxFourClick() {
	var backgroundColor = document.body.style.backgroundColor;
	if (backgroundColor === "white") {
		document.body.style.backgroundColor = "black";
	} else {
		document.body.style.backgroundColor = "white";
	}
}
// Define the beginning background color for use in conditional
document.body.style.backgroundColor = "white";
//Create Event Listeners to call each function when the appropriate box is clicked
var elBoxOne = document.getElementById('box1');
elBoxOne.addEventListener('click', boxOneClick, false);
var elBoxTwo = document.getElementById('box2');
elBoxTwo.addEventListener('click', boxTwoClick, false);
var elBoxThree = document.getElementById('box3');
elBoxThree.addEventListener('click', boxThreeClick, false);
var elBoxFour = document.getElementById('box4');
elBoxFour.addEventListener('click', boxFourClick, false);