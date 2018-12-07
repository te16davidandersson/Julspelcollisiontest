let canvas = document.getElementById("spel");
let ctx = canvas.getContext("2d");
let firstimgX = 0;
let secondimgX = 0;
firstStartPointX = Math.floor((Math.random()*899) + 1);
secondStartPointX = Math.floor((Math.random()*899) + 1);
if (firstStartPointX > secondStartPointX) {
	firstStartPointDiffX = firstStartPointX - secondStartPointX;
} else if (firstStartPointX < secondStartPointX) {
	firstStartPointDiffX = secondStartPointX - firstStartPointX;
} else {
	firstStartPointDiffX = 0;
}
firstStartPointDiffHalfX = firstStartPointDiffX / 2;
firstStartIsIntegerX = firstStartPointX / 2;
secondStartIsIntegerX = secondStartPointX / 2;


let i = 0;
function draw() {

	let fgImg = document.getElementById("fg-gfx");

	ctx.clearRect(0, 0, 900, 900);
	ctx.drawImage(fgImg, firstimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (firstimgX + firstStartPointX), 0, 20, 20);
	ctx.drawImage(fgImg, secondimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (secondimgX + secondStartPointX), 0, 20, 20);

if (Number.isInteger(firstStartIsIntegerX) && Number.isInteger(secondStartIsIntegerX)) {
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
} else if (Number.isFinite(firstStartIsIntegerX) && Number.isInteger(secondStartIsIntegerX)) {
if (firstStartPointX > secondStartPointX) {
	if (firstimgX + firstStartPointDiffX + 1 != secondimgX) {
		if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
		} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
		}
		console.log(firstimgX + +firstStartPointDiffX + 1 + " " + secondimgX);
	} else if (firstimgX + firstStartPointDiffX + 1 == secondimgX) {
		console.log("first+1");
		console.log(firstStartPointDiffX);
		ctx.clearRect(0, 0, 900, 900);
	}
} else {
	if (secondimgX + firstStartPointDiffX + 1 != firstimgX) {
		if (secondimgX <= firstStartPointX) {
		secondimgX = secondimgX - 1;
		}
		if (firstimgX <= secondStartPointX) {
		firstimgX = firstimgX + 1;
		}
		console.log(secondimgX + +firstStartPointDiffX + 1 + " " + firstimgX);
	} else if (secondimgX + firstStartPointDiffX + 1 == firstimgX) {
		console.log("TRUUUUUE");
		console.log(firstStartPointDiffX);
		ctx.clearRect(0, 0, 900, 900);
	}
}

	i++;
	if ( i < 900)
		window.requestAnimationFrame(draw);
}else if (Number.isInteger(firstStartIsIntegerX) && Number.isFinite(secondStartIsIntegerX)) {
if (firstStartPointX > secondStartPointX) {
	if (firstimgX + firstStartPointDiffX + 1 != secondimgX) {
		if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
		} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
		}
		console.log(firstimgX + +firstStartPointDiffX + 1 + " " + secondimgX);
	} else if (firstimgX + firstStartPointDiffX + 1  == secondimgX) {
		console.log("TRUUUUUE");
		console.log(firstStartPointDiffX);
		ctx.clearRect(0, 0, 900, 900);
	}
} else {
	if (secondimgX + firstStartPointDiffX + 1 != firstimgX) {
		if (secondimgX <= firstStartPointX) {
		secondimgX = secondimgX - 1;
		}
		if (firstimgX <= secondStartPointX) {
		firstimgX = firstimgX + 1;
		}
		console.log(secondimgX + +firstStartPointDiffX + 1 + " " + firstimgX);
	} else if (secondimgX + firstStartPointDiffX + 1 == firstimgX) { //TODO gör så att om ena börjar på ett ojämt nummer och de andra på ett jämt att de fortfarande detectar, ändra == till <= eller nåt...
		console.log("TRUUUUUE");
		console.log(firstStartPointDiffX);
		ctx.clearRect(0, 0, 900, 900);
	}
}

	i++;
	if ( i < 900)
		window.requestAnimationFrame(draw);
}else if (Number.isFinite(firstStartIsIntegerX) && Number.isFinite(secondStartIsIntegerX)) {
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
}

window.requestAnimationFrame(draw);
