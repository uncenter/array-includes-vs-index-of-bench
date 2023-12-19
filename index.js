const { Suite } = require("benchmark");

const suite = new Suite();
const items = [
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

suite
  .add("Array#indexOf", function () {
    items.indexOf("raf") !== -1;
  })
  .add("Array#includes", function () {
    items.includes("raf");
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log(`Fastest is ${this.filter("fastest").map("name")}.`);
  })
  .run({ async: true });
