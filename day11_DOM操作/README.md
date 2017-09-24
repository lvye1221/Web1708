


# 大纲 #

1. 节点关系
2. 节点操作
3. 案例展示


# 课堂内容 #

## 节点关系 ##


DOM树
https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core

Document
https://developer.mozilla.org/zh-CN/docs/Web/API/Document


原生JS中提供的节点关系很少：
childNodes、firstChild、lastChild、parentNode、nextSibling、previousSibling


关于childNodes一定要记住，IE6、7、8和高级浏览器的不一致，高级浏览器视所有的换行为空文本节点，而IE6、7、8无视这个空文本节点。
```
1		<div id="box">
2			<p></p>
3			<p></p>
4			<p></p>
5			<p></p>
6		</div>

```

1	oDiv.childNodes.length;   //chrome数值是9   IE6、7、8数值是4


【解决兼容性问题】-函数

## 节点操作 ##


HTML节点我们原来最多最多就是改改HTML属性，比如src属性改改；或者改改css样式，比如.style或者.css()。
现在的问题是，我们要增加节点、删除节点、移动节点、替换节点。


### createElement()和appendChild() ###

```
1			var ul = document.getElementsByTagName("ul")[0];
2			//创建一个li标签，用变量oLi来表示。创建出来的节点不是任何节点的儿子，
3			//也就是说没有在DOM树上，
4			var oLi = document.createElement("li");
5			oLi.innerHTML = "DDDD";	//改变这个节点里面的内容
6	
7			//把新创建的节点，追加到DOM树上
8			ul.appendChild(oLi);

```

### insertBefore ###

我们刚才说的appendChild是把新节点在父亲的所有儿子后添加，也就是说添加的节点就是父亲的最后一个儿子。
我们可以在任意一个位置添加节点。
1	父亲.insertBefore(新儿子,原有标杆儿子);
会在原有标杆儿子之前插入。


### removeChild() ###

1	父亲.removeChild(儿子);
如果要自杀，也要找到爸爸
1	this.parentNode.removeChild(this);



### replaceChild() ###

替换节点
1	父亲.replaceChild(新儿子, 老儿子);



### 节点的克隆 ###

克隆节点，参数true表示深复制，节点里面的所有内容一同复制。
复制之后的节点是个孤儿节点，所以也需要使用appendChild、inserBefore、replaceChild来添加上DOM树。

1	ul.appendChild(lis[0].cloneNode(true));


HTML DOM cloneNode() 方法
http://www.w3school.com.cn/jsref/met_node_clonenode.asp




## 案例展示 ##

### 点击移动元素 ###


### 可排序表格 ###

### 加载脚本 ###
动态加载 js 脚本文件



## 作业 ##

写出一个可以排序的表格,效果参考示例



