var citys = "서울,부산,대전,광주";
var parts = citys.split(",");

for(var city in parts){
	console.log("도시명 : " + parts[city]);
}