

//我的飞机:(对象)
var myPlane = {
	//属性ele: 我的飞机div节点
	ele: null,
	
	fireInterval: 1000,
	
	//方法:
	//初始化方法init:
	init: function() {
		this.ele = document.createElement("div");
		
		this.ele.className = "myplane";

		//添加到游戏界面main上
		gameEngine.ele.appendChild(this.ele);
		
		// 位置
		var iLeft = parseInt(gameEngine.ele.offsetWidth/2 - this.ele.offsetWidth/2); 
		this.ele.style.left = iLeft + "px";
		
		//现在可以开始拖拽飞机了
		this.startDrag();
		
		// 启用触摸
		this.startTouch();
		
		return this;
	},
	
	fire: function() {
		
		this.timer = setInterval(function() {
			new Bullet().init();
		}, this.fireInterval);
		
	},
	
	// 拖拽
	startDrag: function() {

		var self = this;
		
		this.ele.onmousedown = function(e) {
			//console.log("onmousedown");
			
			var disX = e.offsetX;
			var disY = e.offsetY;
			
			document.onmousemove = function(e) {
				var x = e.clientX - gameEngine.ele.offsetLeft - disX;
				var y = e.clientY - disY;
				
				if (x < 0) {
					x = 0;
				}
				
				if (x > gameEngine.ele.offsetWidth - self.ele.offsetWidth) {
					x = gameEngine.ele.offsetWidth - self.ele.offsetWidth;
				}
				
				self.ele.style.left = x + "px";
				self.ele.style.top = y + "px";
			}
			
			document.onmouseup = function() {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	},
	
	
	// 触摸拖拽
	startTouch: function() {

		var self = this;
		
		console.log("startTouch");
			
		// 注意得用这个方式来添加事件
		this.ele.addEventListener('touchstart', function(e) {
//			console.log("ontouchstart");
			
			e = e.touches[0];
			
			var disX = e.clientX - self.ele.offsetLeft;
			var disY = e.clientY - self.ele.offsetTop;
			
			document.addEventListener('touchmove', function(evt) {
				
				evt.preventDefault();
				
				
				e = evt.touches[0];
				
				var x = e.clientX - gameEngine.ele.offsetLeft - disX;
				var y = e.clientY - disY;
				
//				console.log("ontouchmove：", x, y);
				
				if (x < 0) {
					x = 0;
				}
				
				if (x > gameEngine.ele.offsetWidth - self.ele.offsetWidth) {
					x = gameEngine.ele.offsetWidth - self.ele.offsetWidth;
				}
				
				self.ele.style.left = x + "px";
				self.ele.style.top = y + "px";
				
			});
			
			document.addEventListener('touchup', function() {
				document.removeEventListener('touchmove');
				document.removeEventListener('touchup');
			});
		});
	},
	
	//爆炸
	boom: function(fnCallback) {
		
		clearInterval(this.timer); //关闭定时器, 不发射子弹
		
		var dieImgs = ["img/me_die1.png", "img/me_die2.png", "img/me_die3.png", "img/me_die4.png"];
		var index = 0;

		var self = this;

		var dieTimer = setInterval(function() {
			
			self.ele.style.background = "url("+ dieImgs[index] +")";
			
			index ++;
			if (index >= dieImgs.length) {
				clearInterval(dieTimer); // 关闭定时器
				
				gameEngine.ele.removeChild(myPlane.ele); //移除我的飞机
				
				fnCallback && fnCallback(); //回调
			}
			
		}, 50);
	}
};

