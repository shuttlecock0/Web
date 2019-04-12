console.log("5! = " + function(n){
	if(n == 1)
		return 1;
	else{
		return n * arguments.callee(n-1);
	}
}(5));
