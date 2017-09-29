
// 封装函数： startMove: 让物体缓冲运动到目标值
// 参数： 
//     obj    物体
//     iTarget 移动的目标位置
//     attr    移动的属性
//     fn      回调函数
function startMove(obj, attr, iTarget, fn) {
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function() {
		// 1、 获取当前值
		var start = parseFloat(getStyle(obj, attr));
		
		if (attr == "opacity") {
			// 对于透明度特殊处理，都转换成 100 制
			start = Math.round(start * 100);
		} else {
			start = Math.round(start);
		}
		
		// 2、计算速度值
		//   缓冲运动： 速度值越来越小的
		var speed = (iTarget - start) / 7;
		speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
		
		
		// 3、判断是否到达目的地
		if (start == iTarget) {
			clearInterval(obj.timer);
			
			// 动作完成，调用回调函数
			fn && fn();
			
			return ;
		}
		
		// 4、更新位置
		if (attr == "opacity") {
			obj.style.opacity = (start + speed)/100;
			obj.style.filter = "alpha(opacity="+(start+speed)+")";
		} else {
			obj.style[attr] = (start + speed) + "px"; 
		}
	}, 100);
	
}


// 【获取】样式值
// 函数名： getStyle
// 参数： 
//    obj   节点对象
//    attr  需要获取的属性名
// 返回值： 就是对应的样式值
function getStyle(obj, attr) {
	var objStyle = null;
	if (window.getComputedStyle) {
		objStyle = getComputedStyle(obj);
	} else {
		objStyle = obj.currentStyle;
	}
	
	return objStyle[attr];
}


