// JSON 문자열에서 객체로 변환
var s = '{"x":1, "y": 2, "val":"홍길동"}'; // JSON 문자열
var obj = JSON.parse(s);
console.log(obj.x);

// 객체에서 JSON 문자열로 변환
JSON.stringify({x:1, y:2, val:' 홍길동'});
// 배열의 JSON 문자열에서 배열 객체로 변환
var arr = JSON.parse('[4, 3, 5]');
console.log(arr);

Array.isArray(arr);
