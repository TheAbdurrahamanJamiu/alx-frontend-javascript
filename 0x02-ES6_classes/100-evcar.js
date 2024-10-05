import Car from './10-car';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

const evCar1 = new EVCar('Tesla', 'Electric', 'Blue', '300 miles');
const car1 = evCar1.cloneCar();

console.log(evCar1);
console.log(car1);
console.log(evCar1 instanceof EVCar);
console.log(car1 instanceof Car);
console.log(car1 instanceof EVCar);
