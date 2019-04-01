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

function strReverse(str){
  // input is string
  // output is reversed string

  if(str === ''){
    return '';
  }
  let last = str[str.length - 1];
  let result = last + strReverse(str.slice(0, str.length - 1));
  return result;
}

function triangle(n) {
  if (n === 1) {
    return 1;
  }
  return n + triangle(n-1);
}

function splitter(str, delim){
  // input is a string `02/20/2020`
  // output is string without delimiters `02202020`

  if(str.length === 0){
    return '';
  }
  let delimIdx = str.indexOf(delim);
  if(delimIdx === -1){
    return str;
  }
  let result = str.slice(0, (delimIdx));
  return result + splitter(str.slice(delimIdx + 1), delim);
}

function fib(n, sum = 1, prev = 0) {
  if (n === 0) {
    return '.';
  }
  const newSum = sum + prev;
  const newPrev = sum;
  //quick hack to prevent commas before first num
  if (prev === 0) {
    return `${sum}` + fib(n-1, newSum, newPrev);
  }
  return `, ${sum}` + fib(n-1, newSum, newPrev);
}

function factorial(num){
  if(num === 0){
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));