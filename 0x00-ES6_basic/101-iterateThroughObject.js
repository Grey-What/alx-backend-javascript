export default function iterateThroughObject(reportWithIterator) {
  let combination = '';
  for (const [idx, element] of Object.entries(reportWithIterator)) {
    combination += `${element}`;

    if (parseInt(idx) !== reportWithIterator.length - 1) {
      combination += ' | ';
    }
  }
  return combination;
}
