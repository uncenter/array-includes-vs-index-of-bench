import { Bench } from "@uncenter/quickbench";
import { ITEMS, SEARCH_ITEM } from "../resources/constants.js";

const bench = new Bench();

bench
	.addFunction("Array#includes", function (input) {
		input.items.includes(input.searchItem);
	})
	.addFunction("Array#indexOf", function (input) {
		input.items.indexOf(input.searchItem) !== -1;
	});

bench.addResource("default", { items: ITEMS, searchItem: SEARCH_ITEM });

bench.run();
