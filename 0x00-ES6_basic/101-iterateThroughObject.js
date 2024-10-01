export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((acc, employee) => `${acc}${employee} | `, '');
}
