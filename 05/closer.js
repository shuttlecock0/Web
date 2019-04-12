function test(name){
	var output = 'Hello ' + name + '...!';
	return function(){
		console.log(output);
	}
}

test('Javascript')();

var f1 = test('Javascript');
var f2 = test('Hong');

f1();
f2();