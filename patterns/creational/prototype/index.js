// Prototype: copy an existing object instead of building a new one from scratch.
// Run: node index.js

const enemyPrototype = { health: 100, speed: 5, type: "goblin" };

function cloneEnemy(overrides = {}) {
  return { ...enemyPrototype, ...overrides };
}

const fastGoblin = cloneEnemy({ speed: 9 });

console.log(fastGoblin);     // { health: 100, speed: 9, type: 'goblin' }
console.log(enemyPrototype); // { health: 100, speed: 5, type: 'goblin' } (unchanged)
