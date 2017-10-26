//*

function setCookie(name, val, iDay) {

	// var str = name + "=" + encodeURIComponent(val);
	var str = name + "=" + val;

	str += ";"

	var oDate = new Date();

	oDate.setDate(oDate.getDate() + iDay);

	str += "expires=" + oDate;

	document.cookie = str;
}

function getCookie(name) {
	var arr = document.cookie.split("; ");

	for (var i = 0; i < arr.length; i++) {
		
		var arr2 = arr[i].split("=");

		if (arr2[0] == name) {
			return arr2[1];
			// return decodeURIComponent(arr2[1]);
		}
	}

	return "";
}

function removeCookie(name) {
	setCookie(name, 1, -1);
}

//*/