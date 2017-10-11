
function Ballon() {
	// 产生气球的左上点坐标
	this.top = document.documentElement.clientHeight || document.body.clientHeight - 90;
	this.left = Math.random() * (document.documentElement.clientWidth || document.body.clientWidth);

	// 范围修饰
	this.left = parseInt(this.left);

	// 产生分数，同时可用于气球的种类显示
	this.score = parseInt(Math.random()*7) + 1;

	this.init();
	this.fly();
}

Ballon.prototype.init = function() {
	this.dom = document.createElement("div");

	this.dom.className = "ballon";

	document.body.appendChild(this.dom);

	// 初始的坐标值
	this.dom.style.left = this.left + "px";
	this.dom.style.top = this.top + "px";

	var x = -(this.score - 1) % 4 * 96;
	var y = -parseInt((this.score - 1) / 4) * 120;

	this.dom.style.backgroundPosition = x + "px " + y + "px";

	var self = this;

	this.dom.onclick = function() {

		self.remove();

		//累加分数
		gGame.score += self.score;
		gGame.oScore.innerHTML = gGame.score;

		// 音效
		gGame.oMusic.load();
		gGame.oMusic.play();
	}
}

Ballon.prototype.fly = function() {

	// 清除定时器
	clearInterval(this.timer);

	var self = this;

	// 自己的定时器
	this.timer = setInterval(function() {

		var current = self.dom.offsetTop;

		if (current < -100) {
			console.log("remove child");

			self.remove();

			return ;
		}

		var speed = -2 * self.score;

		current += speed;

		self.dom.style.top = current + "px";

	}, 100);
}
	
// 爆炸效果	
Ballon.prototype.remove = function() {

	var self = this;

	document.body.removeChild(self.dom);

	clearInterval(self.timer);


	console.log("Ballon gGame: " + gGame);
	

	// 移除在全局对象中保存下来的信息
	delete gGame.ballons[self.id];
}