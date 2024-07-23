export default function createIteratorObject(report) {
  const iterator = [];
  for (const element of Object.values(report.allEmployees)) {
    iterator.push(...element);
  }
  return iterator;
}
