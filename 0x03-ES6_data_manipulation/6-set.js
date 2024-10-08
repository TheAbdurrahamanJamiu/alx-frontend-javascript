function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  return new Set(arr);
}

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = setFromArray(array);
console.log(uniqueSet); // Expected output: Set { 1, 2, 3, 4, 5 }
