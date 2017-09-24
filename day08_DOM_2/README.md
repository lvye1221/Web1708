

# 大纲 #

1. getElementsByTagName
2. 应用案例
3. 计算后样式


# 课堂内容 #

## getElementsByTagName ##

getElementsByTagName就是通过标签名得到元素，得到的是页面上所有该种标签元素，得到的是数组，数组可以有下标，开始是0，最后一项是.length-1


```
1	var ops = document.getElementsByTagName("p");
2	ops[0].style.backgroundColor = "rgb(111,222,123)";
3	ops[3].style.backgroundColor = "rgb(111,222,123)";
4	ops[ops.length - 1].style.backgroundColor = "rgb(111,222,123)";
```

### 循环输出 ###
循环遍历数组中的元素

### 连续打点调用get ###

先去选择一个HTML标签，然后选择这个HTML标签中的所有p标签：
```
var ps = document.getElementById("box2").getElementsByTagName("p");

```

带数组的连续打点
```
document.getElementsByTagName("div")[1].getElementsByTagName("p")[2].getElementsByTagName("span")[1].style.color = "red";

```


## 应用案例 ##

#### 隔行变色 ####

先去选择一个HTML标签，然后选择这个HTML标签中的所有p标签：
	var ps = document.getElementById("box2").getElementsByTagName("p");

不要多写一个document
	var ps = document.getElementById("box2").document.getElementsByTagName("p");


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

#### 全选复选框 ####

```

<div id="box">
  <p><input type="checkbox">吃饭</p>
  <p><input type="checkbox">吃饭</p>
  <p><input type="checkbox">吃饭</p>
  <p><input type="checkbox">吃饭</p>
  <p><input type="checkbox">吃饭</p>
  <p><input type="checkbox">吃饭</p>
</div>

<input type="button" value="全选" id="btn">
```


#### 批量添加监听 ####

点击方块变色

```
  <style>
    p{
      width: 60px;
      height: 60px;
      float: left;
      margin-right:20px;
      background-color: yellowgreen;
    }
  </style>

<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

```

##### 对应模型 #####

##### 排他模型 #####

### 看你有多色（小游戏） ###



## 计算后样式 ##

现在我们只能得到行内的样式，事实上DOM提供了可靠的API，得到计算后的样式。


W3C制定的标准API，所有现代浏览器（包括IE9，但不包括之前的版本）都实现了window.getComputedStyle()，该方法接收一个要进行样式计算的元素，并返回一个样式对象。样式对象提供了一个名为getPropertyValue()的方法，用于检索特定样式属性的计算样式。getPropertyValue方法接收css属性名称，而不是驼峰式的名称。getPropertyValue()可以不写，直接用方括号来检索属性也可以。

get得到，computed计算后，style样式
get得到，property属性，vaule值
比如：
	window.getComputedStyle(oDiv).getPropertyValue("width")




### 能力检测 ###

尽量使用通用方法，实在不行再考虑浏览器检测方式来实现


#### 其他资料 ####

能力检测简书
http://www.jianshu.com/p/fd11fda302c4

浏览器检测
http://xhyujian.blog.51cto.com/1582574/1123490

客户端检测
http://www.cnblogs.com/egger/archive/2013/04/26/3045285.html



### 透明度 ###

尽管IE8和早期版本不支持opacity，通过style.opacity或者ele.currentStyle.opacity属性取值时，返回的依然是opacity值，即使浏览器完全忽略了opatity值。这是一个好事儿，当我们能够保证opactiy、filter中设置的属性是一致的，则JavaScript读取opactiy值就算是兼容的。


http://www.cr173.com/html/7817_1.html


```
	<style type="text/css">
		div{
			width: 200px;
			height: 200px;
			background-color: black;
			opacity: .2;
			filter:alpha(opacity=20);
		}
	</style>
```
# 作业 #
1. 把今天重点案例重写：
	（轮播图、选项卡、表格隔行变色、全选、计算后样式的轮子）

2. 评分效果
    ![](hw1.jpg)



### 选做 ###

看你有多色 【小游戏】

【扩展】 表格即时编辑

