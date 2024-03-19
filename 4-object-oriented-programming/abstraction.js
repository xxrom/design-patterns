/*

Abstraction in Object-Oriented Programming (OOP) is a concept and design principle that focuses on hiding the complex reality while exposing only the necessary parts. It's about creating simple, high-level interfaces that allow you to interact with a more complex system in an easier way. Abstraction lets you focus on what an object does instead of how it does it by highlighting the essential qualities and hiding the irrelevant details.

*/

class User {
  constructor(name) {
    // Simulating "Abstract" class concept in JS
    if (this.target === User) {
      throw new Error(
        "User is an abstraction and cannot be instantiated directly"
      );
    }

    this.name = name;
  }

  // Assuming that this method should be implemented in subclasses
  getPermissions() {
    throw new Error('method "getPermissions" mast be implemented.');
  }

  displayName() {
    console.log(`Name: ${this.name}`);
    return this.name;
  }
}

class Admin extends User {
  getPermissions() {
    return ["read", "write", "create", "delete"];
  }
}

class Guest extends User {
  getPermissions() {
    return ["read"];
  }
}

try {
  const user = new User("Bob");
} catch (e) {
  console.error("Error", e.message);
}

const admin = new Admin("John");
console.log(
  `Admin name: ${admin.displayName()}, accesses: ${admin.getPermissions()}`
);

const guest = new Guest("Kate");
console.log(
  `Guest name: ${guest.displayName()}, accesses: ${guest.getPermissions()}`
);
