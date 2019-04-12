var ar = [0, 1, 2, 3];
console.log("ar = " + ar);

ar.unshift(100, 200);
console.log("ar = " + ar);

ar.unshift(300);
console.log("ar = " + ar);

var v = ar.shift();
console.log("ar = " + v);

v = ar.pop();
console.log("ar = " + v);


