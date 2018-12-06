let canvas = document.getElementById("spel");
let ctx = canvas.getContext("2d");
let firstimgX = 0;
let secondimgX = 0;
firstStartPointX = 355;
secondStartPointX = 870;
if (firstStartPointX > secondStartPointX) {
	firstStartPointDiffX = firstStartPointX - secondStartPointX;
} else if (firstStartPointX < secondStartPointX) {
	firstStartPointDiffX = secondStartPointX - firstStartPointX;
} else {
	firstStartPointDiffX = 0;
}
firstStartPointDiffHalfX = firstStartPointDiffX / 2;


let i = 0;
function draw() {

	let fgImg = document.getElementById("fg-gfx");

	ctx.clearRect(0, 0, 900, 900);
	ctx.drawImage(fgImg, firstimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (firstimgX + firstStartPointX), 0, 20, 20);
	ctx.drawImage(fgImg, secondimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (secondimgX + secondStartPointX), 0, 20, 20);

if (firstStartPointX > secondStartPointX) {
	if (firstimgX + firstStartPointDiffX != secondimgX) {
		if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
		} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
		}
		console.log(firstimgX + +firstStartPointDiffX + " " + secondimgX);
		} else if (firstimgX + firstStartPointDiffX  == secondimgX) {
			console.log("TRUUUUUE");
			console.log(firstStartPointDiffX);
			ctx.clearRect(0, 0, 900, 900);
		}
} else {
	if (secondimgX + firstStartPointDiffX != firstimgX) {
		if (secondimgX <= firstStartPointX) {
		secondimgX = secondimgX - 1;
		}
		if (firstimgX <= secondStartPointX) {
		firstimgX = firstimgX + 1;
		}
		console.log(secondimgX + +firstStartPointDiffX + " " + firstimgX);
		} else if (secondimgX + firstStartPointDiffX == firstimgX) { //TODO gör så att om ena börjar på ett ojämt nummer och de andra på ett jämt att de fortfarande detectar, ändra == till <= eller nåt...
			console.log("TRUUUUUE");
			console.log(firstStartPointDiffX);
			ctx.clearRect(0, 0, 900, 900);
		}
}

	i++;
	if ( i < 900)
		window.requestAnimationFrame(draw);
}


window.requestAnimationFrame(draw);
