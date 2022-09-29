function sumSalary(salaries) {
  // Способ 1
  /*
    let result = 0;
    for (let key in salaries) {

      if (!isNaN(salaries[key]) && (typeof salaries[key] === "number") && isFinite(salaries[key])) {

        result += salaries[key];
      }

    }
    return result;
  */

  // Способ 2
  const getIntegersOnly = value => !isNaN(value) && typeof value === 'number' && isFinite(value);
  const getSum = (sum, current) => sum += current;

  const sumList = (obj) => Object.values(obj)
    .filter(getIntegersOnly)
    .reduce(getSum, 0);

  return (sumList(salaries));
}
