function checkSpam(str) {
  let excluded = ['1xBet', 'XXX'];
  return excluded.some(value => str.toLowerCase().search(value.toLowerCase()) !== -1);
}
