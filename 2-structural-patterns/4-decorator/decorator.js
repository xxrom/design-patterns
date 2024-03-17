class Coffee {
  cost() {
    return 5;
  }
}

/* Milk Decorator */
class CoffeeWithMilk {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

/* Sugar Decorator */
class CoffeeWithSugar {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 0.5;
  }
}

const myCoffee = new Coffee();
console.log("Decorator, simple coffee cost: ", myCoffee.cost());

// Adding new features to cost method without touching init method / class
const myCoffeeMilk = new CoffeeWithMilk(myCoffee);
console.log("coffee with milk: ", myCoffeeMilk.cost());

// Adding Sugar to cost method without changing init class
const myCoffeeMilkSugar = new CoffeeWithSugar(myCoffeeMilk);
console.log("coffee with milk+sugar: ", myCoffeeMilkSugar.cost());
