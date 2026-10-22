// State: behavior changes as the object moves between states.
// Run: node index.js

class Red {
  next(light) {
    console.log("RED: stop");
    light.setState(new Green());
  }
}
class Green {
  next(light) {
    console.log("GREEN: go");
    light.setState(new Yellow());
  }
}
class Yellow {
  next(light) {
    console.log("YELLOW: slow down");
    light.setState(new Red());
  }
}

class TrafficLight {
  constructor() { this.state = new Red(); }
  setState(state) { this.state = state; }
  next() { this.state.next(this); }
}

const light = new TrafficLight();
light.next(); // RED: stop
light.next(); // GREEN: go
light.next(); // YELLOW: slow down
light.next(); // RED: stop
