

# 大纲 #

1. DOM简介
2. 节点关系
3. 节点的属性


# 课堂内容 #

## DOM（文档对象模型） ##

Document Object Model 文档对象模型

DOM ： Document Object Model文档对象模型，所有的HTML标签都是对象，非常方便得到、操作。不是操作字符串，而是操作对象。

```
标签 <span> <div>     (css 中)
元素 <div id="div1">  (js 中)
节点 <div> <span>     (DOM 中)
```


### 节点种类 ###
元素节点  nodeType ==1 
属性节点  nodeType ==2 
文本节点  nodeType ==3


### 获取节点 ###

1. id
    getElementById

2. 获取相同名称的节点列表 name
    getElementsByName
	某些低版本浏览器会有兼容性问题

3. 获取相同class属性的节点列表 class 
    getElementsByClassName
	IE8以下不能用

```

// 解决 IE 下不同获取同一 className 的办法

// 思路
// 1. 首先获取网页上所有的节点
// 2. 筛选节点中 class == className 的节点
// 3. 用数组存储满足条件的节点，并返回
function m1(a) {

	var allNode = document.getElementsByTagName("*");

	var arr = [];

	for (var i = 0; i < allNode.length; i++) {
		// 每一个节点有个内部的属性 className
		// 代表当前节点的 class 的值

		// node.onclick
		// node.style
		// node.class // ==> 因为 class 是个关键字，
		// 获取节点的 class 的值， className

		if (allNode[i].className == a) {
			arr.push(allNode[i]);
		}
	}

	return arr;

}

```

4. tagname
    getElementsByTagName
	

```
    <h1>DOM结构</h1>
    <ul id="list">
        <li><a href="http://www.baidu.com" class="baidu" id="baidu">百度</a></li>
    </ul>
    <table id="dataList">
        <tbody>
            <tr>
                <td>Data11</td>
                <td>Data12</td>
            </tr>
            <tr>
                <td>Data21</td>
                <td>Data22</td>
            </tr>
        </tbody>
    </table>

    <form>
        <input type="text" name="username" id="username">
        <input type="text" name="password" id="password">
    </form>

```


## 案例 ##

### 单击输出按钮的内容 ###

```
// 为什么没有写在文档加载之后，为什么 allBtn 不为空
// 因为 getElementsByTagName 方法在得不到元素的情况下，
// 依然会返回一个对象, 只不过这个对象其中的元素个数为 0
// alert(allBtn);
```


```
// 下标为 i 的对象： 内置了很多属性 和 很多方法。但我们可以往这个对象中新增属性，例如
// 在下标为 i 的按钮对象 中新增了一个属性 xxx，并将其中的值设置为 i
allBtn[i].xxx = i;
```



通过绑定函数的的方法，来获取点击按钮的下标
```
function bind(obj, pos) {
	obj.onclick = function() {
		alert(pos);
	}
}

bind(allBtn[i], i);
```





```
	<button>按钮1</button>
	<button>按钮2</button>
	<button>按钮3</button>
	<button>按钮4</button>
	<button>按钮5</button>
	<button>按钮6</button>
```

### tab标签切换 ###

```
#tab span{display:inline-block;padding:5px 15px;background-color:#ddd;margin:0 3px;border:1px solid #ddd;border-bottom:none;}
.content{padding:15px;border:1px solid #ddd;font-size:24px;background-color:#efefef;}



<div id="tab"><span>辣条</span><span>豆腐</span><span>方便面</span><span>桂林米粉</span></div>
<div class="content">我喜欢吃辣条</div>
<div class="content">吃完豆腐池辣条</div>
<div class="content">喜欢去超市捏方便面</div>
<div class="content">桂林米粉哪里最正宗</div>

```

### 简易日历 ###

单击某个按钮，显示数组中对应的信息


