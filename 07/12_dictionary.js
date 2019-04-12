var cap = new Object(); //var cap = {};

cap["한국"] = "서울";
cap["미국"] = "워싱턴";
cap["일본"] = "도쿄";
cap["영국"] = "런던";
cap["프랑스"] = "파리";

console.log("영국의 수도는 " + cap["영국"] + "입니다.");

var keys = Object.keys(cap);
console.log(keys);

var values = Object.values(cap);
console.log(values);

var set = {};
set["한국"] = 1;
set["중국"] = 1;
set["한국"] = 1;
set["미국"] = 1;
set["중국"] = 1;

keys = Object.keys(set);
console.log(keys);