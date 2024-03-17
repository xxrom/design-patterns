class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

/*

Employee Factory will contain all needed logic for creating
different types of employee.

*/
class EmployeeFactory {
  static create(name, type) {
    switch (type) {
      case "Developer":
        return new Developer(name, type);
      case "Tester":
      default:
        return new Tester(name, type);
    }
  }
}

const developer = EmployeeFactory.create("John", "Developer");
console.log("Factory - Developer", developer);

const tester = EmployeeFactory.create("Ken", "Tester");
console.log("Factory - Tester", tester);
