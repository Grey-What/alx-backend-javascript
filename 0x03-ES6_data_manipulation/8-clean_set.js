/**
 * cleanSet - retruns a string of all set values that start with a specific string
 * @param {Set} set
 * @param {string} startString
 * return {string}
 */
export default function cleanSet(set, startString) {
  const tempArray = [];

  if (startString === undefined || startString.length === 0) return '';

  for (const string of set.values()) {
    if (string.startsWith(startString)) {
      tempArray.push(string.substring(startString.length));
    }
  }
  return tempArray.join('-');
}
