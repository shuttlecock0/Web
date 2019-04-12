var regions = [ '강원권', '경상권', '서울/경기권', '전라권', '제주권', '충청권' ];

function shuffle(arr) {
	var i1, i2, tmp;
	for (i1 = arr.length - 1; i1 >= 0; i1--) {
		i2 = parseInt(Math.random() * i1);
		tmp = arr[i1];
		arr[i1] = arr[i2];
		arr[i2] = tmp;
	}
}

shuffle(regions);
console.log(regions);

Array.prototype.shuffle = function(){
	var i1, i2, tmp;
	for (i1 = this.length - 1; i1 >= 0; i1--) {
		i2 = parseInt(Math.random() * i1);
		tmp = this[i1];
		this[i1] = this[i2];
		this[i2] = tmp;
	}
}

regions.shuffle();
console.log(regions);

var regions2 = regions.slice();
regions2.shuffle();
console.log('원본  : ' + regions);
console.log('셔플후: ' + regions2);