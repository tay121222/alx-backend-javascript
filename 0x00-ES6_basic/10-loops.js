export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const value of array) {
    myarray.push(appendString + value);
  }

  return myarray;
}
