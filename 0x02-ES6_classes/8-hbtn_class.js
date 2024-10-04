class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override valueOf to return the size when cast to a Number
  valueOf() {
    return this._size;
  }

  // Override toString to return the location when cast to a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
