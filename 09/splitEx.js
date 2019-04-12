var query = "?name=홍길동&age=23&address=서울시";

var params = {};

query.substring(1)
	.split('&')
	.forEach(e=>{
		param = e.split("=");
		params[param[0]] = param[1];
	})
	
console.log(params);