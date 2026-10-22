// Composite: treat one item and a group of items the same way.
// Run: node index.js

class Component {
  render() { /* every component, simple or composite, can render */ }
}

class Button extends Component {
  render() { return "<button />"; }
}

class Panel extends Component {
  constructor() { super(); this.children = []; }
  add(child) { this.children.push(child); }
  render() {
    return `<div>${this.children.map(c => c.render()).join("")}</div>`;
  }
}

const inner = new Panel();
inner.add(new Button());

const panel = new Panel();
panel.add(new Button());
panel.add(inner); // a panel inside a panel, totally fine

console.log(panel.render());
// <div><button /><div><button /></div></div>
