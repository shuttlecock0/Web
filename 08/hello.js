var list = require('./tour.js')
console.log(list.length)

var set = {};
list.forEach(e => set[e.region] = 1)
var regions = Object.keys(set);
console.log(regions);

var set2 = {};
for(var i in list){
	set2[list[i].region] = 1;
}
var regions2 = Object.keys(set2);
console.log(regions2);