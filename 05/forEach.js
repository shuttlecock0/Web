function forEach(arr, fn){
	if(!fn)
		return;
	for(var i=0;i<arr.length;i++){
		fn(arr[i], i, arr);
	}
}

var data = [1, 2, 3, 4, 5, 6];
var newData = [];

forEach(data, (e, i, arr) => newData[i]=e*e);
forEach(newData, console.log);
//forEach(data, function(v, i){
//	console.log(`${i} : ${v}`);
//});
//
//forEach(data, v=>console.log(v));
//
//forEach(data, console.log);
