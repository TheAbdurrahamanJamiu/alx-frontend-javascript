const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}

const car1 = new Car('Toyota', 'V6', 'Red');
const car2 = car1.cloneCar();

console.log(car1);
console.log(car2);
console.log(car1 === car2);
