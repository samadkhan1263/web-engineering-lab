const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script.js");

test('greet("Samad") returns "Hello, Samad!"', () => {
  assert.strictEqual(greet("Samad"), "Hello, Samad!");
});
