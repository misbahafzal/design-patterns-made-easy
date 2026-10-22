// Flyweight: share the heavy, identical parts instead of duplicating them.
// Run: node index.js

// The shared, expensive part
class TreeType {
  constructor(model, texture) { this.model = model; this.texture = texture; }
  draw(x, y) { console.log(`Drawing ${this.model} at (${x}, ${y})`); }
}

// A factory that reuses TreeType instances instead of duplicating them
const treeTypes = {};
function getTreeType(model, texture) {
  const key = model + texture;
  if (!treeTypes[key]) treeTypes[key] = new TreeType(model, texture);
  return treeTypes[key];
}

// Each individual tree just stores position + a reference to the shared type
class Tree {
  constructor(x, y, type) { this.x = x; this.y = y; this.type = type; }
  draw() { this.type.draw(this.x, this.y); }
}

const oakType = getTreeType("oak", "green.png");
const tree1 = new Tree(10, 20, oakType);
const tree2 = new Tree(15, 90, getTreeType("oak", "green.png")); // reuses the same oakType

tree1.draw(); // Drawing oak at (10, 20)
tree2.draw(); // Drawing oak at (15, 90)
console.log(tree1.type === tree2.type);       // true
console.log(Object.keys(treeTypes).length);   // 1
