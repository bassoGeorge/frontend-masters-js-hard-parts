import {expect} from 'chai'
import {addByX, after, createFunction, createFunctionPrinter, delay, once} from '../src/closures'

describe("Closures", () => {
	describe("createFunction", () => {
		it("creates a function which on calling returns 'hello'", () => {
			const function1 = createFunction()
			expect(function1()).to.equal("hello")
		})
	})
	describe("createFunctionPrinter", () => {
		it("creates a function which on calling returns the original input", () => {
			const function1 = createFunctionPrinter('hello')
			expect(function1()).to.equal("hello")

			const function2 = createFunctionPrinter('hi')
			expect(function2()).to.equal('hi')
		})
	})

	describe("addByX", () => {
		it("creates a function which on calling returns the number added by original input", () => {
			const addBy2 = addByX(2)
			expect(addBy2(3)).to.equal(5)
			expect(addBy2(10)).to.equal(12)

			const addBy10 = addByX(10)
			expect(addBy10(2)).to.equal(12)
			expect(addBy10(20)).to.equal(30)
		})
	})

	describe("once", () => {
		it("creates a function that calls the given callback once and returns cached results for every time hence", () => {
			const callback = x => 'hello ' + x

			const memoized = once(callback)
			expect(memoized('anish')).to.equal('hello anish');
			expect(memoized('george')).to.equal('hello anish');
		})
	})

	describe("after", () => {
		it("exectutes a given function only after a certain number of calls", () => {
			const callback = () => 'hello'

			const delayed = after(3, callback)
			expect(delayed()).to.be.undefined
			expect(delayed()).to.be.undefined
			expect(delayed()).to.be.undefined
			expect(delayed()).to.equal('hello')
			expect(delayed()).to.equal('hello')
		})
	})


	// Need to use mocha context, so using function instead of () => {}
	describe("delay", function() {
		this.timeout(5000)

		it("delays the function execution for given time", (done) => {
			const callback = name => {console.log("executed with " + name); done()}
			console.log("Starting now...");
			delay(callback, 2000, "anish")
		})
	})
})
