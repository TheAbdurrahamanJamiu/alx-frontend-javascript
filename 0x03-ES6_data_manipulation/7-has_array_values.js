function hasValuesFromArray(set, arr) {
  if (!(set instanceof Set)) {
    throw new TypeError('First argument must be a Set');
  }

  if (!Array.isArray(arr)) {
    throw new TypeError('Second argument must be an array');
  }

  return arr.every((value) => set.has(value));
}

const mySet = new Set([1, 2, 3, 4, 5]);
const myArray = [1, 2, 3];

const result = hasValuesFromArray(mySet, myArray);
console.log(result); // Expected output: true

const anotherArray = [1, 6];
const result2 = hasValuesFromArray(mySet, anotherArray);
console.log(result2); // Expected output: false
