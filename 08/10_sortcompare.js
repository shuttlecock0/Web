var score = [82, 96, 54, 76, 100, 92, 99, 69, 88];
console.log("befor = " + score);

function compare(left, right){
	return right - left;
}

score.sort(compare);
console.log("after = " + score);