
# 大纲 #

1. 解析原理
2. underscore
3. 模板修正


# 解析原理

拼接字符串很不爽，还容易出错。
所以就有工程师在大量的实践中，提出了模板引擎的概念，就是在一个完整的字符串中，把未定的量用特殊的语法比如：
1	@xinqing@
来表示。然后把数据替换这些标记，这个操作叫做数据绑定。

```
//模板
var str = "好@xinqing@啊，我买了一个@dongxi@，花了@qian@元钱";

//字典，数据
var dictionary = {
	"xinqing" : "高兴",
	"dongxi" : "vivo手机",
	"qian" : 7000
}

//数据绑定
str = str.replace(/\@([a-z]+)\@/g , function(match,$1,index,string){
	return dictionary[$1];
});

console.log(str);

```

# underscore.js

优雅的underscore
http://yalishizhude.github.io/2015/08/02/beatiful-underscore/

使用文档
http://www.css88.com/doc/underscore1.8.2/



熟练知道：
```
1	_.max();
2	_.min();
3	_.without();

```

underscore中内置了一个模板引擎：
```
1			//模板字符串
2			var templateString = "好<%= xinqing %>啊，今天我买了<%= dongxi%>，花了<%=qian%>元";
3	
4			//通过模板字符串生成一个数据绑定函数
5			var compile = _.template(templateString);
6	
7			//字典
8			var dictionary = {
9				"xinqing" : "高兴",
10				"dongxi" : "vivo手机",
11				"qian" : 7000
12			}
13	
14			//调用数据绑定函数完成数据绑定，只需要传一个参数，就是字典。
15			console.log( compile(dictionary) );
```


模板文件：

```
<script type="text/template" id="tp1">
	<% for(var i = 0; i < list.length; i++) { %>  
		<% var item = list[i] %>  
		<li>  
			<span><%=item.name%></span>  
			<span><%=item.age%></span>  
		</li>  
	<% } %>  
</script>


var ttt = document.getElementById("tp1").innerHTML;

// {variable: 'list'} 指定模板字符串中的变量名字是 list 
// arr 是传递的数据
var h = _.template(ttt, {variable: 'list'})(arr)
```

_.template模板函数只能解析3种模板标签（这比Smarty、JSTL要简单得多）：

<%  %>：用于包含JavaScript代码，这些代码将在渲染数据时被执行。

<%= %>：用于输出数据，可以是一个变量、某个对象的属性、或函数调用（将输出函数的返回值）。

<%- %>：用于输出数据，同时会将数据中包含的HTML字符转换为实体形式（例如它会将双引号转换为&quot;形式），用于避免XSS攻击。


参考资料： 
http://www.css88.com/archives/4728

# 模板修正

http://localhost:8080/ajax/news

修正 author，（作者）


```
var o = JSON.parse(res);
	
var arr = o.data;

var str = "<ul>";
for (var i in arr)
{
	var templateString = `<li><h3><%= title %></h3>, <%= time %></li>`;

	var compile = _.template(templateString);
	
	var dict = arr[i];

	// 模板修正
	dict.author = "Jack";

	str += compile(arr[i])
}
str += "</ul>";
```

# 作业

1. 重写今天案例
2. 重写 足球、新闻 获取案例


