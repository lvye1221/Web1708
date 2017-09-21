
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
	1. 取出最后1个字符 c

	2. 将c拼接到 新字符串  str+=c

	3. 将新字符串 再拼接 原本字符串的前面1截   str+= char.substr(0, char.length-1)

	重复 1~3  n 次
*/

document.write(  rightchange("abcdefg", 8)  )

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