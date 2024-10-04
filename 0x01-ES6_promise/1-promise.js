function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Example usage
getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
