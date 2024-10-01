export function taskFirst() {
  var task = 'I prefer const sometimes.';
  return task;
}

export function getLast() {
  return ' okay';
}

export function taskNext() {
  var combination = 'But you know let is not that bad';
  combination += getLast();

  return combination;
}
