/**
 * hasValuesFromArray - returns boolean if elements of array is in set
 * @param {Set} set
 * @param {Array} array
 * @return {boolean}
 */
export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  return set.isSupersetOf(arraySet);
}
