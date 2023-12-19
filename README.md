# array-includes-vs-index-of-bench

A benchmark comparing the performance of Array#includes to Array#indexOf. Inspired by [an old dicussion about which to use when checking if an item exists in an array](https://github.com/nodejs/node/issues/26568). Benchmarks adapted from https://gist.github.com/starkwang/a5045f3d50ae2f1326eea50d4f8267e1.

## Results

> Results performed on a 2020 MacBook Pro running macOS with an Apple M1 chip.

`Array#includes` seems to be about ~32x faster than `Array#indexOf` in Node, and `Array#includes` seems to be about ~7.5x faster than Array#indexOf in Deno. Interestingly, `Array#indexOf` seems to be about ~24x faster than `Array#includes` in Bun, the opposite of the other two.

### Deno

_Version: Deno 1.39.0_

| Name           | Iterations/s  |
| -------------- | ------------- |
| Array#includes | 224,966,457.8 |
| Array#indexOf  | 29,645,352.5  |

<details>
    <summary>Full results</summary>

```
$ deno bench src/deno.js
cpu: Apple M1
runtime: deno 1.39.0 (aarch64-apple-darwin)

file:///Users/uncenter/Dev/array-includes-vs-indexof-bench/src/deno.js
benchmark           time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------- -----------------------------
Array#includes       4.45 ns/iter 224,966,457.8   (4.22 ns … 123.55 ns)    4.3 ns   6.21 ns  11.65 ns
Array#indexOf       33.73 ns/iter  29,645,352.5    (32.94 ns … 43.8 ns)  34.16 ns  36.29 ns  36.79 ns
```

</details>

### Node.js

_Version: Node.js v20.5.1_

| Name           | Iterations/s |
| -------------- | ------------ |
| Array#includes | 991,714,178  |
| Array#indexOf  | 30,946,903   |

<details>
    <summary>Full results</summary>

```
$ node src/node.js
Array#includes x 991,714,178 ops/sec ±1.50% (96 runs sampled)
Array#indexOf x 30,946,903 ops/sec ±1.59% (97 runs sampled)
Fastest is Array#includes.
```

</details>

### Bun

_Version: Bun 1.0.18_

| Name           | Iterations/s |
| -------------- | ------------ |
| Array#includes | 15,047,321   |
| Array#indexOf  | 363,218,829  |

<details>
    <summary>Full results</summary>

```
> bun src/node.js
Array#includes x 15,047,321 ops/sec ±2.72% (87 runs sampled)
Array#indexOf x 363,218,829 ops/sec ±57.23% (25 runs sampled)
Fastest is Array#indexOf.
```

</details>
