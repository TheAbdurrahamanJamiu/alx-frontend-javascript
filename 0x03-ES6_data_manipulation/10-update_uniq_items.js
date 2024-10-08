function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update quantities
  groceries.forEach((quantity, name) => {
    if (quantity === 1) {
      groceries.set(name, 100); // Update quantity to 100
    }
  });

  // Return the updated map
  return groceries;
}

// Example usage:
const myGroceries = new Map([
  ['Apples', 10],
  ['Tomatoes', 10],
  ['Pasta', 1],
  ['Rice', 1],
  ['Banana', 5],
]);

try {
  const updatedGroceries = updateUniqueItems(myGroceries);
  console.log(updatedGroceries); // Display updated map

  // Optional: Displaying the updated groceries in a readable format
  updatedGroceries.forEach((quantity, name) => {
    console.log(`${name}: ${quantity}`);
  });
} catch (error) {
  console.error(error.message);
}
