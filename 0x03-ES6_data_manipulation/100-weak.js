const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
