function getMinMax(str) {
  let numArray = str.split(' ').filter(function (el) {
    return !isNaN(parseFloat(el)) && isFinite(el);
  });

  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = +numArray[i];
  }

  numArray.sort(function (a, b) {
    return a - b;
  });


  return {
    min: numArray[0],
    max: numArray[numArray.length - 1]
  };
}
