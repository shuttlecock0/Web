var student = { };

student.name = '홍길동';
student.hobby = '악기';
student.special = '프로그래밍';
student.department = '생명공학과';
console.log(student);

for(var key in student){
	console.log(key);
}