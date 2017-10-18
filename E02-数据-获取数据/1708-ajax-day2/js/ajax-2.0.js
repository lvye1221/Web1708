

/*
 * 参数：
 *   obj 是1个对象，代表参数的集合，里面有很多参数，如下所示：
 * 		method      请求数据的方式，GET、POST
 * 		url     	请求的地址与参数
 *      data        发送的数据
 *      async       是否是同步,  true / false
 * 	    fail        失败的处理回调函数
 * 	    success     成功的处理回调函数
 */

function ajax(obj) {
	
	if (obj.method == undefined) {
		obj.method = "GET";
	}
	
	if (obj.async == undefined) {
		obj.async = true;
	}
	
	if (obj.data == undefined) {
		obj.data = "";
	}
	
	
	
	var xhr = new XMLHttpRequest();
	
	var url = obj.url;
	if (obj.method == "GET") {
		url += "?"
		url += obj.data;
	}
	
	xhr.open(obj.method, url, obj.async);
	
	if (obj.method == "POST") {
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(obj.data)
	} else {
		xhr.send()
	}
	
	if (obj.async == true) {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				
				if (xhr.status == 200) {
					
					var str = xhr.responseText;
					obj.success && obj.success(str);
				} else {
					obj.fail && obj.fail();
				}
				
			}
			
		}
	} else {
		// 同步方式
		if (xhr.status == 200) {
			var str = xhr.responseText;
			obj.success && obj.success(str);
		} else {
			obj.fail && obj.fail();
		}
	}
	
}
