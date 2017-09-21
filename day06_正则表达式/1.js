
/*
 * 名称： repeat
 * 功能： 输入字符char，以及重复次数n，将返回 对应n次的字符串
 * 参数：
 *		char  要重复的字符
 *      n     重复多少次
 * 返回值： 重复的字符串
 */
function repeat(char, n)
{
	var str = "";

	for (var i = 1; i <= n; i++)
	{
		str = str + char
	}

	return str
}



/*
第2题 (选做) 在控制台输出图形

    *
   ***
  *****
 *******
*********

假如 n==5
行号		星星数目		空格数
1				1			4
2				3			3
3				5			2

思路：
	1. 第1层 循环n行
	2.  每行（行号i）打印 2*i - 1 颗星星

	每行之前有空格
	思路： 在输出星星之前，打印对应数目的空格  (n-i)
*/

/*
 * 名称： print
 * 功能： 输入行数n，将返回 对应n行的三角形
 * 参数：
 *      n     行数n
 * 返回值： 对应n行的三角形
 */
// print(5)

 function print(n)
 {
	for (var i = 1; i <= n; i++)
	{
		var str = ""
		for (var j = 1; j <= n-i; j++)  // 循环 n-i 次
		{
			str += " "  // 1个空格
		}

		for (var j = 1; j <= 2*i - 1; j++)  // 循环 2*i - 1 次
		{
			str += "*";
		}

		console.log(str)
	}
 }

/*
第3题 编写函数rev(char) 实现将字符串char倒置 比如rev("spring") 返回"gnirps"

思路：
	1. 从最后1个字符开始，到第1个字符结束  （循环）
	2. 依次将字符 拼接到1个新的字符串中
	3. 最终将新的字符串返回

思路2：
	1. 将字符串拆分成单个元素的 数组a  【1,2,3】
	2. 数组a中的元素 反转 【3,2，1】
	3. 数组a中的元素拼成1个字符串
var str = "spring"

var a = str.split("")

// reverse 函数 会  修改 [数组a]中的内容的
// [1,2,3] ==> [3,2,1]
a.reverse() 

document.write(   a.join("")  )
*/


// document.write(   rev("spring")  )
function rev(char)
{

	var str = ""

	// 【注意】 char.length-1 是最后1个字符的下标。 一定要减去1
	for (var i = char.length-1; i >= 0; i--)
	{
		// char[i] 用于取出 下标为i 的字符
		str += char[i]
	}

	return str
}


/*
第4题 将字符串"i come from beijing"倒置，即控制台输出"beijing from come i" 语句直接写在程序中，不需要用户输入

思路：
	1. 将字符串按空格打断成数组 a
	2. 数组 a 反转
	3. 拼接数组 a

	
var str = "i come from beijing"

var a = str.split(" ")

a.reverse()

var result = a.join(" ")

console.log(result)
*/

/*
第5题(选做) 编写函数rightchange(char,n) 实现字符串char循环右移n位。 比如rightchange("abcdefg",2) 返回"fgabcde"

rightchange("abcdefg",2)   ==> fgabcde
rightchange("abcdefg",3)   ==> efgabcd
							   defgabc
							   cdefgab
							   bcdefga
							   abcdefg
rightchange("abcdefg",8)   ==> gabcdef



思路：
	移动1个字符的问题    +   循环n次

	1. 取出最后1个字符c    char.charAt( char.length-1 )

	2. 将c拼接到 新字符串  str += char.charAt( char.length-1 )

	3. 将新字符串 再拼接 原本字符串的前面1截   str+= char.substr(0, char.length-1)

	重复 1~3  n 次


【10:45】 继续
*/

// document.write(  rightchange("abcdefg", 8)  )

function rightchange(char, n)
{
	for (var i = 1; i <= n; i++)
	{
		var str = ""

		// 拼接最后1个字符
		str += char.charAt(char.length-1)
	
		// 取出子串，并拼接
		str += char.substr(0, char.length-1)

		// 将结果赋值给char，便于下一次的操作
		char = str

		console.log(i + ": " + str);
	}

	return char
}



