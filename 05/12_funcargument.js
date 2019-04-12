var add = function(a, b){
	return a + b;
}

var multi = function(a, b){
	return a * b;
}

function calc(a, b, f){
	return f(a, b);
}

console.log("2 + 3 = " + calc(2, 3, add));
console.log("2 * 3 = " + calc(2, 3, multi));

var result = calc(3, 2, function(a, b){
	return a/b;
});
console.log("3 / 2 = " + result);

result = calc(3, 2, (a, b)=>a/b);
console.log("3 / 2 = " + result);