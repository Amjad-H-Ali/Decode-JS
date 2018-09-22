console.log("Decode!");

const helper = (data, k, storage) => {
	// Exit code
	// Return 1 if length equals 0
	if (k === 0) return 1;

	// If first number equals 0, cannot decode
	let s = data.length - k;

	if (k[s] === '0') return 0;

}

const numberOfWays = (data) => {
	// To store result
	let storage = {};
	helper(data, data.length, storage);
}