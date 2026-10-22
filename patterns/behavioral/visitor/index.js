// Visitor: add new jobs to objects without changing them.
// Run: node index.js

class Circle {
  constructor(radius) { this.radius = radius; }
  accept(visitor) { return visitor.visitCircle(this); }
}
class Square {
  constructor(side) { this.side = side; }
  accept(visitor) { return visitor.visitSquare(this); }
}

class AreaVisitor {
  visitCircle(circle) { return Math.PI * circle.radius ** 2; }
  visitSquare(square) { return square.side ** 2; }
}
class PerimeterVisitor {
  visitCircle(circle) { return 2 * Math.PI * circle.radius; }
  visitSquare(square) { return 4 * square.side; }
}

const shapes = [new Circle(2), new Square(3)];

console.log(shapes.map((s) => s.accept(new AreaVisitor())));
// [12.566..., 9]
console.log(shapes.map((s) => s.accept(new PerimeterVisitor())));
// [12.566..., 12]
