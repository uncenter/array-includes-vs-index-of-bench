import Benchmark from "benchmark";
import { ITEMS, SEARCH_ITEM } from "../../resources/constants.mjs";

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
