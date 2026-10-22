// Chain of Responsibility: pass a request along until someone handles it.
// Run: node index.js

class Handler {
  setNext(handler) {
    this.next = handler;
    return handler; // lets us chain setNext calls
  }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return "Nobody could handle it";
  }
}

class Support extends Handler {
  handle(request) {
    if (request.amount <= 50) return `Support refunded $${request.amount}`;
    return super.handle(request);
  }
}
class Manager extends Handler {
  handle(request) {
    if (request.amount <= 500) return `Manager refunded $${request.amount}`;
    return super.handle(request);
  }
}
class Director extends Handler {
  handle(request) {
    if (request.amount <= 5000) return `Director refunded $${request.amount}`;
    return super.handle(request);
  }
}

const support = new Support();
support.setNext(new Manager()).setNext(new Director());

console.log(support.handle({ amount: 30 }));    // Support refunded $30
console.log(support.handle({ amount: 300 }));   // Manager refunded $300
console.log(support.handle({ amount: 3000 }));  // Director refunded $3000
console.log(support.handle({ amount: 9000 }));  // Nobody could handle it
