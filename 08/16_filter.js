var score = [82, 96, 54, 76, 9, 100, 69, 88];

var score2 = score.filter(function(value){
	return value >= 80;
});

console.log("score2 = " + score2);