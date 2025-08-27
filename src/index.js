module.exports = function reverse(number) {
  let numText = Math.abs(number).toString();;
  let reverseText = numText.split('').reverse().join('');
  let reverseNumber = parseInt(reverseText,10);
  return reverseNumber;
};
