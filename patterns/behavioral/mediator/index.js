// Mediator: one go-between so objects don't talk to each other directly.
// Run: node index.js

class ChatRoom {
  constructor() { this.users = []; }
  join(user) {
    this.users.push(user);
    user.room = this;
  }
  send(message, from) {
    this.users
      .filter((user) => user !== from)
      .forEach((user) => user.receive(message, from.name));
  }
}

class User {
  constructor(name) { this.name = name; }
  send(message) { this.room.send(message, this); }
  receive(message, from) {
    console.log(`${this.name} got "${message}" from ${from}`);
  }
}

const room = new ChatRoom();
const alice = new User("Alice");
const bob = new User("Bob");
const carol = new User("Carol");
[alice, bob, carol].forEach((u) => room.join(u));

alice.send("Hi everyone!");
// Bob got "Hi everyone!" from Alice
// Carol got "Hi everyone!" from Alice
