// Bridge: split "what it does" from "how it does it" so either can change.
// Run: node index.js

// The "how to render" side
class CanvasRenderer {
  renderCircle() { console.log("Drawing circle on canvas"); }
}
class SVGRenderer {
  renderCircle() { console.log("Drawing circle as SVG"); }
}

// The "what shape" side, holds a reference to a renderer
class Circle {
  constructor(renderer) { this.renderer = renderer; }
  draw() { this.renderer.renderCircle(); }
}

const circle1 = new Circle(new CanvasRenderer());
const circle2 = new Circle(new SVGRenderer());
circle1.draw(); // Drawing circle on canvas
circle2.draw(); // Drawing circle as SVG
