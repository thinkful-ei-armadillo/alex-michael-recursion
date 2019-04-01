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

function anagram(word){
  let results = [];
  if(word.length <= 1){
    return [word];
  }
  const str = word.split('');
  str.forEach((letter, idx) => {
    let charLeft = [...str.slice(0, idx), ...str.slice(idx + 1)].join('');
    const permutations = anagram(charLeft);
    permutations.forEach(permutation => {
      results.push(letter + permutation);
    });
  });
  return results;
}

function binary(num){
  if(num < 1){
    return '';
  }
  return binary(num / 2) + Math.floor(num % 2);
}

function checkValidMove(cell) {
  return !(cell === 'v' || cell === '*' || !cell);
}

function getPossibleMoves(maze, pos) {
  //get all valid moves:
  let moves = {
    'R': [pos[0], pos[1] + 1],
    'L': [pos[0], pos[1] - 1],
  };
  if (pos[0] !== 0) {
    moves['U'] = [pos[0] - 1, pos[1]];
  }
  if (pos[0] !== maze.length - 1) {
    moves['D'] = [pos[0] + 1, pos[1]];
  }

  for (let key of Object.keys(moves)) {
    let posArr = moves[key];
    let cell = maze[ posArr[0] ][ posArr[1] ];
    if (!checkValidMove(cell)) {
      delete moves[key];
    }
  }
  return moves;
}
                                //y , x
function solveMaze(maze, pos = [0, 0]) {
  if ( maze[pos[0]][pos[1]] === 'e' ) {
    return 'e';
  }
  maze[pos[0]][pos[1]] = 'v';
  const moves = getPossibleMoves(maze, pos);

  const numMoves = Object.keys(moves).length;
  if (numMoves === 0) {
    return;
  }
  for (let key of Object.keys(moves)) {
    const nextPos = moves[key];
    const solve = solveMaze(maze, nextPos);
    if (solve === 'e') {
      return key;
    }
    if (solve) {
      return key + solve;
    }
  }
}

function copyMazeArray(maze) {
  let newMaze =[];
  maze.forEach(subArray => {
    newMaze.push([...subArray]);
  });
  return newMaze;
}

function solveAllMaze(maze, pos = [0, 0], prevMoves = '') {
  maze = copyMazeArray(maze);
  if ( maze[pos[0]][pos[1]] === 'e' ) {
    return 'e';
  }
  maze[pos[0]][pos[1]] = 'v';
  const moves = getPossibleMoves(maze, pos);

  const numMoves = Object.keys(moves).length;
  if (numMoves === 0) {
    return;
  }
  for (let key of Object.keys(moves)) {
    const nextPos = moves[key];
    prevMoves = prevMoves + key;
    const solve = solveAllMaze(maze, nextPos, prevMoves);
    if (solve === 'e') {
      console.log('Path to the exit:', prevMoves);
    }
    if (solve && solve !== 'e') {
      return key + solve;
    }
    //hacky, but removes the key if the route didn't work.
    prevMoves = prevMoves.slice(0, prevMoves.length - 1);
  }
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

solveAllMaze(maze);
