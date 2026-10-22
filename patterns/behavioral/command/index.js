// Command: turn a request into an object you can queue or undo.
// Run: node index.js

// The receiver: the thing that actually does the work
class Light {
  turnOn()  { console.log("Light is ON"); }
  turnOff() { console.log("Light is OFF"); }
}

// Commands: each request wrapped as an object
class TurnOnCommand {
  constructor(light) { this.light = light; }
  execute() { this.light.turnOn(); }
  undo()    { this.light.turnOff(); }
}

// The invoker: it only knows "run a command", not what it does
class Remote {
  constructor() { this.history = []; }
  press(command) {
    command.execute();
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

const light = new Light();
const remote = new Remote();

remote.press(new TurnOnCommand(light)); // Light is ON
remote.undo();                          // Light is OFF
