let canvas = document.getElementById("spel");
let ctx = canvas.getContext("2d");
let fgImg = document.getElementById("fg-gfx");
let firstimgX = 0;
let secondimgX = 0;
let playerImageX = 0;
let playerImageY = 0;
playerStartPointX = Math.floor((Math.random()*899) + 1);
playerStartPointY = Math.floor((Math.random()*899) + 1);
firstStartPointX = Math.floor((Math.random()*699) + 200);
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

//Player pObjekt

let players = [];
players.push(newPlayer(100, 100));
let presents = [];
presents.push(newPresent(200, 200));

function newPresent(x, y) {
	let present = {
		x: 50,
		y: 50,
		size: 20
	}
	return present;
}

function newPlayer(x, y) {
	let player = {
		x: 0,
		y: 0,
		size: 20,
		color: "FFFFFF"
	}
	return player; 
}

function drawPresent(prObject) {
	ctx.drawImage(fgImg, prObject.x, prObject.y, prObject.size, prObject.size);
}

function drawPlayer(pObject) {
	ctx.fillStyle = pObject.color;
	ctx.fillRect(pObject.x, pObject.y, pObject.size, pObject.size);
}


let move = {
	up: false,
	down: false,
	left: false,
	right: false
};
let i = 0;


document.addEventListener("keydown", function(e) {
	switch(e.key) {
		case "ArrowUp":
			move.up = true;
			break;
		case "ArrowDown":
			move.down = true;
			break;
		case "ArrowLeft":
			move.left = true;
			break;
		case "ArrowRight":
			move.right = true;
			break;
	}
})
document.addEventListener("keyup", function(e) {
	switch(e.key) {
		case "ArrowUp":
			move.up = false;
			break;
		case "ArrowDown":
			move.down = false;
			break;
		case "ArrowLeft":
			move.left = false;
			break;
		case "ArrowRight":
			move.right = false;
			break;
	}
})


