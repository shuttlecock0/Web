var now = new Date();
console.log("현재 시간은 " +
		now.getFullYear() + "년 " +
		(now.getMonth() + 1) + "월 " +
		now.getDate() + "일 " + 
		now.getHours() + ":" + 
		now.getMinutes() + "입니다.");

function formating(v){
	var ret = "";
	ret = v.getFullYear() + "-" +
		(v.getMonth() + 1) + "-" +
		v.getDate() + ":" + 
		v.getHours() + ":" + 
		v.getMinutes() + ":" +
		v.getSeconds();
	return ret;
}

var now2 = formating(new Date());
console.log(now2);

function twoDigitStr(n){
	return n < 10 ? '0' + n : n;
}
function toDateString(time){
	var year = time.getFullYear();
	var month = twoDigitStr(time.getMonth() + 1);
	var date = twoDigitStr(time.getDate());
	return `${year}-${month}-${date}`;
}

function toTimeString(time){
	var hh = twoDigitStr(time.getHours());
	var mm = twoDigitStr(time.getMinutes());
	var ss = twoDigitStr(time.getSeconds());
	return `${hh}:${mm}:${ss}`;
}

var now3 = new Date();
console.log(toDateString(now));
console.log(toTimeString(now));
