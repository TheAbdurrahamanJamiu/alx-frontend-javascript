function groceriesList() {
  // Create a new Map to hold the groceries
  const groceries = new Map();

  // Set the grocery items and their quantities
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the map of groceries
  return groceries;
}

// Example of calling the function
const myGroceries = groceriesList();
console.log(myGroceries);

// Optional: Displaying the groceries in a readable format
myGroceries.forEach((quantity, name) => {
  console.log(`${name}: ${quantity}`);
});
