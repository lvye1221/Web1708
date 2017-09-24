


# 大纲 #

1. 异步和回调函数
2. 缓冲运动
3. 呼吸轮播图


# 课堂内容 #

## 异步和回调函数 ##

Javascript异步编程的4种方法
http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html

JavaScript：彻底理解同步、异步和事件循环(Event Loop)
https://segmentfault.com/a/1190000004322358



假如程序中有for循环，非常耗费时间，但是系统会用“同步”的方式运行：

```
1			console.log(1);
2			console.log(2);
3			console.log(3);
4			for (var i = 0; i < 10000; i++) {
5				console.log("★");
6			}
7			console.log(4);

```


“同步”的意思：for循环很耗费时间，但是程序就是傻等，傻傻的等待10000个星星输出，然后输出4。
比如妈妈去接儿子的飞机，需要等很长时间，等待的时候就是傻等，不同时做别的事情。


异步Asynchronous

```
1			console.log(1);
2			console.log(2);
3			console.log(3);
4			setInterval(function(){
5				console.log("★");
6			},1000);
7			console.log(4);

```
“异步”的意思：遇见了一个特别耗费时间的事情，程序不会傻等，而是先执行后面的语句。


### 回调函数 ###

异步的事情做完了，我们想继续做什么事儿，那此时怎么办呢？
回调函数： 异步的语句做完之后要做的事情





JavaScript回调函数
https://cnodejs.org/topic/564dd2881ba2ef107f854e0b


浅谈 javascript 回调函数
http://wiki.jikexueyuan.com/project/brief-talk-js/callback-function.html


理解和使用 JavaScript 中的回调函数
http://blog.csdn.net/luoweifu/article/details/41466537


### apply和call语句初步 ###

我们试图在回调函数中，用this表示oDiv对象，这样感觉爽。

```
1	animate(oDiv,{"left":600},2000,function(){
2		this.style.backgroundColor = "red";
3	});

```
但是不行，回调函数中this不是oDiv。


Function.prototype.call()
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call



## 缓冲运动 ##
一个盒子用3000毫秒时间，从100→700，不一定是匀速的。
时间精确、移动的变化量也精确，但是不一定是匀速的。
想象一下小时候升国旗，国歌55秒，旗杆10m。小孩子总能55秒准确的升到10m顶端，但是，你懂得。

到底是匀速的、还是先快后慢、先慢后快呢？这就是缓冲，英语叫做tween。



1. 速度变化规则
2. 缓冲运动

## 轮播图 ##


1. 传统轮播
2. 三位置传统轮播图
3. 呼吸轮播（交叉淡入淡出轮播）
4. 异形滚动

### setTimeout()和函数节流 ###

setTimeout clearTimeout
setInterval是设置间隔器；
setTimeout是设置延时器。
1	window.setTimeout(函数,时间);
在指定时间之后，执行函数一次，仅仅执行1次。
同样的，它也是window对象的方法，可以不写window


延时器也能被清除，当延时器没有执行的时候，就可以清除，清除不会触发函数。
1	clearTimeout();


#### 函数节流 ####

javaScript 函数节流
http://imweb.io/topic/577aa790ea7bb9b760c7adc3


谓的函数节流，就是我们希望一些函数不要连续的触发。甚至于规定，触发这个函数的最小间隔是多少时间。
这个就是函数节流。
方法1：
经典的函数节流模型：
```
1	
2	var lock = true;
3	input.onclick = function(){
4		if(!lock) return;
5		lock = false;
6		setTimeout(function(){
7			lock = true;
8		},1000);9	}

```
方法2：
改变我们的运动框架，在运动框架里面加上一个逻辑：运动开始了，就给elem加上一个属性isanimated，表示是否在运动，改为true。然后运动停止之后，停表之后，把elem.isanimated设为false

```
1	.onclick = function(){
2		if(m_unit.isanimate) return;   //如果点击按钮的时候运动机构在动，那么return3	}

```



#### 间歇模型案例 ####

1. 单个文字的效果
2. 多行文字的效果
3. 轮播的效果


#### 呼吸轮播 ####

思路：

1. 改变透明度
2. 切换


#### 异性轮播 ####

1. 异形滚动编程引导1-原理揭示
2. 异形滚动编程引导2-更快的获得JSON
3. 异形滚动编程引导3-第2次点击
4. 异形滚动编程引导4-节流自动轮播

## 作业 ##

1. 无缝连续滚动
2. 传统轮播
3. 呼吸轮播
4. 间歇模型



