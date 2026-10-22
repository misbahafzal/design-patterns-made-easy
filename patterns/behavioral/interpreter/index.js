// Interpreter: each rule of a small language is its own class.
// Run: node index.js

class Num {
  constructor(value) { this.value = value; }
  interpret() { return this.value; }
}
class Add {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() + this.right.interpret(); }
}
class Subtract {
  constructor(left, right) { this.left = left; this.right = right; }
  interpret() { return this.left.interpret() - this.right.interpret(); }
}

// 5 + (10 - 4)
const expression = new Add(
  new Num(5),
  new Subtract(new Num(10), new Num(4))
);

console.log(expression.interpret()); // 11
