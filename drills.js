function countingSheep(num){
  // input is the number of sheep
  // output is num + of sheep have jumped or all sheep have jumped

  if(num === 0){
    console.log('All sheep have jumped over the fence');
    return;
  }
  console.log(num + ': Another sheep jumped over the fence');
  countingSheep(num - 1);
}

function powerCalculator(n, exp) {
  //exp is how many times we 'recurse'

  //if less than 0 return error
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  //anything to 0 power = 1
  if (exp === 0) {
    return 1;
  }
  //base case, should stop at 1
  if (exp === 1) {
    return n;
  }

  const e = n * powerCalculator(n, exp-1);
  return e;
}

console.log(powerCalculator(10, -4));