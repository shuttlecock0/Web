var country = ["korea", "USA", "Japan", "China"]; 
console.log("before = " + country); 

country.sort(function (left, right) { 
	var left2 = left.toLowerCase(); 
	var right2 = right.toLowerCase(); 
	if (left2 < right2) 
		return -1; 
	if (left2 > right2) 
		return 1; 
	return 0; 
});

console.log("after = " + country);