class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value; // This should set the value to this._name
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

// Example usage (uncomment if needed)
const airportInstance = new Airport('Heathrow', 'LHR');
console.log(airportInstance.name);
