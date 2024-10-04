function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ data: 'Response from API' });
      } else {
        reject(new Error('Error fetching data from API'));
      }
    }, 1000);
  });
}

getResponseFromAPI()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
