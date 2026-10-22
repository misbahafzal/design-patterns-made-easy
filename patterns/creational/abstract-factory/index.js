// Abstract Factory: ask for a whole matching set of objects.
// Run: node index.js

class LightButton { render() { return "light button"; } }
class LightInput  { render() { return "light input"; } }
class DarkButton  { render() { return "dark button"; } }
class DarkInput   { render() { return "dark input"; } }

class LightThemeFactory {
  createButton() { return new LightButton(); }
  createInput() { return new LightInput(); }
}

class DarkThemeFactory {
  createButton() { return new DarkButton(); }
  createInput() { return new DarkInput(); }
}

function buildUI(factory) {
  const button = factory.createButton();
  const input = factory.createInput();
  // both guaranteed to match the same theme
  console.log(`${button.render()} + ${input.render()}`);
}

buildUI(new LightThemeFactory()); // light button + light input
buildUI(new DarkThemeFactory());  // dark button + dark input
