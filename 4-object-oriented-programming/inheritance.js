class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} make a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call Animal parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} BARK! BARK!`);
  }
}

const dog = new Dog("Rich", "Shepherd");
dog.speak();
