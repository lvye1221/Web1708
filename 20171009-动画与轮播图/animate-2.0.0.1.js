

/*
采用缓冲运动实现动画效果
	oBox 物体
	attr  需要改变的属性
	target 目标
	type 变化的公式名
*/

function animate(oBox, attr, target, type)
{
	// 帧编号
	var n = 1;

	// 起始值
	var start = parseFloat( getStyle(oBox, attr) );

	// 差值
	var deta = target - start;

	// 总帧数  固定为100帧
	var timer = setInterval(function() {
	
		//  Tween[type]  代表 type 值的缓冲函数
		oBox.style[attr] = Tween[type](n, start, deta, 100) + "px"

		n++;

		if (n == 100)
		{
			// 让物体直接到达目标位置。
			oBox.style[attr] = target + "px"

			clearInterval(timer);
			return ;
		}
	}, 100);
	
}


function getStyle(oBox, attr) {
	if (window.getComputedStyle)
	{
		var objStyle = getComputedStyle(oBox);
	}
	else 
	{
		var objStyle = oBox.currentStyle;
	}

	return objStyle[attr];
}