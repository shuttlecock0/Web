var student = { };
student.name = '홍길동';
student.hobby = '악기';
student.special = '프로그래밍';
student.department = '생명공학과';

//student.toString = function(){
//	var str = '';
//	for(var key in this){
//		if(key != 'toString'){
//			str += `${key}:${this[key]} ,`;
//		}
//	}
//	return str;
//}

console.log(student.toString());
console.log(student);
console.log(' ' + student);