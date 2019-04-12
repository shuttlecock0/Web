var score = [82, 96, 54, 76, 9, 100, 69, 88];
var sum = 0;

score.forEach(function(value, i, arr){
	sum += value;
	console.log(value, i, arr);
});

console.log("sum = " + sum);