/**
 * createInt8TypedArray
 * @param {number} length: bytelength of buffer
 * @param {number} position: of inserted value
 * @ param {number} value: to insert at position
 * return Int8array buffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer, 0, length);
  int8Array.set([value], position);
  return new DataView(buffer);
}
