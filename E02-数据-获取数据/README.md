
# ��� #

1. HTTPЭ��
2. GET��POST
3. AJAX�ķ�װ

# HTTPЭ�� #
HTTP��һ������Ӧ�ò����������Э��, ��������,���ٵķ�ʽ, �����ڷֲ�ʽ��ý����Ϣϵͳ.


HTTPЭ�����Ҫ�ص���: 
        1, ֧�ֿͻ���/�����ģʽ. ������(request)-��Ӧ(response)ģʽ

        2, �򵥿���,  �ͻ��������˷�������ʱ, ֻ��Ҫ��������ʽ��·������,���Լ�, ����HTTPЭ���, ʹ��HTTP�������ĳ����ģС, ����ٶȺܿ�;


        3, ���, �����������������

        4, ������,  ����һ�η����������̶Ͽ�����, ���ǳ�����, ��������

        5, ��״̬,  HTTPЭ���������û�м�������; session


HTTPЭ�������ʽ: GET, POST, HEAD, PUT��
HTTP����: ����ͷ��������
	  ��Ӧͷ����Ӧ��


# GET���� #
��ͨ��HTTPЭ�������������Ĺ����У���������õ�����ʽ���ֱ���: GET��POST����Ajaxʹ�õĹ����У�GET��ʹ��Ƶ����Ҫ��POST�ߵö�.
GET������������������ȡ���ݡ�Ҳ���Խ������ַ��������ύ����������
xhr.open('get', 'demo.php?football=1&name=Koo', true);

��;��
	���������������
		football=2
		football=3

��ʽ��
	��ַ?������1=ֵ1&������2=ֵ2&������3=ֵ3


ͨ��URL����ʺ�?�����������ݼ�ֵ�����ݣ����������յ��������Դ��л�ȡ����Ӧ������



---------
��ϰ: ����֤(�ڷ������֤)

�����û���, ͨ���ڷ�������֤���û����Ƿ�ע���:
��ȡ�ӿ�:
http://localhost:8080/ajax/checkname
�е����ݽ�����֤,
����:  regname: ��ʾ�û���;  
����ֵ˵��: �������yes���ʾע���, �������no���ʾ����ʹ��.

![](p1.png)


---------

ʵ�ַ�ҳЧ��

���ʷ���������: ��ȡ�ӿ�
http://localhost:8080/ajax/football
�е�����, ����ʾ����ͼ,  ���в���Ϊ: pageNo, ��ʾҳ��(��1��ʼ)


![](p2.png)



## �ַ�����: ##
�����ַ����β������������ʹ��encodeURIComponent()���б��봦�������ַ��ķ��ؼ����Σ����Խ�ҳ�汣�������Ϊ utf-8 ��ʽ����.
```

//һ��ͨ�õĺ�����URL��Ӳ���
addURLParam(url, name, value) {
	//�жϵ� url �Ƿ������в��� , ���?����&�����Ӳ���
	url += (url.indexOf('?') == -1 ? '?' : '&'); 
	url += encodeURIComponent(name) + '=' + encodeURIComponent(value); 
	return url;
}

```


## ����ͷ:  ##

����ͷ����HTTP��ͷ����Ϣ, �����������ص���Ӧͷ��Ϣ�Ϳͻ��˷��ͳ�ȥ������ͷ��Ϣ�����ǿ��Ի�ȡ��Ӧͷ(response)��Ϣ������������ͷ(request)��Ϣ��

```
//ʹ�� getAllResponseHeaders()��ȡ������Ӧͷ��Ϣ
alert(xhr.getAllResponseHeaders());

//ʹ�� getResponseHeader()��ȡ������Ӧͷ��Ϣ
alert(xhr.getResponseHeader('Content-Type'));

//ʹ�� setRequestHeader()���õ�������ͷ��Ϣ xhr.setRequestHeader('MyHeader', Zhang); //���� open ����֮��send ����֮ǰ


```

## POST����: ##

```
POST ������԰����ǳ�������ݣ�������ʹ�ñ��ύ��ʱ�򣬺ܶ����ʹ�õ� POST ���䷽ʽ��
xhr.open('post', 'demo.php', true);

POST��������������͵����ݣ��������URL���棬����ͨ�� send()������������ύ���ݡ�
xhr.send('name=Zhang&age=100');

POST�����Web���ύ��ͬ����Ҫʹ�� XHR ��ģ�±��ύ
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

������������POST�����GET�������ĸ���һЩ������ͬ���ݱȽϣ�GET ���� POST ����������Ҳ������GET�����ʹ���ʴ���POST��ԭ��


### GET��POST�ĶԱ� ###

```
 ��ͬ�㣺 ������������������ݵķ�ʽ
       GET                                                                        POST
   ���ݷ��ڵ�ַ���� ?reg=123&psw=123                                           send(���ݲ���)
   ������С                                                                      ��������
   ��ȫ�Ե�                                                                      ��ȫ�Ը�
   �����ٶȿ�                                                                  �����ٶ���

```

# AJAX�ķ�װ #

```


// ��װ ajax ����ĺ���
//   ������obj ��һ���������а�����������
//      method    �������ݵķ�ʽ��  GET�� POST
//      url       �������ݵĵ�ַ
//      data      ��������ݣ� �������ʽ {regname:123, psw:123}
//      async      true���첽 �������ͬ��
//      success   �ɹ��Ļص�����
//      failture  ʧ�ܵĻص�����
function ajax(obj) {
	
	// 1> ����
	var req = new XMLHttpRequest();

	// checkname?regname=123&psw=123
	// ˵����ǰ�� GET ��ʽ   toUpperCase �� method ��ֵת���ɴ�д��ʽ
	// && data ˵������������
	if (obj.method.toUpperCase() == "GET" && obj.data) {
		obj.url += "?";
		// ���ú�����������ת���ɲ�ѯ�ַ�����ƴ�ӵ� url ��
		obj.url += params(obj.data);
		
	}

	if (!obj.async) {
		obj.async = true; 
	}
	
	// 2> ׼��
	// method �ǲ���1
	req.open(obj.method, obj.url, obj.async);

	// 3> ����
	if (obj.method.toUpperCase() == "POST") {
		// ���� POST ����
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.send( params(obj.data) );
		
	} else {
		// GET�����ݵķ�ʽ
		req.send();
	}

	// 4> ��������
	req.onreadystatechange = function() {
		if (req.readyState == 4 ) {

			if (req.status == 200) {
				obj.success && obj.success(req.responseText);
			} else {
				obj.failture && obj.failture(req.status);
			}
		}
	}
}


// ������ת���ɲ�����ʽ
//{regname:123, psw:123}
//checkname?regname=123&psw=123
function params(obj) {

	// ƴ�Ӳ���������
	var arr = [];
	
	for (var key in obj) {
		var str = "";
		
		// ƴ�Ӳ���ֵ
		str += key;
		str += "=";
		
		// �����ֵ ����ת��
		str += encodeURIComponent( obj[key]  );
		
		arr.push(str);
	}
	
	return arr.join("&");
}


```

# ��ҵ #
1, ��Ajaxԭ�����, ���������ʹ��Ajax
2, �����������漰���ķ������ĸ���, �Լ���������:  ͬ��,�첽, httpЭ��, get��post��..
3, �����ð����Լ�дһ��

