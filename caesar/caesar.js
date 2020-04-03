function caesar(string, num) {
  var completeString = [];

  const alphabetLowerCase = [
      97, 98, 99, 100, 101, 102, 103,
      104, 105, 106, 107, 108, 109,
      110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 120, 121, 122
    ];

  const alphabetUpperCase = [
      65, 66, 67, 68, 69, 70, 71,
      72, 73, 74, 75, 76, 77, 78,
      79, 80, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 90
    ];

  for (i = 0; i < string.length; i++) {
    var int = string.charCodeAt(i);

    if (int < 65 || (int < 97 && int > 90) || int > 122) {
      var origString = String.fromCharCode(int);
      completeString.push(origString);
      continue;
    } else {
        if(int > 96) {
          var position = alphabetLowerCase.indexOf(int);
          var newPosition = (position + num)%26;

          if(newPosition < 0) {
            var completeInt = alphabetLowerCase[newPosition + 26];
          } else {
            var completeInt = alphabetLowerCase[newPosition];
          }

        } else {
          var position = alphabetUpperCase.indexOf(int);
          var newPosition = (position + num)%26;
          if(newPosition < 0) {
            var completeInt = alphabetUpperCase[newPosition + 26];
          } else {
            var completeInt = alphabetUpperCase[newPosition];
          }
       }
    }
    var newString = String.fromCharCode(completeInt);
    completeString.push(newString);
  }
  return completeString.join('')
}





module.exports = caesar
