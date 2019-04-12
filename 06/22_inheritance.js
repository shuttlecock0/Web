function Rectangle(w, h) {
	var width = w;
	var height = h;

	this.getWidth = function() {
		return width;
	};
	this.getHeight = function() {
		return height;
	};

	this.setWidth = function(w) {
		width = w;
	};

	this.setHeight = function(h) {
		height = h;
	}
}

Rectangle.prototype.getArea = function() {
	return this.getWidth() * this.getHeight();
};

var rectangle = new Rectangle(5, 7);

//console.log('AREA: ' + rectangle.getArea());

function Square(length) {
	this.base = Rectangle; // 부모 클래스 생성자 함수
	this.base(length, length); // 부모 클래스의 생성자 함수 호출 // new 없이 호출했으므로 this가
	// Sqaure의 인스턴스가 됨
}
Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var rectangle = new Rectangle(5, 7);
var square = new Square(5);
console.log(rectangle.getArea() + ' : ' + square.getArea());

console.log(square instanceof Rectangle);