function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      return new Error();
    });
}

// Example usage
const promiseSuccess = Promise.resolve('data');
const promiseFailure = Promise.reject('error');

handleResponseFromAPI(promiseSuccess)
  .then(response => {
    console.log(response);
  });

handleResponseFromAPI(promiseFailure)
  .then(response => {
    console.log(response);
  });
