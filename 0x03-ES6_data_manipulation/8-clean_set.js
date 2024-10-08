function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('First argument must be a Set');
  }

  if (typeof startString !== 'string') {
    return ''; // If startString is not a string, return an empty string
  }

  const result = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length)); // Remove startString from each value

  return result.join('-');
}

// Example of calling the function
const mySet = new Set(['apple', 'banana', 'apricot', 'cherry', 'avocado']);
const startString = 'ap';

const result = cleanSet(mySet, startString);
console.log(result); // Expected output: "ple-ricot-ocado"
