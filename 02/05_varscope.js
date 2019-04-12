/**
 * 
 */
console.log("함수밖 global = " + global);

func();

function func(){
	console.log("함수안 local = " + local);
	console.log("함수안 global = " + global);
	temp = 10;
	console.log("함수안 temp = " + temp);
	var local = "로컬";
}

var global = "전역";
console.log("함수밖 global = " + global);
console.log("함수밖 temp = " + temp);