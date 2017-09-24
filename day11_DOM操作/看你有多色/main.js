
var gClickStep = 0;
var gLevelSteps = 3;

var gScore = 0;

var gLine = 2;
var gSpace = 10;

function rndColor() {

	var r = Math.floor((Math.random() * 256)).toString(16);
	var g = Math.floor((Math.random() * 256)).toString(16);
	var b = Math.floor((Math.random() * 256)).toString(16);

	if (r.length < 2) {
		r = "0" + r;
	}
	if (g.length < 2) {
		g = "0" + g;
	}
	if (b.length < 2) {
		b = "0" + b;
	}

    return '#' + r + g + b;	
}


function createBlocks() {

	var gameBox = document.getElementsByClassName("gameBox")[0];
	gameBox.innerHTML = "";
	
	
	var count = gLine * gLine;
	
	var blockWidth = parseInt((600 - gSpace) / gLine - gSpace);
	var blockHeight = blockWidth;
	
	
	var rndIndex = Math.floor(Math.random() * count);
	var color = rndColor();

	for (var i = 0; i < count; i++) {

		var $block = document.createElement("div");

		$block.className = "block";
		$block.style.width = blockWidth + "px";
		$block.style.height = blockHeight + "px";
		$block.style.background = color;

		$block.onclick = clickWrong;

		if (i == rndIndex) {

			$block.style.background = rndColor();
			$block.style.border = "1px solid orange";

			$block.onclick = clickRight;

		}
		
		// 已知方块的序号，求 方块的 row， col		
		var row = parseInt(i / gLine);
		var col = i % gLine;
		
		
		var deta = (window.innerHeight - gLine * (blockWidth + gSpace)) / 2;
		
		var leftX = col * (blockWidth + gSpace) + gSpace;
		var leftY = row * (blockWidth + gSpace) + gSpace;
		
		leftY += deta;

		$block.style.top = leftY + "px";
		$block.style.left = leftX + "px";

		gameBox.appendChild($block);
	}
}

function clickRight() {

	gClickStep++;
	if (gClickStep > gLevelSteps) {
		gClickStep = 0;

		gLine++;
		gScore++;
	}

	createBlocks();
}


function clickWrong() {
	
	var text = '';
	if (gScore < 1) {
		text = '平民';
		
	} else if (gScore < 2) {
		text = '色狼';
	
	} else if (gScore < 3) {
		text = '色鬼';
	
	} else if (gScore < 4) {
		text = '色魔'; // 色鬼
	
	} else {
		text = '人体艺术师'; // 色鬼
	}

	var allBlock = document.getElementsByClassName("block");

	for (var i = 0; i < allBlock.length; i++) {
		allBlock[i].onclick = null;
	}


	var level = document.getElementsByClassName("level")[0];
	var gameOver = document.getElementsByClassName("gameOver")[0];

	level.innerHTML = text;
	gameOver.style.display = "block";
}

function restartGame() {
	var gameOver = document.getElementsByClassName("gameOver")[0];
	gameOver.style.display = "none";

	gLine = 2;
	gScore = 0;
	
	createBlocks();
}

window.onload = function() {

	var titleBox = document.getElementsByClassName("titleBox")[0];
	var gameBox = document.getElementsByClassName("gameBox")[0];
	var btnStart = document.getElementsByClassName("startGame")[0];
	var btnRestart = document.getElementsByClassName("restartButton")[0];

	btnRestart.onclick = restartGame;

	btnStart.onclick = function() {
		titleBox.style.display = "none";
		this.style.display = "none";
		gameBox.style.display = "block";
	}

	createBlocks();

}

