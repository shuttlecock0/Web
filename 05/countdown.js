function launch(){
	console.log('launch!.....');
}
function fire(){
	console.log('Boom!....');
}

function countdown(counter, fn){
	console.log(counter);
	var timerId = setInterval(function(){
		counter--;
		console.log(counter);
		if(counter == 0){
			clearInterval(timerId);
			fn();
		}
	}, 1000);
}

countdown(10, launch);
countdown(4, fire);