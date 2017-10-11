
function Game(score, time) {

	this.score = score;
	this.time = time;

	this.timer = null;
	this.frameCount = 0;
	this.ballons = {};

	this.init();

	console.log("new Game start init ");

	return this;

}

Game.prototype.init = function() {

	// 创建分数容器
	this.oScore = document.createElement("h1");
	this.oScore.innerHTML = 0;
	document.body.appendChild(this.oScore);

	// 创建time容器
	this.oTime = document.createElement("h1");
	this.oTime.innerHTML = this.time;
	document.body.appendChild(this.oTime);

	// 创建打气球的音频
	this.oMusic = document.createElement("audio");
	this.oMusic.src = "images/c.wav";
	document.body.appendChild(this.oMusic);
}

Game.prototype.start = function() {

	// 设表先关
	clearInterval(this.timer);

	var self = this; 

	// 保存的帧数，也同时是球对象的编号
	self.frameCount = 0;

	this.timer = setInterval(function() {

		self.frameCount++;

		if (self.frameCount % 2 == 0) {
			self.time--;
			
			self.oTime.innerHTML = self.time;

			if (self.time <= 0) {
				self.stop();
			}
		}

		var ballon = new Ballon();

		// 保存id
		ballon.id = self.frameCount;

		self.ballons[ballon.id] = ballon;

	}, 500);
}

Game.prototype.stop = function() {
	
	clearInterval(this.timer);

	for (var i in this.ballons) {
		this.ballons[i].remove();
	}

	alert("您最终得分是：" + this.score);
}

