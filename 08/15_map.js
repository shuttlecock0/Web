var score = [82, 96, 54, 76, 9, 100, 69, 88];

var score2 = score.map(function(value){
	return value * 2;
});

console.log("score2 = " + score);
console.log("score2 = " + score2);

var names = ["홍길동", "고길동", "둘리"];

var items = names.map(ee=>`<li>${ee}</li>`).join('\n');
items = "<ul>\n" + items + "\n</ul>";
console.log(items);