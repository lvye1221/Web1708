
/*
一、 找对象
				属性				      方法
游戏引擎     场景、蛇、食物			    开始、结束

二、 实现对象
	游戏引擎

休息20分钟，15:50 继续
*/


 
// 定义  游戏引擎  对象
var gGameBox = {
	
	rows: 20,  // 行数
	
	cols: 20,  // 列数

	allTds: [], // 存储所有的td元素对象

	food: null, // 食物对象

	snake: null, // 蛇对象

	timer: null, // 定时器

	// 方法： 清空环境
	clear: function() {
		for (var i = 0; i < gGameBox.allTds.length; i++) {
			for (var j = 0; j < gGameBox.allTds[i].length; j++) {
				gGameBox.allTds[i][j].className = "";
			}
		}
	},

	// 方法：支持键盘控制
	keyControl: function() {
		// onkeydown 键盘按下事件
		window.onkeydown = function(e) {
			// 获取按键编码
			var c = e.keyCode;

			if (c == 37)
			{
				// 左

				if (gGameBox.snake.direct == "right")
				{
					// 当前是往右走，不能掉头，终止函数
					return ;
				}
				gGameBox.snake.direct = "left";
			}
			else if (c == 38)
			{
				// 上
				if (gGameBox.snake.direct == "down")
				{
					return ;
				}
				gGameBox.snake.direct = "up";
			}
			else if (c == 39)
			{
				// 右
				if (gGameBox.snake.direct == "left")
				{
					return ;
				}
				//  改变蛇的方向
				gGameBox.snake.direct = "right";
			}
			else if (c == 40)
			{
				if (gGameBox.snake.direct == "up")
				{
					return ;
				}
				// 下
				gGameBox.snake.direct = "down";
			}
		}
	},
	
	// 方法： 游戏开始
	start: function() {

		gGameBox.init(); // 游戏初始化
		
		gGameBox.food = new Food(); // 创建食物
		gGameBox.snake = new Snake(); // 创建蛇

		// 支持键盘控制
		gGameBox.keyControl();

		// 启动游戏时，定时移动蛇
		gGameBox.timer = setInterval(function() {

			// 1. 清空棋盘
			gGameBox.clear();
			
			// 2. 蛇移动
			gGameBox.snake.move();

			// 3. 显示食物
			gGameBox.food.show();

			

		}, 500);

		//gGameBox.snake.fresh();
	},

	// 初始化
	init: function() {
		// 场景布置好, 用表格来做
		var oTable = document.createElement("table");
	
		for (var i = 0; i < gGameBox.rows; i++)
		{
			// 创建tr
			var oTr = document.createElement("tr"); 

			// 每一行，定义1个空数组
			var arr = [];

			for (var j = 0; j < gGameBox.cols; j++) {
				// 创建td
				var oTd = document.createElement("td"); 

				oTr.appendChild(oTd);

				// 将td放到空数组中
				arr.push(oTd);
			}
			// 将当前行所有的td，压入到 allTds 属性中
			gGameBox.allTds.push(arr);

			oTable.appendChild(oTr);
		}

		// 添加到body
		document.body.appendChild(oTable);
	}
};