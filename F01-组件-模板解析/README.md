
# ��� #

1. ����ԭ��
2. underscore
3. ģ������


# ����ԭ��

ƴ���ַ����ܲ�ˬ�������׳���
���Ծ��й���ʦ�ڴ�����ʵ���У������ģ������ĸ��������һ���������ַ����У���δ��������������﷨���磺
1	@xinqing@
����ʾ��Ȼ��������滻��Щ��ǣ���������������ݰ󶨡�

```
//ģ��
var str = "��@xinqing@����������һ��@dongxi@������@qian@ԪǮ";

//�ֵ䣬����
var dictionary = {
	"xinqing" : "����",
	"dongxi" : "vivo�ֻ�",
	"qian" : 7000
}

//���ݰ�
str = str.replace(/\@([a-z]+)\@/g , function(match,$1,index,string){
	return dictionary[$1];
});

console.log(str);

```

# underscore.js

���ŵ�underscore
http://yalishizhude.github.io/2015/08/02/beatiful-underscore/

ʹ���ĵ�
http://www.css88.com/doc/underscore1.8.2/



����֪����
```
1	_.max();
2	_.min();
3	_.without();

```

underscore��������һ��ģ�����棺
```
1			//ģ���ַ���
2			var templateString = "��<%= xinqing %>��������������<%= dongxi%>������<%=qian%>Ԫ";
3	
4			//ͨ��ģ���ַ�������һ�����ݰ󶨺���
5			var compile = _.template(templateString);
6	
7			//�ֵ�
8			var dictionary = {
9				"xinqing" : "����",
10				"dongxi" : "vivo�ֻ�",
11				"qian" : 7000
12			}
13	
14			//�������ݰ󶨺���������ݰ󶨣�ֻ��Ҫ��һ�������������ֵ䡣
15			console.log( compile(dictionary) );
```


ģ���ļ���

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

// {variable: 'list'} ָ��ģ���ַ����еı��������� list 
// arr �Ǵ��ݵ�����
var h = _.template(ttt, {variable: 'list'})(arr)
```

_.templateģ�庯��ֻ�ܽ���3��ģ���ǩ�����Smarty��JSTLҪ�򵥵öࣩ��

<%  %>�����ڰ���JavaScript���룬��Щ���뽫����Ⱦ����ʱ��ִ�С�

<%= %>������������ݣ�������һ��������ĳ����������ԡ��������ã�����������ķ���ֵ����

<%- %>������������ݣ�ͬʱ�Ὣ�����а�����HTML�ַ�ת��Ϊʵ����ʽ���������Ὣ˫����ת��Ϊ&quot;��ʽ�������ڱ���XSS������


�ο����ϣ� 
http://www.css88.com/archives/4728

# ģ������

http://localhost:8080/ajax/news

���� author�������ߣ�


```
var o = JSON.parse(res);
	
var arr = o.data;

var str = "<ul>";
for (var i in arr)
{
	var templateString = `<li><h3><%= title %></h3>, <%= time %></li>`;

	var compile = _.template(templateString);
	
	var dict = arr[i];

	// ģ������
	dict.author = "Jack";

	str += compile(arr[i])
}
str += "</ul>";
```

# ��ҵ

1. ��д���참��
2. ��д �������� ��ȡ����


