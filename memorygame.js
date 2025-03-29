function start() {
	var imageContainer = document.getElementById("imageContainer");
	for (var i = imageContainer.children.length; i >= 0; i--) {
		imageContainer.appendChild(imageContainer.children[Math.random() * i | 0]);
	}
	function hideImage() {
		
		var imageElements = [
			document.getElementById("image1"),
			document.getElementById("image2"),
			document.getElementById("image3"),
			document.getElementById("image4"),
			document.getElementById("image5")
		];

		
		imageElements.forEach(function (image) {
			image.style.opacity = 0;
		});
	}


	setTimeout(hideImage, 2000); 
}





function restart() {
		window.location.reload();
}



//score stage

var score = 0;
var currentImage = 1;


var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var image5 = document.getElementById('image5');
var scoreDisplay = document.getElementById('score');

var scoreDisplay = document.getElementById('score');


function updateScore() {
	score += 20;
	scoreDisplay.textContent = score;
	currentImage++;

}

function gameOver() {
	alert("Game over. Your score: " + score);
	score = 0;
	scoreDisplay.textContent = score;
	currentImage = 1;
}

function winner() {
	alert("Congratulations! Your score is 100.");

}


image1.addEventListener('click', function () {
	if (currentImage === 1) {
		updateScore();
		image1.style.opacity = '1';
	}
	else {
		gameOver();
	}
});

image2.addEventListener('click', function () {
	if (currentImage === 2) {
		updateScore();
		image2.style.opacity = '1';
	}
	else {
		gameOver();
	}
});

image3.addEventListener('click', function () {
	if (currentImage === 3) {
		updateScore();
		image3.style.opacity = '1';
	}
	else {
		gameOver();
	}
});

image4.addEventListener('click', function () {
	if (currentImage === 4) {
		updateScore();
		image4.style.opacity = '1';
	}
	else {
		gameOver();
	}
});

image5.addEventListener('click', function () {
	if (currentImage === 5) {
		updateScore();
		image5.style.opacity = '1';
		if (score === 100) {
			setTimeout(winner,10)
						
		}
	}
	else {
		gameOver();
	}
});