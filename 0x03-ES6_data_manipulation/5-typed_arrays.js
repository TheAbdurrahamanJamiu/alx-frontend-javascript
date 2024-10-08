function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return int8Array;
}

try {
  const int8Array = createInt8TypedArray(10, 2, 42);
  console.log(int8Array);
} catch (error) {
  console.error(error.message);
}
