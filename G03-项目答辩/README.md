
PC电商项目答辩流程

9:00 ~ 9:30 提前准备，上线，测试，
9:30 准时开始


# 答辩流程

1. 上线项目演示

2. PPT演示
	* 需求分析及项目介绍
	* 代码展示（挑一段代码解释）
	* 遇到的问题解决方案（挑一个最有挑战的说明）
	* 项目总结及心得体会

3. 评委提问

【注意】 演示环节必须控制在10分钟内


# 评分要求

总分100分

1. 上线演示（30分）
2. 代码格式 （10分）
3. 每天工作内容（10分）
4. 项目答辩（50分）



# 答辩中的问题

## 问题补充

良仓项目接口 --> 唯品会框架

1. document.querySelector("#box")

2. 样式，文字

3. 小bug

## 项目经验总结

项目中遇到的最难的一个问题，如何解决的？

## 太激动了
冷静冷静

## 跨域问题
IP（域名）、协议、端口

服务器配置
jsonp  (script)

## 基本数据类型 和 引用数据类型
基本数据类型： 数字、字符串、字符、null, undefined
引用数据类型： 对象、（数组）

var a = 5;
a = 6
console.log(a) // a

var a = 5;
var b = a;
console.log(b) // 5

var a = {n: 5};
var b = a;
b.n = 6;
console.log(a.n) // 6



# 1. 如何通过js获取元素样式值

	<div 
.style    样式要写在 元素标签内

getComputedStyle(o, "width") // 非IE中
o.currentStyle['width']

if (window.getComputedStyle) {
	getComputedStyle
} else {
	// 使用 IE 中的
}

## CSS的权重计算
				
		ID     class	标签数
#a.b div        1	1	  256   ==》 111
.b#a p .c	1       2	  1   ==》 121


<div>
	<div>
		<div>
			<div class="a ">

## 项目管理工具
Git
SVN





# 作业
1. 简书博客
	PC电商项目的展示地址、需求分析、代码展示、项目总结（遇到最难的问题，以及如何解决的）