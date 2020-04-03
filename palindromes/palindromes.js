const palindromes = function(string) {
  var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
  var lowerCase = string.toLowerCase();
  var rawLetters = lowerCase.split("");
  var cleanLetters = rawLetters.filter(function(letter) {
    return punctuation.indexOf(letter) === -1;
  });
  var forwardString = cleanLetters.join("");
  var reverseLetters = cleanLetters.reverse();
  var reverseString = reverseLetters.join("");

  if (forwardString === reverseString) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes
