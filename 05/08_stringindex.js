var ar = [0, 1, 2, 3];
console.log("ar[1] = " + ar[1]);
ar["korea"]=4;
console.log('ar["korea"] = ' + ar["korea"], ar.length);
console.log('ar.korea = ' + ar.korea, ar.length);

ar[-3.14] = 5;
console.log("ar[-3.14] = " + ar["-3.14"], ar.length);

for(i in ar){
	console.log(i);
}