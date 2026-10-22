// Decorator: add abilities in layers, without touching the original.
// Run: node index.js

class BasicNotification {
  send(message) { console.log(`Sending: ${message}`); }
}

class LoggingDecorator {
  constructor(notification) { this.notification = notification; }
  send(message) {
    console.log("Logging: about to send");
    this.notification.send(message);
  }
}

const notification = new LoggingDecorator(new BasicNotification());
notification.send("Hello!");
// Logging: about to send
// Sending: Hello!
