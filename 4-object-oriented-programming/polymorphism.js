class Car {
  constructor(name) {
    this.name = name;
    this.maxSpeed = 100;
  }

  go() {
    console.log(`${this.name} speed ${this.maxSpeed}`);
  }
}

class SuperCar extends Car {
  constructor(name) {
    super(name);
    this.maxSpeed = 300;
  }

  go() {
    console.log(`${this.name} ... preparing ...`);
    console.log(`${this.name} >>> speeed >>> ${this.maxSpeed}`);
  }
}

const simpleCar = new Car("fiat");
const superCar = new SuperCar("lamba");

simpleCar.go();
superCar.go();
