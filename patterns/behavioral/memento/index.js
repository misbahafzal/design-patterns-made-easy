// Memento: save a snapshot so you can go back.
// Run: node index.js

class Editor {
  constructor() { this.text = ""; }
  type(words) { this.text += words; }
  save() { return { text: this.text }; }       // create a snapshot
  restore(snapshot) { this.text = snapshot.text; }
}

class History {
  constructor() { this.snapshots = []; }
  push(snapshot) { this.snapshots.push(snapshot); }
  pop() { return this.snapshots.pop(); }
}

const editor = new Editor();
const history = new History();

editor.type("Hello");
history.push(editor.save());
editor.type(" world");
history.push(editor.save());
editor.type("!!!");

console.log(editor.text); // Hello world!!!

editor.restore(history.pop());
console.log(editor.text); // Hello world
