var list = require('./tour.js');

list.shuffle();


/*
var tours = {};
list.forEach(tour=>{
	if(!tours[tour.region]) {		// 해당권역이 처음 나온 경우
		tours[tour.region] = [];	// 배열 배정
	}
	tours[tour.region].push(tour);	// 권역 배열에 추가
})
*/

Array.prototype.grouping = function(attr) {
	var obj = {}
	list.forEach(e=>{
		if(!obj[e[attr]]) {		// 해당권역이 처음 나온 경우
			obj[e[attr]] = [];	// 배열 배정
		}
		obj[e[attr]].push(e);	// 권역 배열에 추가
	});
	return obj;
}


var tours = list.grouping("region");
for(var key in tours) {
	console.log(key)
}

Array.prototype.toMap = function(attr) {
	var map = {};
	this.forEach(e=>map[e[attr]] = e);
	return map;
}

var map = list.toMap("num");
console.log(map[66]);
return;



var regions = Object.keys(tours);	// 권역 리스트 얻기 
console.log(regions);

var tourList = tours["경상권"];		// 지정한 권역의 목록 얻기

function toTr(tour) {
	return `
	<tr>
		<td>${tour.region}</td>
		<td>${tour.city}</td>
		<td>${tour.name}</td>
		<td>${tour.address}</td>
	</tr>`;
}

function toCard(tour) {
	return `
	<div class="card">
	  <img class="card-img-top" src="../images/Jellyfish.jpg" alt="Card image">
	  <div class="card-body">
	  	<div class="text-danger float-right">
    		<i class="far fa-thumbs-up"></i> 100
    	</div>
	  
	    <h4 class="card-title">${tour.name}</h4>
	    <p class="card-text">
	    	${tour.content}
	    	</p>
	    <a href="${tour.homepage}"  target="_blank">
	    	<i class="fas fa-home"></i> ${tour.homepage}
	    </a>
	  </div>
	</div>	
	`;
}

// tourList를 html 표로 구성
var trs = tourList.map(toTr).join('\n');
var table = '<table>\n' + trs + '\n</table>'; 
console.log(table);




