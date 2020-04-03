const repeatString = function(word , num) {
  if (num < 0) {
    return 'ERROR'
  } else {
    var repeat = word.repeat ([num]);
    return repeat
  }
}

module.exports = repeatString
