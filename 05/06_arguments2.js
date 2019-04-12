function total(){
	var s = 0;
	if(typeof(arguments[0]) == "string"){
		s = "";
	}
	
	for(var i=0;i<arguments.length;i++){
		s+=arguments[i];
	}
	return s;
}

console.log(total(1, 2, 3));
console.log(total("나들이", " 게맛을", " 알어?"));