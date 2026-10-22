// Singleton: only one instance, shared everywhere.
// Run: node index.js

class AppConfig {
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;
    this.settings = { theme: "dark" };
    AppConfig.instance = this;
  }
}

const a = new AppConfig();
const b = new AppConfig();

b.settings.theme = "light";

console.log(a === b);          // true
console.log(a.settings.theme); // light
