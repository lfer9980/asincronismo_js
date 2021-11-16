function sum(num1, num2) {
	return num1 + num2
}

function calc(num1, num2, callback) {
	return callback(num1, num2)
}

rta = calc(2,5, sum)

console.log(rta)


//tiempos y callbacks
function date(callback) {
	console.log(new Date)
	setTimeout(function () {
		let date = new Date;
		callback(date);
	}, 3000)
}

function printData(dateNow) {
	console.log(dateNow)
}

date(printData)