const checkNum = num => {
  
  let numArray = num.toString().split('').map(Number);
  
  let finArray = [];
  let counter = 0;
  for (let i = numArray.length-1; i >= 0; i--) {
    let num = numArray[i]
    if (counter % 2 == 0) {
      finArray.push(num);
      counter++;
    } else {
      num = num*2;
      counter++
      if (num > 9) {
        num = num-9;
        finArray.push(num);
      } else {
        finArray.push(num);
      }
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  finArray = finArray.reduce(reducer);
  if (finArray % 10 == 0) {
    return true;
  } else {
    return false;
  }
}



console.log(checkNum(79927398713));
//true
console.log(checkNum(78878890989));
//false
console.log(checkNum(4539677908016808));
//true