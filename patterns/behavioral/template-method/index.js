// Template Method: fixed recipe, subclasses fill in some steps.
// Run: node index.js

class Beverage {
  // The template: the order of steps is fixed
  prepare() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addExtras();
  }

  boilWater() { console.log("Boiling water"); }
  pourInCup() { console.log("Pouring into cup"); }

  // Subclasses must fill this in
  brew() { throw new Error("brew() must be implemented"); }

  // Optional step: does nothing unless a subclass overrides it
  addExtras() {}
}

class Tea extends Beverage {
  brew() { console.log("Steeping the tea bag"); }
  addExtras() { console.log("Adding lemon"); }
}

class Coffee extends Beverage {
  brew() { console.log("Dripping coffee through the filter"); }
  addExtras() { console.log("Adding milk and sugar"); }
}

new Tea().prepare();
// Boiling water, Steeping the tea bag, Pouring into cup, Adding lemon

new Coffee().prepare();
// Boiling water, Dripping coffee through the filter, Pouring into cup, Adding milk and sugar
