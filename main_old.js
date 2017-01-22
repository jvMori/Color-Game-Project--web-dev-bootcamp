var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headerBg = document.querySelector(".header");
var playAgain = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".btn_mode");


for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();

	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color in array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	playAgain.textContent = "New Colors";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares	
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}

		headerBg.style.background = "-moz-linear-gradient(bottom right, #134E5E, #71B280)";
		headerBg.style.background = "linear-gradient(bottom right, #134E5E, #71B280)";
		headerBg.style.background = "-webkit-linear-gradient(bottom right, #134E5E, #71B280)";
		messageDisplay.classList.remove("correct");
		messageDisplay.classList.remove("wrong");
		messageDisplay.textContent = "";
	}
}

/*
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor  = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor  = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});
*/

playAgain.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			messageDisplay.classList.add("correct");
			changeColors(pickedColor);
			headerBg.style.background = pickedColor;
			playAgain.textContent = "Play Again!"
		} else {
			this.style.backgroundColor = "rgba(0,0,0,0)";
			messageDisplay.textContent = "Try Again!";
			messageDisplay.classList.add("wrong");
		}
	});
}

function changeColors(color){
	for (var i = 0; i < colors.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var colorArr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++){
		var randomCol = randomColor();
		colorArr.push(randomCol);
	}
	//return array
	return colorArr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}