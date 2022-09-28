function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    return (1);
  }
  while (n > 1) {
    n--;
    result = result * n;
  }
  return result;
}

/*

// второй способ

function faclorial_for(n) {
    if (n === 0 || n === 1) {
        return (1);
    }
    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }
    return n;
}

*/
