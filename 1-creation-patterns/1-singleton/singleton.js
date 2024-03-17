/*

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. 
It is used when only one instance of a class is needed to control the action throughout the execution.

*/
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }

    this._data = data;
    Database.instance = this;
    Database.exists = true;

    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// Create new instance
const mongoDB = new Database("mongoDB");
console.log("mongoDB => ", mongoDB.getData()); // mongoDB

// If we will try to create another one DB it will return existed DB instance
const anotherDB = new Database("anotherDB");
console.log("anotherDB => ", anotherDB.getData()); // mongoDB

// All instances will be the same
console.log("mongoDB === anotherDB => ", mongoDB === anotherDB); // true
