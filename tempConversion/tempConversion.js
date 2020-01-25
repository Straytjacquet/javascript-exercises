const ftoc = function(fTemp) {
  var cTemp = (fTemp - 32) * (5 / 9);
  var cTempRounded = Math.round(cTemp * 10) / 10;
  return cTempRounded;
}

const ctof = function(cTemp) {
  var fTemp = cTemp * (9 / 5) + 32;
  var fTempRounded = Math.round(fTemp * 10) / 10;
  return fTempRounded;
}

module.exports = {
  ftoc,
  ctof
}
