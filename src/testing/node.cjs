const Benchmark = require("benchmark");

const ITEMS = [
	"jpg",
	"3fr",
	"ari",
	"arw",
	"bay",
	"crw",
	"cr2",
	"cap",
	"data",
	"dcs",
	"dcr",
	"dng",
	"drf",
	"eip",
	"erf",
	"fff",
	"iiq",
	"k25",
	"kdc",
	"mdc",
	"mef",
	"mos",
	"mrw",
	"nef",
	"nrw",
	"obm",
	"orf",
	"pef",
	"ptx",
	"pxn",
	"r3d",
	"raf",
	"raw",
	"rwl",
	"rw2",
	"rwz",
	"sr2",
	"srf",
	"srw",
	"tif",
	"x3f",
];

const SEARCH_ITEM = "raf";

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
