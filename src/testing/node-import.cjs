const Benchmark = require("benchmark");
const { ITEMS, SEARCH_ITEM } = require("../../resources/constants.cjs");

const suite = new Benchmark.Suite();

suite
	.add("Array#includes", function () {
		ITEMS.includes(SEARCH_ITEM);
	})
	.add("Array#indexOf", function () {
		ITEMS.indexOf(SEARCH_ITEM) !== -1;
	})
	.on("cycle", function (event) {
		console.log(String(event.target));
	})
	.on("complete", function () {
		console.log(`Fastest is ${this.filter("fastest").map("name")}.`);
	})
	.run({ async: true });
