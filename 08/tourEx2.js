var list = require('./tour.js');

list.shuffle();

var tours = {};

list.forEach(tour => {
	if(!tours[tour.region]){
		tours[tour.region] = [];
	}
	tours[tour.region].push(tour);
})

//var regions = Object.keys(tours);
//console.log(regions);
//
//var tourList = tours["경상권"];
//console.log(tourList);
//

//for(var i in tourList){
//	console.log(i);
//}


var tourList = tours["경상권"]; // 지정한 권역의 목록 얻기

//function toTr(tour){
//	return `<tr>
//	<td>${tour.region}</td>
//	<td>${tour.city}</td>
//	<td>${tour.address}</td>\n</tr>`;
//}

function toTr(tour){
	return `<tr>
		<td>${tour.region}</td>
		<td>${tour.city}</td>
		<td>${tour.name}</td>
		<td>${tour.address}</td>
	</tr>`;
}

var trs = tourList.map(toTr).join('\n');
var table = '<table>\n' + trs + '\n</table>';
console.log(table);
