export default function appendToEachArrayValue(array, appendString) {
  const retArray = [];
  for (const value of array) {
    retArray.push(appendString + value);
  }

  return retArray;
}
