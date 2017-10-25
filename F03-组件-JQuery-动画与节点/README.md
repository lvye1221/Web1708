
详细资料参考当前目录 “JQuery第2天课堂笔记.docx”


# 学习新接口的方法步骤
1. 看文档   5分钟
2. 写例子（验证想法） 10分钟
3. 查看其它资料   5分钟



# 大纲 #

1. 序与迭代
2. 动画相关方法
3. 节点关系

# 序与迭代 #
eq()方法
	$("p").eq(0)

index()方法
	$(this).index()

each()
	$("p").each(function(i) {
		
	})

length属性
	$("p").length

is() 方法
	$("p").is(":animated")    当前元素是否在执行动画

get()方法
	jQuery 对象 --> js元素对象\DOM对象




# 动画相关方法

内置show()、hide()、toggle()方法
	

slideDown()、slideUp()、slideToggle()方法


fadeIn()、fadeOut()、fadeTo()、fadeToggle()方法


stop()
finish()
delay()
is(":animated")


# 节点关系
原生JS中nodeType属性
原生JS中的节点关系-childNodes
原生JS中的节点关系-parentNode
previousSibling、nextSibling


# 作业：
1. 整理这两天用过的 jQuery 的属性和方法， 发到简书上
2. 重写 滚动页面 和 百叶窗 案例

函数调用，传参

