
//子弹: 类(构造函数)
function Bullet() {
	
	//属性:
	this.ele = document.createElement("div");
	
	//当前子弹所在gameEngine.bullets对象中的id
	this.id = parseInt(Math.random() * 10000) + "";
	
	//方法:
	//初始化方法init
	this.init = function() {
		this.ele.className = "bullet";
		
		gameEngine.ele.appendChild(this.ele); // 添加到游戏界面main上
		
		//位置
		var x = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth / 2 - this.ele.offsetWidth / 2;
		var y = myPlane.ele.offsetTop;
		
		x = parseInt(x);
		
		this.ele.style.left = x + "px";
		this.ele.style.top = y + "px";
		
		gameEngine.bullets[this.id] = this;
		
		this.move();
	}

	//移动
	this.move = function() {
		
		var self = this;
		
		//让子弹向上移动
		this.timer = setInterval(function() {
			self.ele.style.top = self.ele.offsetTop - 10 + "px";
		
			//当子弹超出游戏区域的最上方, 则移除,并关闭定时器
			if (self.ele.offsetTop < 0) {
				clearInterval(self.timer); //关闭定时器
				
				self.boom();
				
				delete gameEngine.bullets[self.id]; //从gameEngine.bullets中移除子弹对象
			}
		}, 30);
	},
	
	//爆炸
	this.boom = function() {
		var self = this;
		
		//先关闭move中的定时器, 让子弹停止移动
		clearInterval(self.timer);
		
		self.ele.className = "bullet-die";
		
		//爆炸动画
		var dieImgs = ["img/die1.png", "img/die2.png"];
		var index = 0;
		
		var dieTimer = setInterval(function() {
			self.ele.style.background = "url("+ dieImgs[index] +")";
			
			index++;
			if (index >= dieImgs.length) {
				clearInterval(dieTimer); // 关闭定时器
				
				gameEngine.ele.removeChild(self.ele); // 移除子弹
					
			}
			
		}, 50);
	}
	
}
