// Challenge 1
export function addTwo(num) {
	return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
export function addS(word) {
	return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
export function map(array, callback) {
	const ret = [];
	for (let i = 0; i < array.length; i++) {
		ret.push(callback(array[i]))
	}
	return ret;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
export function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i])
	}
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
export function mapWith(array, callback) {
	const ret = [];
	forEach(array, item => {
		ret.push(callback(item))
	})
	return ret;
}

//Extension 2
export function reduce(array, callback, initialValue) {
	let ret = initialValue;
	forEach(array, item => {
		ret = callback(ret, item)
	})
	return ret;
}

//Extension 3
export function intersection(...arrays) {
	return reduce(arrays, (acc, arr) => {
		let ret = [];
		forEach(acc, item => {
			if (arr.indexOf(item) > -1) {
				ret.push(item)
			}
		})
		return ret;
	}, arrays[0])
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
export function union(...arrays) {
	return reduce(arrays, (acc, arr) => {
		forEach(arr, item => {
			if (acc.indexOf(item) === -1) {
				acc.push(item)
			}
		})
		return acc;
	}, [])
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
export function objOfMatches(array1, array2, callback) {
	const ret = {};
	for(let i = 0; i < array1.length; i++) {
		if (array2[i] === callback(array1[i])) {
			ret[array1[i]] = array2[i]
		}
	}
	return ret;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
// function(str) { return str.toUpperCase(); })); should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
export function multiMap(arrVals, arrCallbacks) {
	const ret = {};
	forEach(arrVals, k => {
		ret[k] = mapWith(arrCallbacks, fn => fn(k))
	})
	return ret;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) {
// return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }])); should log: {
// catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer',
// 'beerbeer'] }

