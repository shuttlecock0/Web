var list = require('./tour.js');

list.shuffle();
var region = "경상권";

var tours = list.filter(e=>e.region===region);
console.log(tours.length)

for(var i in tours) {
	console.log(i);
}

