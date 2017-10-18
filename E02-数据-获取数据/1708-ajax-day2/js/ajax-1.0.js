
// 封装1个函数，请求数据

/*
 * 参数：
 * 		url     	请求的地址与参数
 * 		callback    回调函数
 */

function ajax(url, callback) {
	
	var xhr = new XMLHttpRequest();
		
	xhr.open("GET", url, true);
	
	xhr.send();
	
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState == 4 && xhr.status == 200) {
			var str = xhr.responseText;
			
			callback && callback(str);
			
		}
	}
}
