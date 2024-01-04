export default function appendToEachArrayValue(array, appendString) {
  const arrayme = [...array];
  for (const [idx, value] of arrayme.entries()) {
    arrayme[idx] = appendString + value;
  }

  return arrayme;
}