function draw() {

	ctx.clearRect(0, 0, 900, 900);
	ctx.drawImage(fgImg, playerImageX, playerImageY, 0, 20);
	ctx.drawImage(fgImg, (playerImageX + playerStartPointX), (playerImageY + playerStartPointY), 20, 20);
	ctx.drawImage(fgImg, firstimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (firstimgX + firstStartPointX), 0, 20, 20);
	ctx.drawImage(fgImg, secondimgX, 0, 0, 20);
	ctx.drawImage(fgImg, (secondimgX + secondStartPointX), 0, 20, 20);

	if (move.right) {
		playerImageX = playerImageX + 3;
	} if (move.left) {
		playerImageX = playerImageX - 3;
	} if (move.up) {
		playerImageY = playerImageY - 3;
	} if (move.down) {
		playerImageY = playerImageY + 3;
	}

	presents.forEach(element => {
		drawPresent(element);
	});

	players.forEach(element => {
		drawPlayer(element);
	});


if (Number.isInteger(firstStartIsIntegerX) && Number.isInteger(secondStartIsIntegerX)) {
	if (firstStartPointX >= secondStartPointX) {
		if (firstimgX + firstStartPointDiffX != secondimgX) {
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
			}
			if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
			}
			//console.log(firstimgX + firstStartPointDiffX + " " + secondimgX);
		} else if (firstimgX + firstStartPointDiffX == secondimgX){
			/*console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			console.log(firstimgX, secondimgX);
			ctx.fillStyle = "#ff0000";*/
			ctx.clearRect(secondStartPointX + firstStartPointDiffHalfX, 0, 20, 20);
			ctx.clearRect(firstStartPointX - firstStartPointDiffHalfX, 0, 20, 20);
		}
	} else {
		if (secondimgX + firstStartPointDiffX != firstimgX) {
			if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX - 1;
			}
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX + 1;
			}
			//console.log(secondimgX + +firstStartPointDiffX + " " + firstimgX);
		} else if (secondimgX + firstStartPointDiffX == firstimgX) {
			//console.log(firstStartPointDiffX);
			ctx.clearRect(firstStartPointX + firstStartPointDiffHalfX, 0, 20, 20);
			ctx.clearRect(secondStartPointX - firstStartPointDiffHalfX, 0, 20, 20);
		}
	}

	//i++;
	//if ( i < 900)
	window.requestAnimationFrame(draw);
} else if (Number.isFinite(firstStartIsIntegerX) && Number.isInteger(secondStartIsIntegerX)) {
	if (firstStartPointX > secondStartPointX) {
		if (firstimgX + firstStartPointDiffX + 1 != secondimgX) {
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
			} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
			}
			//console.log(firstimgX + +firstStartPointDiffX + 1 + " " + secondimgX);
		} else if (firstimgX + firstStartPointDiffX + 1 == secondimgX) {
			//console.log("first+1");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(secondStartPointX + firstStartPointDiffHalfX - 1, 0, 20, 20);
			ctx.clearRect(firstStartPointX - firstStartPointDiffHalfX + 1, 0, 20, 20);
		}
	} else {
		if (secondimgX + firstStartPointDiffX + 1 != firstimgX) {
			if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX - 1;
			}
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX + 1;
			}
			//console.log(secondimgX + +firstStartPointDiffX + 1 + " " + firstimgX);
		} else if (secondimgX + firstStartPointDiffX + 1 == firstimgX) {
			//console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(firstStartPointX + firstStartPointDiffHalfX - 1, 0, 20, 20);
			ctx.clearRect(secondStartPointX - firstStartPointDiffHalfX + 1, 0, 20, 20);
		}
	}

	//i++;
	//if ( i < 900)
	window.requestAnimationFrame(draw);
}else if (Number.isInteger(firstStartIsIntegerX) && Number.isFinite(secondStartIsIntegerX)) {
	if (firstStartPointX > secondStartPointX) {
		if (firstimgX + firstStartPointDiffX + 1 != secondimgX) {
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
			} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
			}
			//console.log(firstimgX + +firstStartPointDiffX + 1 + " " + secondimgX);
		} else if (firstimgX + firstStartPointDiffX + 1  == secondimgX) {
			//console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(secondStartPointX + firstStartPointDiffHalfX - 1, 0, 20, 20);
			ctx.clearRect(firstStartPointX - firstStartPointDiffHalfX + 1, 0, 20, 20);
		}
	} else {
		if (secondimgX + firstStartPointDiffX + 1 != firstimgX) {
			if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX - 1;
			}
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX + 1;
			}
			//console.log(secondimgX + +firstStartPointDiffX + 1 + " " + firstimgX);
		} else if (secondimgX + firstStartPointDiffX + 1 == firstimgX) {
			//console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(firstStartPointX + firstStartPointDiffHalfX - 1, 0, 20, 20);
			ctx.clearRect(secondStartPointX - firstStartPointDiffHalfX + 1, 0, 20, 20);
		}
	}

	//i++;
	//if ( i < 900)
	window.requestAnimationFrame(draw);
}else if (Number.isFinite(firstStartIsIntegerX) && Number.isFinite(secondStartIsIntegerX)) {
	if (firstStartPointX > secondStartPointX) {
		if (firstimgX + firstStartPointDiffX != secondimgX) {
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX - 1;
			} if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX + 1;
			}
			//console.log(firstimgX + +firstStartPointDiffX + " " + secondimgX);
		} else if (firstimgX + firstStartPointDiffX  == secondimgX) {
			//console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(secondStartPointX + firstStartPointDiffHalfX, 0, 20, 20);
			ctx.clearRect(firstStartPointX - firstStartPointDiffHalfX, 0, 20, 20);
		}
	} else {
		if (secondimgX + firstStartPointDiffX != firstimgX) {
			if (secondimgX <= firstStartPointX) {
			secondimgX = secondimgX - 1;
			}
			if (firstimgX <= secondStartPointX) {
			firstimgX = firstimgX + 1;
			}
			//console.log(secondimgX + +firstStartPointDiffX + " " + firstimgX);
		} else if (secondimgX + firstStartPointDiffX == firstimgX) { 
			//console.log("TRUUUUUE");
			//console.log(firstStartPointDiffX);
			ctx.clearRect(firstStartPointX + firstStartPointDiffHalfX, 0, 20, 20);
			ctx.clearRect(secondStartPointX - firstStartPointDiffHalfX, 0, 20, 20);
		}
	}

	//i++;
	//if ( i < 900)
	window.requestAnimationFrame(draw);
}
}

window.requestAnimationFrame(draw);
