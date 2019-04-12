var list = require('./tour.js');
list.shuffle();

var region = "경상권"
var tours = list.filter(function(value, i, arr){
	return arr[i].region === region;
});

//for(var i in tours){
//	console.log(tours[i].num + ' ' + tours[i].name + ' '+ tours[i].region);
//}

var tours2 = list.filter(e=>e.region === region);
console.log(tours2.length);


var set = {};
list.forEach(e => set[e.region] = 1)
var regions = Object.keys(set);
console.log(regions);
