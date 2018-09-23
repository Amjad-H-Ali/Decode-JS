console.log("Decode!");

const helper = (data, k, storage) => {
	// Exit code
	// Return 1 if length equals 0
	if (k === 0) return 1;

	// If first number equals 0, cannot decode
	let s = data.length - k;
	if (data[s] === '0') return 0;

	// If result is already in storage, return it
	if (storage[k]) return storage[k];

	// Result equals first number decoded + helper(remaining numbers)
	// And first two numbers decoded + helper(remaining numbers) if number <= 27
	let result = helper(data, k - 1, storage);
	if (k >= 2 && parseInt(data.slice(s, s + 2)) <= 26 ) result += helper(data, k - 2, storage);


	// Before returning result, store result in storage object
	storage[k] = result;
	return result;
}

const numberOfWays = (data) => {
	// To store result
	let storage = {};
	return helper(data, data.length, storage);
}


console.log(numberOfWays("123")); // 3
console.log(numberOfWays("2723")); // 2
console.log(numberOfWays("011")); // 0
console.log(numberOfWays("226")); // 3
console.log(numberOfWays("")); // 1
console.log(numberOfWays("12")); // 2


