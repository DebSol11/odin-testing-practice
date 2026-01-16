function ceasarCipher(str, shiftFactor) {
  // str = str.toLowerCase();
  let result = [];
  let charCode = 0;
  let regExPattern = /[a-z]/i; // i = case-insensitive flag

  for (i = 0; i < str.length; i++) {
    if (regExPattern.test(str[i]) === false) {
      result[i] = str[i];
    } else {
      charCode = str[i].charCodeAt() + shiftFactor;
      result[i] = charCode;
      if (result[i] > 122) {
        let overflowCounter = result[i] - 122;
        result[i] = 97 + (overflowCounter - 1);
      }
      result[i] = String.fromCharCode(result[i]);
    }
  }
  result = result.join("");
  return result;
}
// string = "K"
// console.log(string.charCodeAt());

module.exports = ceasarCipher;
