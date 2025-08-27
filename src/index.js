module.exports = function reverse(number) {
  const numText = Math.abs(number).toString();
  const reverseText = numText.split('').reverse().join('');
  const reverseNumber = parseInt(reverseText, 10);
  return reverseNumber;
};
