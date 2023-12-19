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

Deno.bench({
  name: "Array#indexOf",
  fn: () => {
    items.indexOf("raf") !== -1;
  },
});

Deno.bench({
  name: "Array#includes",
  fn: () => {
    items.includes("raf");
  },
});