```
<style type="text/css">
* { padding: 0; margin: 0; }
li { list-style: none; }
body { background: #f6f9fc; font-family: arial; }

.calendar { width: 210px; margin: 0 auto; padding: 10px 10px 20px 20px; background: #eae9e9; }
.calendar ul { width: 210px; overflow: hidden; padding-bottom: 10px; }
.calendar li { float: left; width: 58px; height: 54px; margin: 10px 10px 0 0; border: 1px solid #fff; background: #424242; color: #fff; text-align: center; cursor: pointer; }
.calendar li h2 { font-size: 20px; padding-top: 5px; }
.calendar li p { font-size: 14px; }

.calendar .active { border: 1px solid #424242; background: #fff; color: #e84a7e; }
.calendar .active p { font-weight: bold; }

.calendar .text { width: 178px; padding: 0 10px 10px; border: 1px solid #fff; padding-top: 10px; background: #f1f1f1; color: #555; }
.calendar .text h2 {font-size: 14px; margin-bottom: 10px; }
.calendar .text p { font-size: 12px; line-height: 18px; }

</style>


	var arr=['快过年了，大家可以商量着去哪玩吧～',
		'大家好好学习吧222222~~~',
		'大家好好学习吧222222333~~~',
		'大家好好学习吧222444222~~~',
		'大家好好学习555吧222222~~~',
		'大家好好学习吧666222222~~~',
		'大家好好学习吧227772222~~~',
		'大家好好学习吧28888822222~~~',
		'大家好好学习吧99999222222~~~',
		'大家好好学习10000000吧222222~~~',
		'大家好好学习吧111111222222~~~',
		'大家好好学习吧22222200000000000~~~']



<div id="tab" class="calendar">

    <ul id="ul">
        <li class="active"><h2>1</h2><p>JAN</p></li>
        <li><h2>2</h2><p>FER</p></li>
        <li><h2>3</h2><p>MAR</p></li>
        <li><h2>4</h2><p>APR</p></li>
        <li><h2>5</h2><p>MAY</p></li>
        <li><h2>6</h2><p>JUN</p></li>
        <li><h2>7</h2><p>JUL</p></li>
        <li><h2>8</h2><p>AUG</p></li>
        <li><h2>9</h2><p>SEP</p></li>
        <li><h2>10</h2><p>OCT</p></li>
        <li><h2>11</h2><p>NOV</p></li>
        <li><h2>12</h2><p>DEC</p></li>
    </ul>
    
    <div class="text" id="txt">
        <h2>1月活动</h2>
        <p>快过年了，大家可以商量着去哪玩吧～</p>
    </div>

</div>
```



## 节点之间的关系 ##

子节点: childNodes

父节点: parentNode

兄弟节点:
    nextSibling
	previousSibling



```
		// 百度元素的上一个【元素】节点
		// 不支持 IE8及以下
		// baidu.previousElementSibling.style.color = "red";

		// 【解决】IE 兼容的问题
		// 只要当前节点不是元素节点，那么一直往上找
		while (google.nodeType != 1) {
			google = google.previousSibling;
		}
```


### 隔行变色 ###

```
<style>
.red{background:red;}
</style>


<ul id="ul01">
	<li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
</ul>

```



### 父节点的应用 ###

```
<style>
  a {cursor: pointer;}
</style>

<h1> 今日头条 </h1>

<ul id="ul1">
	<li>我机巡航南海释放重大信号 轰6曾突破日美封锁链  <a>&times;</a></li>
	<li>少林寺自家门口遇假僧：陪NBA球星韦德拜佛的不是我们... <a>&times;</a></li>
	<li>李克强谈互联网+物流：既是发展新经济，又能提升传统.. <a>&times;</a></li>
	<li>这位85后技术男，要实现APP之间的深度链接  <a>&times;</a></li>
	<li>国内两大白帽子关闭 引猜测  <a>&times;</a></li>
</ul>

```


### 手风琴 ###


```
<style>
		.hide{display:none;}

		#div1{border:1px solid #ddd;padding:1px;}
		#div1 h4{margin:1px;background-color:#ddd;padding:15px;}
		#div1 .content{display:none;height:120px;padding:15px;}
</style>

	<div id="div1">
		<h4>标题1</h4>
		<div class="content">#内容1</div>
		<h4>标题2</h4>
		<div class="content">#内容2</div>
		<h4>标题3</h4>
		<div class="content">#内容3</div>
		<h4>标题4</h4>
		<div class="content">#内容4</div>
		<h4>标题5</h4>
		<div class="content">#内容5</div>
	</div>


```



# 作业 #

1. 全选和反选checked


```
	<table id="dataList">
		<thead>
			<th><input type="checkbox" name="all" id="all"></th>
			<th>爱好</th>
		</thead>
		<tbody>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>篮球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>足球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>羽毛球</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>爬山</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>游泳</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>购物</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>看电影</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>旅游</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>音乐</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="hobby"></td>
				<td>画画</td>
			</tr>
		</tbody>
	</table>
```


2. 手风琴


3. 简易日历

4. 鼠标碰到“十天内免登陆”就会有黄框出现；离开就消失




[扩展]表格的即时编辑


