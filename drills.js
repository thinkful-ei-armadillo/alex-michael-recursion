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

countingSheep(5);