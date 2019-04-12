function outcount(name, interval){
	var count = 0;
	setInterval(function(){
		count++;
		console.log(name, count + "초 지났습니다.");
	}, interval);
}

outcount("test1", 1000);
outcount("test2", 330);