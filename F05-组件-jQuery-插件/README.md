
# 大纲 #

1. jQuery ajax 缓存问题解决
2. cookie 及其 jQuery 插件
3. 如何自己编写插件


# jQuery ajax 缓存问题解决
在请求地址后添加一个参数，参数的值是不一样

"www.baidu.com/1?v="  + new Date().getTime();

# cookie 及其 jQuery 插件
如果需要保存浏览器网页的一些信息，使用 cookie

## 什么是 cookie
     小饼干： 小小的东西，存储一小部分内容

原理：
	document.cookie = "保存的信息"

## 怎么用
jQuery  jQuery 的插件  jquery.cookie.js

提供了：
1. 保存 cookie
2. 读取 cookie





【说明】
chrome 浏览器，如果你是以本地协议打开的  file:// ，
那么，由于安全设置，不允许使用cookie


## 特点
1. 具有失效时间
	如果说没有指定失效时间，那么默认是关闭浏览器消失，称为“会话cookie”
	如果指定失效时间，那么就在结束时间，自动消失，称为“持久cookie”

2. cookie 的保存，是根据： 协议、域名、端口 来决定的， 
		当三者一致时，可以互相访问其中的 cookie

3. 比较小，不能存大东西。  4K以内


## 作用
1. 保存用户名，例如： 免登陆
2. 2个页面之间的传值， 例如： 添加购物车 --> 查看购物车
