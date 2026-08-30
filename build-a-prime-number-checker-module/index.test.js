const assert = require("node:assert/strict");

const { isPrime } = require("./index");

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);
assert.strictEqual(isPrime(5), true);
assert.strictEqual(isPrime(11), true);

assert.strictEqual(isPrime(1), false);
assert.strictEqual(isPrime(4), false);
assert.strictEqual(isPrime(10), false);
assert.strictEqual(isPrime(15), false);