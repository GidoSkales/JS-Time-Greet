//Strictly Meant For Browser Extension Execution || Runtime Execution
(function greet() {
	//TIME.JS
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let allTime = `${hr} : ${min} : ${sec}`;
	console.log(allTime);
	let greeted;
	
	if (hr >= 1 && hr < 11) {
		console.log(`Good Morning Gido`);
		alert(`Good Morning Gido. The time is ${allTime}`);
	}
	else if (hr >= 12 && hr < 16) {
		console.log(`Good Afternoon Gido`);
		alert(`Good Afternoon Gido. The time is ${allTime}`);
	}
	else if (hr >= 17 && hr < 20) {
		console.log(`Good Evening Gido`);
		alert(`Good Evening Gido. The time is ${allTime}`);
	}
	else if (hr >= 21 && hr < 23) {
		console.log(`Good Night Gido`);
		alert(`Good Night Gido the time is ${allTime}`);
	}
}())
