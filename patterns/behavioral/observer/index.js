// Observer: one thing changes, many things get told.
// Run: node index.js

class Channel {
  constructor() { this.subscribers = []; }
  subscribe(fn) { this.subscribers.push(fn); }
  unsubscribe(fn) { this.subscribers = this.subscribers.filter(s => s !== fn); }
  publish(video) { this.subscribers.forEach(fn => fn(video)); }
}

const channel = new Channel();

const alice = (video) => console.log(`Alice got notified: ${video}`);
const bob = (video) => console.log(`Bob got notified: ${video}`);

channel.subscribe(alice);
channel.subscribe(bob);

channel.publish("Design Patterns Part 5");
// Alice got notified: Design Patterns Part 5
// Bob got notified: Design Patterns Part 5

channel.unsubscribe(bob);
channel.publish("Part 6");
// Alice got notified: Part 6  (only Alice is notified now)
