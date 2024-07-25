/*
 * [Symbol.toPrimitive] - can control what a class return when casted into a primitive
*/
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this.location = location;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') throw new TypeError('Size must be a number');
    this._size = newSize;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') throw new TypeError('Location must be a string');
    this._location = newLocation;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  /* context of number */
  Valueof() {
    return this._size;
  }

  /* context of string */
  toString() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
