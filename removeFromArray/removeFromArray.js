
const removeFromArray = function(array, arg1, arg2, arg3, arg4) {

 if (array.indexOf(arg1) > -1) {
let firstChange= array.splice(array.indexOf(arg1) , 1);
}

 if (array.indexOf(arg2) > -1) {
var secondChange= array.splice(array.indexOf(arg2) , 1);
}
 if (array.indexOf(arg3) > -1) {
let thirdChange= array.splice(array.indexOf(arg3) , 1);
}
 if (array.indexOf(arg4) > -1) {
let fourthChange= array.splice(array.indexOf(arg4) , 1);
}

return array;
}

module.exports = removeFromArray
