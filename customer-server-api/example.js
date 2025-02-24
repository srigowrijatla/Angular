console.log("Hello world 123");
// 3-4 lines
process.stdin.on(
	'data', 
	function (input) {
	console.log("Hello:1: "+ input.toString());
});


process.stdin.on('data', 
	function (input) { //funct 2
	console.log("Hello:2: "+ input.toString());
});