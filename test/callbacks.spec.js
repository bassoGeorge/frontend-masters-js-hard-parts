import {expect} from 'chai'
import {
	addS,
	addTwo,
	map,
	forEach,
	mapWith,
	reduce,
	intersection,
	union,
	objOfMatches,
	multiMap
} from '../src/callbacks'

describe("Callbacks", () => {
	describe("addTwo", () => {
		it("adds 2 to any given number", () => {
			expect(addTwo(0)).to.equal(2)
			expect(addTwo(5)).to.equal(7)
			expect(addTwo(-5)).to.equal(-3)
		})
	})
	describe("addS", () => {
		it("adds 's' to anything given", () => {
			expect(addS("pizza")).to.equal("pizzas")
			expect(addS("bagel")).to.equal("bagels")
		})
	})

	describe("map", () => {
		it("maps over the given array with callback provided", () => {
			expect(map([1, 2, 3], k => k * 2)).to.eql([2, 4, 6])
			expect(map([1, 2, 3], addTwo)).to.eql([3, 4, 5])
		})
	})
	describe("forEach", () => {
		it("runs callback over each element of array, doesn't return", () => {
			let alphabet = '';
			let letters  = ['a', 'b', 'c', 'd'];
			forEach(letters, function (char) {
				alphabet += char;
			});
			expect(alphabet).to.equal('abcd');   //prints 'abcd'
		})
	})

	describe("mapWith", () => {
		it("behaves like map", () => {
			expect(mapWith([1, 2, 3], k => k * 2)).to.eql([2, 4, 6])
			expect(mapWith([1, 2, 3], addTwo)).to.eql([3, 4, 5])
		})
	})

	describe("reduce", () => {
		it("mimics the standard reduction process", () => {
			expect(reduce([1, 2, 3], (a, b) => a + b, 0)).to.eql(6)
			expect(reduce(['a', 'b', 'c'], (a, b) => a + b, '')).to.eql("abc");
		})
	})

	describe("intersection", () => {
		it("returns empty array when no items are in common", () => {
			expect(intersection(
				[1, 2, 3],
				[4, 5, 6]
			)).to.eql([])
			expect(intersection(
				[],
				['a', 'b']
			)).to.eql([])
		})
		it("returns the original array when only one input array is given", () => {
			expect(intersection(
				['a', 'b']
			)).to.eql(['a', 'b'])
		})
		it("returns an array of elements found in all the input arrays", () => {
			expect(intersection(
				[1, 2, 3, 4],
				[3, 4, 5, 6],
				[7, 8, 4, 3]
			)).to.eql([3, 4])

			expect(intersection(
				[5, 10, 15, 20],
				[15, 88, 1, 5, 7],
				[1, 10, 15, 5, 20]
			)).to.eql([5, 15]);

			expect(intersection(
				["apples", "oranges"],
				["grapes", "mangoes", "apples"]
			)).to.eql(["apples"])

		})
	})

	describe("union", () => {
		it("returns the original array when only one input array is given", () => {
			expect(union(
				['a', 'b']
			)).to.eql(['a', 'b'])
		})

		it("returns items from all arrays", () => {
			expect(union(
				[1, 2, 3],
				[4, 5],
			)).to.eql([1, 2, 3, 4, 5]);

			expect(union(
				["apples", "oranges"],
				["grapes", "mangoes"]
			)).to.eql(["apples", "oranges", "grapes", "mangoes"])
		})

		it("returns non-duplicate list of all items", () => {
			expect(union(
				[1, 2, 3],
				[3, 4, 5]
			)).to.eql([1, 2, 3, 4, 5]);
		})
	})

	describe("objOfMatches", () => {
		it("behaves as described in the convoluted system", () => {
			const matches = objOfMatches(
				['hi', 'howdy', 'bye', 'later', 'hello'],
				['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
				str => str.toUpperCase()
			)
			expect(matches).to.have.property('hi', 'HI')
			expect(matches).to.have.property('bye', 'BYE')
			expect(matches).to.have.property('later', 'LATER')
			expect(matches).to.not.have.property('howdy')
			expect(matches).to.not.have.property('hello')
		})
	})

	describe("multiMap", () => {
		it("behaves as described in the convoluted system", () => {
			const res = multiMap(
				['catfood', 'glue', 'beer'],
				[
					str => str.toUpperCase(),
					str => str[0].toUpperCase() + str.slice(1).toLowerCase(),
					str => str + str
				]
			)

			expect(res).to.have.deep.property('catfood', ['CATFOOD', 'Catfood', 'catfoodcatfood'])
			expect(res).to.have.deep.property('glue', ['GLUE', 'Glue', 'glueglue'])
			expect(res).to.have.deep.property('beer', ['BEER', 'Beer', 'beerbeer'])
		})
	})
})
