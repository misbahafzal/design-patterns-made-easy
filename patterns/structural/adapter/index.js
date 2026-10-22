// Adapter: make two mismatched things work together.
// Run: node index.js

class OldPaymentSystem {
  processPayment(amountInDollars) {
    console.log(`Processing $${amountInDollars}`);
  }
}

class PaymentAdapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }
  makePayment(amountInCents) {
    this.oldSystem.processPayment(amountInCents / 100);
  }
}

const adapter = new PaymentAdapter(new OldPaymentSystem());
adapter.makePayment(2500); // Processing $25
