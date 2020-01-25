function sumAll(num1 , num2) {
   if(typeof num1 === 'string' || typeof num2 === 'string') {
      return 'ERROR';
  }

   let sum = 0;
   if(num2 > num1 && num1 > -1) {
      for (let i = num1; i <= num2; i ++) {
      sum += i;
     }
   } else if(num1 > num2 && num2 > -1) {
      for (let i = num2; i <= num1; i ++) {
      sum += i;
     }
   } else {
      return 'ERROR';
   }

  return sum;
}

module.exports = sumAll
