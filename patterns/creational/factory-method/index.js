// Factory: ask for an object, let something else decide how to build it.
// Run: node index.js

class EmailNotification {
  send(message) { console.log(`Email: ${message}`); }
}
class SMSNotification {
  send(message) { console.log(`SMS: ${message}`); }
}
class PushNotification {
  send(message) { console.log(`Push: ${message}`); }
}

function createNotification(type) {
  if (type === "email") return new EmailNotification();
  if (type === "sms") return new SMSNotification();
  if (type === "push") return new PushNotification();
}

const n = createNotification("email");
n.send("Welcome!"); // Email: Welcome!

createNotification("sms").send("Your code is 1234"); // SMS: Your code is 1234
