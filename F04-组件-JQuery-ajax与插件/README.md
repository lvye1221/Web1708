
��ϸ���ϲο���ǰĿ¼ ��jQuery��2����ñʼ�.docx��

# ��� #

1. �ڵ����
2. jQuery�е�Ajax
3. ����������

# �ڵ���� #

append�����������ӣ�
appendTo ��ʾ������ ����appendTo����
after �����ֵ�  before �����ֵ�
insertBefore��insertAfter
wrap��warpAll
empty()
remove()
clone()

# jQuery�е�Ajax

$.get()����
$.post()����
$.ajax()����
serialize()����
jQuery�е�JSONP����

# ����������
�����
ʱ���
	
# jQuery�������

```
// �����µķ�������
$.fn.draggable = function() {
	// �����this�ǵ�ǰ JQuery ����
	for (var i = 0; i < this.length; i++)
	{
		this[i].onmousedown = function(e) {
			e.preventDefault();

			// �����this�ǵ�ǰ�󶨰��µ�Ԫ�ض���
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

�ḻ����ķ�ʽ��

```
������ʽ�ḻ����
2.1 ��$.fn(��jQuery����)�ḻ
	$.fn��Ա = ֵ;
    $.fn.extend(json����);

2.2	��jquery(��$����)�ḻ
    $.��Ա = ֵ;
    $.extend(json����);
```



## ������� ##

### 1. cookie ###

http://plugins.jquery.com/cookie/



