function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

// Example usage:
signUpUser('John', 'Doe').then(user => console.log(user));
