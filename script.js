

const title = document.getElementById('title');
const cakeImage = document.getElementById('cake-image');
const balloonsImage = document.getElementById('balloons-image');
const message = document.getElementById('message');
const playButton = document.getElementById('play-button');

function animate() {
	title.style.opacity = 0;
	cakeImage.style.opacity = 0;
	balloonsImage.style.opacity = 0;
	message.style.opacity = 0;

	setTimeout(() => {
		title.style.opacity = 1;
	}, 500);

	setTimeout(() => {
		cakeImage.style.opacity = 1;
	}, 1000);

	setTimeout(() => {
		balloonsImage.style.opacity = 1;
	}, 1500);

	setTimeout(() => {
		message.style.opacity = 1;
	}, 2000);
}

// Play animation on button click
playButton.addEventListener('click', animate);
