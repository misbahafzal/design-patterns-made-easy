// Strategy: one job, many swappable ways to do it.
// Run: node index.js

// Each strategy has the same method name: pay()
const creditCard = { pay: (amount) => console.log(`Charged $${amount} to credit card`) };
const paypal     = { pay: (amount) => console.log(`Charged $${amount} via PayPal`) };
const applePay   = { pay: (amount) => console.log(`Charged $${amount} via Apple Pay`) };

class Checkout {
  constructor(paymentStrategy) { this.strategy = paymentStrategy; }
  setStrategy(strategy) { this.strategy = strategy; }
  complete(amount) { this.strategy.pay(amount); }
}

const checkout = new Checkout(creditCard);
checkout.complete(50);   // Charged $50 to credit card

checkout.setStrategy(paypal);
checkout.complete(80);   // Charged $80 via PayPal

checkout.setStrategy(applePay);
checkout.complete(20);   // Charged $20 via Apple Pay
