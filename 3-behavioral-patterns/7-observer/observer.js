/* 
Main Product that will notify Observers after particular change
Product *doesn't* need to *know* anything about *Observers*
*/
class Product {
  constructor() {
    console.log("Created new Product");
    this.price = 0;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const removeIndex = this.observers.indexOf(observer);

    if (removeIndex > -1) {
      this.observers = this.observers.filter(
        (_v, index) => index !== removeIndex
      );
    }
  }

  setPrice(price) {
    console.log("Set new price in product");
    this.price = price;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Watch Product changes
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(product) {
    console.log(
      `Observer ${this.name}: something has been updated in product`,
      product
    );
  }
}

const product = new Product();

const observer0 = new Observer("observer0");
const observer1 = new Observer("observer1");

product.addObserver(observer0);
product.addObserver(observer1);

product.setPrice(123);
