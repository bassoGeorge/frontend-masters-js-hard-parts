export function createFunction() {
	return () => 'hello'
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();



export function createFunctionPrinter(input) {
	return () => input
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



function outer() {
	var counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter () {
		counter ++;
		console.log('counter', counter);
	}
	return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



export const addByX = x => n => n + x

//var addByTwo = addByX(2);

// now call addByTwo with an input of 1


// now call addByTwo with an input of 2



//--------------------------------------------------
// Extension
//--------------------------------------------------

export function once(func) {
	let res = null;
	return (...args) => {
		if(res === null) {
			res = func(...args);
		}
		return res;
	};
}

//var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6


export function after(count, func) {
	let counter = 0;
	return (...args) => {
		if (++counter > count) {
			return func(...args)
		}
	}
}

//var called = function() { console.log('hello') };
//var afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed


export function delay(func, wait, ...funcArgs) {
	setTimeout(() => func(...funcArgs), wait)
}
