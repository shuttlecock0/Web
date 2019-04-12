var tours = require('./tour.js');
const perPage = 8;

// [start, end) 범위의 숫자 배열 리턴 
function range(...args) {
	var start = args.length == 1 ? 0 : args[0];
	var end = args.length == 2 ? args[1] : args[0];
	var arr = [];
	for(var i=start; i<end; i++) {
		arr.push(i)
	}
	return arr;
}

// [start, end) 범위의 정수 난수 리턴
function random(...args) {
	var start = args.length == 1 ? 0 : args[0];
	var end = args.length == 2 ? args[1] : args[0];

	console.log(start, end)
	
	return Math.floor(Math.random()*end) + start;
}

var totalPage = Math.ceil(tours.length/perPage);
var page = random(totalPage+1);

console.log();


function toPageItem(e) {
	if(e == page) {
		return `<li class="page-item active">
		<a class="page-link" href="#">${e}</a></li>`
	} else {
		return `<li class="page-item">
		<a class="page-link" href="#">${e}</a></li>`
	}
}

// tag : 태그
// attrs : 속성 맵
// item : 태그의 데이터
String.prototype.wrapHtml = function (tag, attrs={}) {
	// attrs --> 문자열로
	var arr = [];
	for(var a in attrs) {
		arr.push(`${a}="${attrs[a]}"`);
	}	
	var attrstr = arr.join(' ');
	return `<${tag} ${attrstr}>\n${this}\n</${tag}>`;
}

var pagination = range(totalPage, 1)		// 페이지 번호 숫자 배열
				.map(toPageItem)	// 페이지네이션 <li> 태그 문자열 변환
				.join('\n')			// <li> 문자열 결합
				.wrapHtml('ul', {'class' : 'pagination'});

console.log(pagination);




