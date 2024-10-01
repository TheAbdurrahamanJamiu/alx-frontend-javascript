export default function createIteratorObject(report) {
  return Object.keys(report).flatMap((department) => report[department]);
}
