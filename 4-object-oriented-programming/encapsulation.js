function Car(model, year) {
  let _model = model;
  let _year = year;

  // Private methods (because we are not using `this`)
  function getCarPrice() {
    return 100000 * (2050 - _year);
  }

  // Public methods
  this.getModelAndYear = function () {
    return `model: ${_model}, year: ${_year}, price: ${getCarPrice()}`;
  };
}

const car = new Car("Toyota", 2020);
console.log(car.getModelAndYear());
