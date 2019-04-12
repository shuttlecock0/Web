function Student(name, korean, math, english, science){
	this.name = name;
	this.korean = korean;
	this.math = math;
	this.english = english;
	this.science = science;
}

Student.prototype.getSum = function(){
	return this.korean + this.math + this.english + this.science;
}

Student.prototype.getAverage = function(){
	return this.getSum()/4;
}

Student.prototype.toString = function(){
	return `${this.name}\t${this.getSum()}\t$[this.getAverage()}`;
}