var s = "글자의 속성";
console.log("굵게 : " + s.bold());
console.log("기울임: " + s.italics());
console.log("빨간색: " + s.fontcolor("red"));
console.log("큰 글자 : " + s.fontsize("6"));

var soen = "SoEn으로 이동";
var link = soen.link("http://www.soen.kr");
console.log(link);