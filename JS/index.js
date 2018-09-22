console.log("Decode!");

const helper = (data, k, storage) => {
	// Exit code
	// Return 1 if length equals 0
	if (k === 0) return 1;

	// If first number equals 0, cannot decode
	let s = data.length - k;
	if (k[s] === '0') return 0;

	// Result equals first number decoded + helper(remaining numbers)
	// And first two numbers decoded + helper(remaining numbers) if number <= 27
	let result = helper(data, k - 1, storage);

	if (k >= 2 && parseInt(data.splice(0, s + 2)) <= 26 ) result += helper(data, k - 2, storage);

}

const numberOfWays = (data) => {
	// To store result
	let storage = {};
	helper(data, data.length, storage);
}