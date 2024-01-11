export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const filValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .filter((value, index, self) => value && value !== self[index - 1]);

  return filValues.length > 0 ? filValues.join('-') : '';
}
