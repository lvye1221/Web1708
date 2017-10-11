

function Snake() {

	// 当前蛇的方向
	this.direct = "right";
	// this.direct = "left";

	// 蛇的元素
	this.nodes = [];

	// 初始化
	this.init();
	this.render();	
}

// 初始化
Snake.prototype.init = function() {
	// 初始化5条蛇节点位置
	for (var i = 0; i < 5; i++) {
		var node = {};

		node.x = 5 - i;
		node.y = 1;

		this.nodes.push(node);
	}
}

// 渲染
Snake.prototype.render = function() {

	for (var i = 0; i < this.nodes.length; i++) {

		var x = this.nodes[i].x;
		var y = this.nodes[i].y;

		// y 是行的编号
		// x 是列的编号
		if (x < gBox.cols && y < gBox.rows && x >= 0 && y >= 0) {
			gBox.tds[y][x].className = "node";
		}
	}

	if (!this.check()) {
		clearInterval(gBox.timer);

		alert("哦噢，Game Over! GG啦！")
		
		return ;
	}
}

// 自动更新位置
Snake.prototype.check = function() {

	var x = this.nodes[0].x;
	var y = this.nodes[0].y;

	console.log(x, y);

	if (x < 0 || x >= gBox.cols) {
		return false; 
	}

	if (y < 0 || y >= gBox.rows) {
		return false; 
	}

	return true;
}

// 自动更新位置
Snake.prototype.update = function() {

	// 弹出最旧的那颗元素
	this.nodes.pop();

	// 再增加1颗
	this.growup();

	this.render();
}

// 自动更新位置
Snake.prototype.growup = function() {

	var x = this.nodes[0].x;
	var y = this.nodes[0].y;

	switch (this.direct) {
	case "top":

		this.nodes.unshift({
            x: x,
            y: y - 1
		});

	    break;

	case "right":

		this.nodes.unshift({
            x: x + 1,
            y: y
		});

	    break;

	case "bottom":

		this.nodes.unshift({
            x: x,
            y: y + 1
		});

	    break;

	case "left":

		this.nodes.unshift({
            x: x - 1,
            y: y
		});

	    break;
		
	default: 
	    break;
	}

	this.render();
}


// 绑定事件处理函数
Snake.prototype.bindEvent = function() {

	var self = this;

	window.onkeydown = function(e) {
		e = e || window.event;

		console.log(e.keyCode);

		switch (e.keyCode) {

		case 38:

			if (self.direct == "bottom") {
				return ;
			}
			self.direct = "top";
			
			break;

		case 39:

			if (self.direct == "left") {
				return ;
			}
			self.direct = "right";
			
			break;

		case 40:

			if (self.direct == "top") {
				return ;
			}
			self.direct = "bottom";
			
			break;

		case 37:

			if (self.direct == "right") {
				return ;
			}
			self.direct = "left";
			
			break;

		default:
			break;
		}
	}
}


function Food() {
	this.x = 0;
	this.y = 0;

	this.change();
}


Food.prototype.render = function() {
	gBox.tds[this.y][this.x].className = "food";
}

Food.prototype.isFoodInSnake = function() {
	var nodes = gBox.snake.nodes;

	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].x == this.x && nodes[i].y == this.y) {

			return true;
		}
	}

	return false;
}

Food.prototype.change = function() {
	this.x = parseInt(Math.random() * gBox.cols);
	this.y = parseInt(Math.random() * gBox.rows);

	if (this.isFoodInSnake()) {
		this.change();
	}
}



var gBox = {
	rows: 20,
	cols: 20,
	snake: null,
	food: null,

	tds: [],
	timer: null,

	init: function() {
		console.log("init");

		var oTable = document.getElementById("box");

		for (var i = 0; i < this.rows; i++) {

			var arr = [];
			var oTr = document.createElement("tr");

			for (var j = 0; j < this.cols; j++) {
				var oTd = document.createElement("td");
				oTr.appendChild(oTd);

				arr.push(oTd);
			}

			oTable.appendChild(oTr);

			// 存储到二维数组中
			this.tds.push(arr);
		}

		return this;
	},

	// 清空之前的渲染内容
	refresh: function() {
		console.log("gbox refresh");

		for (var i = 0; i < this.rows; i++) {
			for (var j = 0; j < this.cols; j++) {
				this.tds[i][j].className = "";				
			}
		}		
	},

	// 启动游戏
	start: function() {


		this.snake = new Snake();
		this.snake.bindEvent();

		this.food = new Food();

		var self = this;
		this.timer = setInterval(function() {

			// 先刷新之前面板的样式
			gBox.refresh();

			self.food.render();
			self.snake.update();

			if (self.food.isFoodInSnake()) {
				self.snake.growup();
				self.food.change();
			}			

		}, 100);

		return this;
	}
};

gBox.init().start();

