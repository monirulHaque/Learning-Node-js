let rect = require('./rectangle');

function solveRect(l, b) {
	console.log('Solving for rectangle with l = ' + l);

	rect(l, b, (err, rectangle) => {
		if (err) {
			console.log('Error: ' + err.message);
		} else {
			console.log('The area of the rectangle is ' + rectangle.area());
			console.log('The perimeter of the rectangle is ' + rectangle.perimeter());
		}
	});
}
console.log('This is after the function');

solveRect(2, 3);
solveRect(-2, 3);
