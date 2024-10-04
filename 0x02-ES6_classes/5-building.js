class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor === Building) {
      throw new Error("Cannot instantiate abstract class Building directly.");
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

class SomeBuilding extends Building {
  constructor(sqft) {
    super(sqft);
  }

  evacuationWarningMessage() {
    return `This building with ${this.sqft} square feet needs to be evacuated!`;
  }
}

try {
  const building = new Building(500);
} catch (error) {
  console.log(error.message);
}

const myBuilding = new SomeBuilding(1000);
console.log(myBuilding.evacuationWarningMessage());
