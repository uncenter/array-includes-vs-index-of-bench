import { ITEMS, SEARCH_ITEM } from "../resources/constants.js";

Deno.bench({
	name: "Array#includes",
	fn: () => {
		ITEMS.includes(SEARCH_ITEM);
	},
});

Deno.bench({
	name: "Array#indexOf",
	fn: () => {
		ITEMS.indexOf(SEARCH_ITEM) !== -1;
	},
});
