// Strategy Common Interface
class PaymentStrategy {
  pay(amount) {}
}

// Concrete Strategy
class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying $${amount} using PayPal`);
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Paying $${amount} using CreditCard`);
  }
}

/* 
SOLID OPEN/CLOSE PRINCIPLE, 
open - for extension, close - for modification 

We can add as many different strategies as we would like
*/

/*
Payment Context
It will be like control class that will use provided strategy
*/
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    this.strategy.pay(amount);
  }
}

const payment = new PaymentContext(new PayPalPayment());
payment.executePayment(10); // pay using PayPal

// We can change payment strategy in runtime

payment.setStrategy(new CreditCardPayment());
payment.executePayment(20); // pay using CreditCard
