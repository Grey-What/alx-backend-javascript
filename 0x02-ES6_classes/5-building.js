/*
 * new.target - In class constructors, it refers to the class that new was called upon,
 * which may be a subclass of the current constructor,
 * because subclasses transitively call the superclass's constructor through super().
 */
export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = newSqft;
  }
}
