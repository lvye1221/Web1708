
详细资料参考当前目录 “jQuery第2天课堂笔记.docx”

# 大纲 #

1. 节点操作
2. jQuery中的Ajax
3. 缓存问题解决

# 节点操作 #

append就是往最后添加：
appendTo 表示被动， 儿子appendTo父亲
after 插入兄弟  before 插入兄弟
insertBefore、insertAfter
wrap、warpAll
empty()
remove()
clone()

# jQuery中的Ajax

$.get()方法
$.post()方法
$.ajax()方法
serialize()方法
jQuery中的JSONP跨域

# 缓存问题解决
随机数
时间戳
	
# jQuery插件开发

```
// 增加新的方法开发
$.fn.draggable = function() {
	// 这里的this是当前 JQuery 对象
	for (var i = 0; i < this.length; i++)
	{
		this[i].onmousedown = function(e) {
			e.preventDefault();

			// 这里的this是当前绑定按下的元素对象
			var detaX = e.clientX - this.offsetLeft;
			var detaY = e.clientY - this.offsetTop;

			this.style.position = "absolute";

			var self = this;
			document.onmousemove = function(e) {
				var x = e.clientX - detaX;
				console.log(x, detaX)
				self.style.left = x + "px";
				self.style.top = e.clientY - detaY + "px";
			}
			
			document.onmouseup = function(e) {
				document.onmousemove = null;
			}
		}
	}
}	
```

丰富插件的方式：

```
两种形式丰富方法
2.1 给$.fn(给jQuery对象)丰富
	$.fn成员 = 值;
    $.fn.extend(json对象);

2.2	给jquery(给$对象)丰富
    $.成员 = 值;
    $.extend(json对象);
```



## 插件介绍 ##

### 1. cookie ###

http://plugins.jquery.com/cookie/



