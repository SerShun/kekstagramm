export function getRandomNumber(min, max) {
  min = Math.max(min, -1);

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayElement(array) {
  const index = getRandomNumber(0, array.length - 1);
  return array[index];
}

export function generateId() {
  let id = 0;
  return () => ++id;
}
