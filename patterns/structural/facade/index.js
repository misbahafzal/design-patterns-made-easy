// Facade: hide a complicated system behind one simple interface.
// Run: node index.js

class Checkout {
  placeOrder(cart, card) {
    this.validateCart(cart);
    this.chargeCard(card);
    this.updateInventory(cart);
    this.sendConfirmationEmail(card.email);
  }
  validateCart(cart) { console.log(`Validating cart with ${cart.items.length} items`); }
  chargeCard(card) { console.log(`Charging card ending in ${card.last4}`); }
  updateInventory(cart) { console.log("Updating inventory"); }
  sendConfirmationEmail(email) { console.log(`Sending confirmation to ${email}`); }
}

const cart = { items: ["book", "pen"] };
const card = { last4: "4242", email: "sara@example.com" };

new Checkout().placeOrder(cart, card);
// Validating cart with 2 items
// Charging card ending in 4242
// Updating inventory
// Sending confirmation to sara@example.com