/*
// 第7题 有10个学生的成绩存在数组中，请统计大于等于平均成绩的人数。 成绩直接以数组形式写在程序中，不需要用户输入。


思路：
	1. 定义1个数组，其中10个元素，分别代表学生的成绩
	2. 求出平均数
	3. 遍历数组，判断其中的元素的值，是否大于等于平均数。
				如果满足条件，那么输出
*/
/*
var a = [1,2,3,4,5,6,7,8,9,10]

var sum = 0;
for (var i = 0; i < a.length; i++)
{
	sum += a[i]
}
var avg = sum / a.length; // 平均数

var count = 0;
for (var i = 0; i < a.length; i++)
{
	if (a[i] >= avg)
	{
		document.write(a[i] + ", ");
		// 有1个就自增1，相当于是1个计数器
		count++;
	}
}

document.write("总数：" + count);

//*/

/*
第8题 有10个学生的成绩存在数组中，请统计最高分，最低分，并将最高分和最低分学生的下标输出到控制台


思路：
	1. 定义1个数组，其中10个元素，分别代表学生的成绩
	2. 求出最高分和最低分
		(1) 定义两个变量 min, max 初始值都为 a[0]
		(2) 遍历数组，依次比较，更新 min max
	3. 求下标
		遍历数组，依次与 min 和 max 比较，如果 数组中的元素与 min 或 max 相等，那么就可以知道当前元素的下标
*/


/*
var a = [1,2,15,4,15,6,7,8,9,10]

var min = a[0];
var max = a[0];
for (var i = 0; i < a.length; i++)
{
	if (min > a[i])
	{
		min = a[i]
	}

	if (max < a[i])
	{
		max = a[i]
	}
}
// 循环结束之后，min肯定是数组中的最小值，max肯定是数组中的最大值



for (var i = 0; i < a.length; i++)
{
	if (min == a[i])
	{
		console.log("最小值的下标是：" + i)
	}

	if (max == a[i])
	{
		console.log("最大值的下标是：" + i)
	}
}

//*/

/*
// 第9题 勾股定理：直角三角形中，两个直角边的平方和，等于斜边平方和。寻找三边的长度都不大于100，并且三边边长都是整数的可能，在控制台输出。

思路：
	1. 定义三个变量  a, b, c 分别代表三条边

	2. 3个循环， 分别从 1~100  循环

	3. 最内层循环中 判断  a^2 + b^2 == c^2


	3 4 5
    4 3 5
关于重复数字的问题解决思路：
	规定 a <= b

for (var a = 1; a <= 100; a++)
{
	for (var b = 1; b <= 100; b++)
	{	
		for (var c = 1; c <= 100; c++)
		{
			if (a*a + b*b == c*c && a <= b)
			{
				console.log(a, b, c)
			}
		}

	}
}
*/

/*
第10题 这题非常难，别跳楼 编写函数maxsame(char1,char2) 返回字符串char1和char2的最大相同子串 比如maxsame("abcdefghijklmn","mndefghlm") 返回"defgh"

ACM
*/

/*
 第11题 将"i love javascript cai guai"的每个单词的第一个字母，变为大写。

 思路：
	1. 将字符串拆分成数组
	2. 遍历数组，
			将 数组中的首字符 转换为大写字母 + 后面那一截的字符串 ==> 新的单词 ==> 放到数组中

	3. 将数组还原成 字符串即可


var str = "i love javascript cai guai"

var a = str.split(" ")

for (var i = 0; i < a.length; i++)
{
	a[i] = a[i].charAt(0).toUpperCase() + a[i].substr(1)
}

console.log(  a.join(" ")  )
*/


/*
编写函数maxr(char) 返回字符串char中最长的连续重复字母 比如maxr("mmmiijjjjkkkkkkssptr") 返回"kkkkkk"

思路：
	1. 遍历所有字符

	2. 如果当前字符 与 上1个字符相同    ==> 计数器加1
	   如果当前字符 与 上1个字符不相同  ==> 统计计数器的数值    与 之前最长的那个计数器比较
			如果之前的大   忽略不计
			如果之前的小   更新 最长计数器，并且更新最长字符

	3. 循环结束，输出 最长计数器 个 最长字符
	
*/
var str = "mmmiijjjjkkkkkkssptr"; 

var maxCount = 0;  // 最大计数器
var maxChar = "";  // 最多的那个字符

var count = 1;
var char = str[0];  // 上1个字符

for (var i = 1; i < str.length; i++)
{
	if (str[i] == char)
	{
		count++;
	}
	else
	{
		if (maxCount < count)
		{
			maxCount = count;
			maxChar = char
		}

		count = 1; // 重新开始计数 
		char = str[i]; // 重新匹配
	}
}

for (var i = 1; i <= maxCount; i++)
{
	document.write(maxChar)
}