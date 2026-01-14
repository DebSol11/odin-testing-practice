function ceasarCipher(string, shiftFactor) {
  string = string.toLowerCase();
  let result = "";
  let charCode = 0;

  for (i = 0; i < string.length; i++) {
    charCode = string[i].charCodeAt() + shiftFactor;
    // pseudocode
    // if (charCode > Z.charCode) {
    
    // }
    result += charCode.fromCharCode();
  }
  return result.replace(charCode.fromCharCode(), " ");
}


