

function Params(query) {
	if(!(this instanceof Params)) {
		
		return new Params(query);
	}

	query.substring(1)	// 문자열 리턴
	.split('&')		// 배열 리턴
	.forEach(e=>{	// 배열 순회
		param = e.split("=");	// 속성명, 속성값 분리
		this[param[0]] = param[1];	// 객체 속성으로 추가
	});
}

var params = Params("?name=홍길동&age=23&address=서울시");
console.log(params);
