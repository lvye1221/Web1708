

//游戏引擎(对象)
/*
 * 开始游戏, 加载游戏, 进入游戏主界面
 * 创建敌机, 控制移动我的飞机, 碰撞检测...
 */
var gameEngine = {
	//属性ele:是游戏的主界面(游戏区域) 
	ele: null,
	
	bullets: {}, // 保存所有在游戏区域显示的子弹
	
	enemys: {}, // 保存所有在游戏区域显示的敌机
	
	// 是否碰撞到了我的飞机
	isCrashMyPlane: false,
	
	scoreNode: null, //分数的节点对象
	
	//开始游戏start
	start: function() {
		var self = this;
		
		
		this.ele = document.getElementById("main_body");
		
		//加载游戏
		this.loading(function() {
			//现在已经加载游戏完毕
			//现在可以正式游戏了
			console.log("开始正式游戏");

			// 1、自己的飞机
			myPlane.init().fire();
			
			// 2、开启键盘监听
			self.keyListening();
			
			// 3、创建敌机
			self.createEnemy();
			
			// 4、碰撞检测
			self.crashListening();
			
			//5, 显示分数
			gameEngine.showScore();
			
			//6, 让背景图移动
			gameEngine.move();

		});
		
		return this;
	},
	
	loading: function(loadCallBack) {
		
		
//		loadCallBack && loadCallBack(); 
//		return ;
				
		//显示logo
		var logo = document.createElement("div");
		logo.className = "logo";
		gameEngine.ele.appendChild(logo);
		
		//显示加载动画的图片
		var load = document.createElement("div");
		load.className = "loading";
		gameEngine.ele.appendChild(load);
		
		//开始加载动画
		var index = 0;
		var loadImgs = ["img/loading1.png", "img/loading2.png", "img/loading3.png"];
		var timer = setInterval(function(){
			
			load.style.background = "url(" + loadImgs[index%3] + ") no-repeat";
			load.style.backgroundSize = "cover";
		
			//切换图片
			index++;

			
			//当运动到index==5时, 则游戏加载结束
			if (index >= 5) {
				clearInterval(timer); //关闭定时器
				//移除图片(logo,load)
				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);
				
				//回调
				loadCallBack && loadCallBack(); 
			}
		}, 500);
		

	},
	
	keyListening: function() {
		var speed = 0;
		
		//监听键盘
		window.onkeydown = function(e) {
			e = e || window.event;

//			console.log(e.keyCode);

			//使用键盘按下不松开的持续触发来移动
//			// 向左
//			if (e.keyCode == 37) {
//				myPlane.ele.style.left = myPlane.ele.offsetLeft - 10 + "px";
//			} else if (e.keyCode == 39) {
//				myPlane.ele.style.left = myPlane.ele.offsetLeft + 10 + "px";
//			}

			if (e.keyCode == 37) {
				//向左
				speed = -10;
			} else if (e.keyCode == 39) {
				//向右
				speed = 10;
			}
		}
		
		//松开按键
		window.onkeyup = function() {
			speed = 0;
		}
		
		//通过速度speed来匀速移动飞机
		setInterval(function() {
			var x = myPlane.ele.offsetLeft + speed;
			
			if (x < 0) {
				x = 0;
			}
			
			//如果超出右边界, 则最多在右边界的位置
			if (x > gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth) {
				x = gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth;
			}
			
			myPlane.ele.style.left = x + "px";

		}, 30);
	},
	
	createEnemy: function() {
		
		setInterval(createBigEnemy, 6000);
		function createBigEnemy() {
			if (Math.random() < 0.7) {
				return ;
			}
			
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Large);
			enemy.init().move();
		}
		
		
		setInterval(createMiddleEnemy, 3000);
		function createMiddleEnemy() {
			if (Math.random() < 0.5) {
				return ;
			}
			
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Middle);
			enemy.init().move();
		}
		
		
		setInterval(createSmallEnemy, 1000);
		function createSmallEnemy() {
			if (Math.random() < 0.3) {
				return ;
			}
			
			var enemy = new Enemy(Enemy.prototype.Enemy_Type_Small);
			enemy.init().move();
		}

	},
	
	crashListening: function() {
		
		setInterval(crashTest, 30);
		
		function crashTest() {
			for (var i in gameEngine.enemys) {
				
				var enemy = gameEngine.enemys[i];
				
				for (var j in gameEngine.bullets) {
					
					var bullet = gameEngine.bullets[j];
					
					if (isCrash(enemy.ele, bullet.ele)) {
						
						bullet.boom();
						
						enemy.hurt();
						
						delete gameEngine.bullets[bullet.id];
					}
					
				}
				
				
				if (!gameEngine.isCrashMyPlane && isCrash(myPlane.ele, enemy.ele)) {
					
					gameEngine.isCrashMyPlane = true;
					
					myPlane.boom(function() {
						alert("游戏结束!");
						
						window.location.reload();
					});
				}
			}
		}
	},
		
	//显示分数
	showScore: function() {
		this.scoreNode = document.createElement("div");
		this.scoreNode.className = "score";
		this.scoreNode.innerHTML = "0";
		gameEngine.ele.appendChild(this.scoreNode);
	},
	
	//让背景图移动
	move: function() {
		var y = 0;
		setInterval(function(){
			gameEngine.ele.style.backgroundPositionY = y++ + "px";
		}, 30);
		
	}
	

};
