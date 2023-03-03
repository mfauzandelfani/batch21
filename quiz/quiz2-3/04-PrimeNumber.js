function showPrimeNumber(n) {
  isPrime(n);
}

function isPrime(n) {
  var arrays = [];
  for (let i = 1; i < n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
     if (i > 1 && flag == 0) {
       arrays.push(i)
     }
  }
  console.log(arrays);
 
}

showPrimeNumber(100);
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
