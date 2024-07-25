export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('Division by zero');
  }
  return numerator / denominator;
}
