const { add, multiply } = require("test-repo-2");

function scaleReport(values, factor) {
  return values.map((n) => multiply(n, factor));
}

function sumReport(values) {
  return values.reduce((acc, n) => add(acc, n), 0);
}

const sample = [2, 4, 6];
console.log("scaled:", scaleReport(sample, 3));
console.log("sum:", sumReport(sample));

module.exports = { scaleReport, sumReport };
